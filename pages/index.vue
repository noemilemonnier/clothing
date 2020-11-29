<template>
<div>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-10" style="width: 100%; height=100%" flat outlined>
        <v-card-title class="headline">
          Welcome to Clothing Warehouse
        </v-card-title>
        <v-card-text>
          <p> This Web App will allow you to access the different type of clothing for this warehouse.</p>
          <hr class="my-3">
          <v-row align="center" justify="center" no-gutters>
              <a href="https://github.com/noemilemonnier/clothing" target="_blank" rel="noopener noreferrer"> Github Repository </a>
          </v-row>
          <hr class="my-3">
          <p align="justify" class="mt-7 caption"><v-icon class="spin">{{$i.mdiCog}}</v-icon> This web app uses NuxtJS, Vue2, Vuetify, Google Map APIs and bad-api-assignment from Reaktor. This web app was developed for Reaktor Evaluation Task.</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>
<script>
export default {
    head: () => ({
        title: "Welcome"
    }),
}
</script>
<style scoped>
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
.spin {
  animation-name: spin;
  animation-duration: 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>