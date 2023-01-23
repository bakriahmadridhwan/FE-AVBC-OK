<template>
  <div>
    <div
      class="bg-purple-600 flex justify-between items-center px-2 shadow-md md:px-16 w-full"
    >
      <div class="flex items-center">
        <div class="h-20 w-20">
          <img src="~/static/logo.png" alt="avbc" class="w-full h-full" />
        </div>
        <div class="hidden md:block text-white font-semibold text-xl">
            Amikom Volley Ball Club
        </div>
        <div class="block md:hidden text-white font-semibold">
            AVBC
        </div>
      </div>
      <div class="flex items-center space-x-4">
        <div class="text-white font-semibold text-sm md:text-lg">
          Halo, {{ nama }}
        </div>
        <div>
          <button
            class="
              bg-red-500
              hover:opacity-80
              font-semibold
              text-sm text-white
              px-3
              py-1.5
              rounded-lg
              shadow-xl
            "
            @click="logout"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            nama: null
        }
    },
    mounted() {
        this.getNama()
    },
    methods: {
        getNama() {
            const user = this.$cookiz.get('user')
            this.nama = user.name.split(' ')[0]
        },
        logout() {
            this.$cookiz.remove('authToken')
            this.$cookiz.remove('user')
            this.$toast.success('Berhasil Keluar!')
            return this.$router.replace('/')
        }
    }
};
</script>

<style>
</style>