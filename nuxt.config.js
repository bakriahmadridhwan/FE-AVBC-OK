export default {
  tailwindcss: {
    viewer: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "AVBC | AMIKOM VOLLEYBALL CLUB",
    htmlAttrs: {
      lang: "en",
    },
    meta: [{
      charset: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      hid: "description",
      name: "description",
      content: "Nuxt.js project",
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
    // example vue-meta
    {
      hid: "title",
      name: "title",
      content: "Nuxt.js project",
    },
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/logo.png",
    },
    {
      rel: "stylesheet",
      type: "text/css",
      href: "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css",
    },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxt/postcss8",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    '@nuxtjs/toast',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],

  ],

  toast: {
    position: 'bottom-right',
    duration: 3000,
    action: {
      text: "OK",
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: '/',
    baseURL: "https://admin-avbc.choirul-affan.my.id/api",
    // baseURL: "http://127.0.0.1:8000/api",
    // credentials: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
