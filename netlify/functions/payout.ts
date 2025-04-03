import type { Context } from "@netlify/functions";

import RebillyAPI from "rebilly-js-sdk";

const REBILLY_API_SECRET_KEY = "sk_sandbox_lNFYj-AUBEko3QZ-s4XSaUMwPUMQiXfJ4fs8vE3";
const REBILLY_WEBSITE_ID = "www.luckyclovercasino.com";
const REBILLY_ORGANIZATION_ID = "phronesis-lucky-clover-casino";
const CUSTOMER_ID = "cus_01JPMQYSZZV8X6SQCWS27D3KCX";

const rebilly = RebillyAPI({
  sandbox: true,
  organizationId: REBILLY_ORGANIZATION_ID,
  apiKey: REBILLY_API_SECRET_KEY,
  timeout: 10000,
});

export default async (req: Request, context: Context) => {
  if (req.method === 'OPTIONS') {
    const response =  new Response(null, { status: 204 });
    response.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    response.headers.append('Access-Control-Allow-Methods', 'POST');
    response.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.append('Access-Control-Allow-Credentials', 'true');
    return response;
  }

  const response: {
    token?: string,
    payoutRequestId?: string
  } = {};

  const data = {
    mode: "passwordless",
    customerId: CUSTOMER_ID,
  };

  const { fields: login } = await rebilly.customerAuthentication.login({
    data,
  });

  const { fields: exchangeToken } =
    await rebilly.customerAuthentication.exchangeToken({
      token: login.token,
      data: {
        acl: [
          {
            scope: {
              organizationId: [REBILLY_ORGANIZATION_ID],
            },
            permissions: [
              "PostToken",
              "StorefrontGetPaymentInstrumentCollection",
              "StorefrontPostPaymentInstrument",
              "StorefrontGetPaymentInstrument",
              "StorefrontPatchPaymentInstrument",
              "StorefrontGetAccount",
              "StorefrontGetWebsite",
              "StorefrontPostReadyToPay",
              "StorefrontGetPayoutRequestCollection",
              "StorefrontGetPayoutRequest",
              "StorefrontPatchPayoutRequest",
              "StorefrontPostReadyToPayout",
            ],
          },
        ],
        customClaims: {
          websiteId: REBILLY_WEBSITE_ID,
        },
      },
    });

  const body: string = await new Response(req.body).text();
  console.log(body);
  const { amount } = JSON.parse(body);

  console.log(amount);

  const requestPayoutData = {
    websiteId: REBILLY_WEBSITE_ID,
    customerId: CUSTOMER_ID,
    currency: "USD",
    amount
  };

  const { fields: payoutRequest } = await rebilly.payoutRequests.create({
    data: requestPayoutData,
  });

  response.token = exchangeToken.token;
  response.payoutRequestId = payoutRequest.id;

  const responseObj = new Response(JSON.stringify(response));

  responseObj.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  responseObj.headers.append('Access-Control-Allow-Methods', 'POST');
  responseObj.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  responseObj.headers.append('Access-Control-Allow-Credentials', 'true');
  return responseObj;
}
