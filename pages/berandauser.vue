<template>
  <div class="bg-sky-400 rounded-lg mt-12 flex mx-auto">
    <div>
      <h1 class="text-center uppercase font-semibold text-white flex mx-auto items-center">{{ data }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null
    }
  },
  mounted() {
    this.df();
  }, 
  methods: {
    df() {
      const that = this
      this.$axios.get('/public/hari-pendaftaran').then(({data}) => {
        this.data = data.data.judul
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>
