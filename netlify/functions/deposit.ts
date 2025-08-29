import RebillyAPI from "rebilly-js-sdk";
import type {Context} from "@netlify/functions";

const API_SECRET_KEY = "sk_sandbox_ZFRju65t2NoS6AjSG5oBsXALLBNmwXj_JO8i6bO";
const ORGANIZATION_ID = "phronesis-casino-la-blanca";
const WEBSITE_ID = "lablanca-casino.com";

const rebilly = RebillyAPI({
  organizationId: ORGANIZATION_ID,
  sandbox: true,
  apiKey: API_SECRET_KEY,
  timeout: 5000,
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
  } = {};

  const currency = new URL(req.url).searchParams.get('currency');

  console.log(currency);

  try {
    const cachierResponse = await rebilly.cashiers.create({
      data: {
        websiteId: WEBSITE_ID,
        customerId: "cus_01K3TEGEH60DD2DTXDFKSMG6HN",
        currency: currency,
      },
    });

    response.token = cachierResponse.fields.cashierToken

    const responseObj = new Response(JSON.stringify(response));

    responseObj.headers.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    responseObj.headers.append('Access-Control-Allow-Methods', 'POST');
    responseObj.headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    responseObj.headers.append('Access-Control-Allow-Credentials', 'true');

    return responseObj;
  } catch (error) {
    if (error?.response?.data) {
      console.error(error.response.data);
    } else {
      console.error(error);
    }
  }
}
