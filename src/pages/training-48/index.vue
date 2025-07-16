<script setup lang="ts">
import PhronesisCard from "@/components/phronesis-card.vue";
</script>

<template>
  <v-container>
    <h1 class="font-weight-bold mb-2">
      Debrief Report #48: Custom webhooks
    </h1>

    <v-divider class="mb-4" />

    <h2 class="font-weight-medium">
      Description
    </h2>
    <p>
      <a href="https://team.rebilly.dev/phronesis-training/projects/custom-webhooks">Project 48: Custom webhooks</a>
    </p>

    <v-divider class="mb-4 mt-4" />

    <v-row>
      <v-col cols="12">
        <phronesis-card title="What made us smile 😄">
          <ul class="ml-3">
            <li>
              Teamwork :).
            </li>
            <li>
              There are mocked placeholders when doing “Test webhook”.
            </li>
            <li>
              We could add spaces between brackets in placeholders and it still worked, e.g <code>&#123;&#123;
                subscription.customerId &#125;&#125;</code>
            </li>
          </ul>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          docs
          title="Docs search"
        >
          When searching for “Custom fields” the first result is from Permissions.
          <image-dialog
            image-src="trainings/48/docs-search.png"
            max-width="40"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          suggestion
          title="Webhook requires ID to be passed in certain format"
        >
          We can format webhook ID ourselves and provide preview in the hint text.
          <v-row>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/48/webhook-id.png"
                max-width="90"
              />
            </v-col>
            <v-col cols="6">
              <image-dialog
                image-src="trainings/48/webhook-id-suggestion.png"
                max-width="90"
              />
            </v-col>
          </v-row>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          confusing
          title="No form validation triggered when testing webhook"
        >
          When creating webhook and clicking on “Test webhook” button, the form validation is not triggered. If form
          contains error, no test webhook is sent and no error is displayed, leaving user confused.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          docs
          title="Placeholders in webhook body"
        >
          The documentation doesn’t provide an example of how to pass placeholders into the webhook body.<br><br>
          <p>
            <code>To specify a custom webhook body, click Body, uncheck Use default event payload, and then enter the
              payload body.</code> - no example
          </p>
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          docs
          title="It's not clear how to pass placeholders in webhook body"
        >
          It's not clear how to pass placeholders and where to find the list of available placeholders.
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          issue
          confusing
          title="ProductId condition doesn't work"
        >
          We added Conditions to Webhook for <i>plan > productId</i> - <i>IS IN</i> - <i>[list of products]</i> - it
          didn’t work for us. We had to use <i>plan > planId</i>.

          <image-dialog
            image-src="trainings/48/productId.png"
            max-width="90"
          />
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          confusing
          title="No total value in webhook payload"
        >
          We weren’t sure which value to chose for an amount, so we used MRR, but it didn’t work and we had to use the
          value from <code>subscription.items.0.plan.pricing.price</code> which felt wrong to use like that. Probably we
          miss some total value?
        </phronesis-card>
      </v-col>

      <v-col cols="12">
        <phronesis-card
          suggestion
          confusing
          title="Provide example of webhook body with placeholders"
        >
          Add information how to add placeholders and how to work with arrays, because it's not clear for non-technical users how to do it.
        </phronesis-card>
      </v-col>
    </v-row>
  </v-container>
</template>
