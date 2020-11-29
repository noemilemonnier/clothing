<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="sideNav" >
      <v-list dense flat nav>
        <div class="text-center ma-3">
          <nuxt-link to="/"><img src="/img/logo.png" contain width="110px" height="110px" alt="Clothing Warehouse"/> </nuxt-link>
        </div>
        <v-divider/>
        <v-list-item class="mt-1" link nuxt to="/"><v-icon color="grey darken-2" size="28px">{{ $i.mdiHomeVariant }}</v-icon >&emsp;Home page</v-list-item>
        <v-list-item class="mt-1" link nuxt to="/jackets">&emsp;Jackets</v-list-item>
        <v-list-item class="mt-1" link nuxt to="/shirts">&emsp;Shirts</v-list-item>
        <v-list-item class="mt-1" link nuxt to="/accessories">&emsp;Accessories</v-list-item>
        <v-divider/>
      </v-list>
      <template v-slot:append>
				<v-list-item><v-spacer/><v-btn x-small class="white--text" text color="accent">Made by Noemi Lemonnier</v-btn><v-spacer/></v-list-item>
			</template>
    </v-navigation-drawer>

    <v-app-bar app dense short>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="sideNav = !sideNav"></v-app-bar-nav-icon>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text nuxt to="/">Home page</v-btn>
          <v-btn  text nuxt to="/jackets">Jackets</v-btn>
          <v-btn text nuxt to="/shirts">Shirts</v-btn>
          <v-btn text nuxt to="/accessories">Accessories</v-btn>
        </v-toolbar-items>
      <v-spacer> </v-spacer>
      <nuxt-link to="/" class="hidden-sm-and-down ml-5"><img src="/img/logo.png" contain width="45px" height="45px" alt="Aidline logo" /></nuxt-link>
        <v-spacer> </v-spacer>
        <v-btn icon color="secondary" @click.stop="onDarkModeToggled"><v-icon size="28px">{{ $i.mdiThemeLightDark }}</v-icon></v-btn>
    </v-app-bar>

    <v-main>
      <v-container >
        <nuxt />
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    sideNav: false,
    i: {},
  }),
  mounted() {
    setTimeout(() => {
      if (localStorage.darkMode)
        this.$vuetify.theme.dark = localStorage.darkMode === 'true'
    }, 10)
  },
  methods: {
    onDarkModeToggled() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.darkMode = this.$vuetify.theme.dark
    },
  },
}
</script>