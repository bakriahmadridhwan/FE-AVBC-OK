
<template>
  <div>
      <CNavbar />
      <Nuxt />
  </div>
</template>

<script>
export default {
    beforeMount() {
        this.checkIsLoggedIn()
    },
    methods: {
        checkIsLoggedIn() {
            if (!this.$cookiz.get('authToken')) {
                this.$toast.error('Silakan login terlebih dahulu.')
                return this.$router.replace('/login')
            }else{
                this.$axios.setHeader('Authorization', 'Bearer ' + this.$cookiz.get('authToken'))
            }
        },
    }
}
</script>