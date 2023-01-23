<template>
  <!-- Kepengurusan Section Start -->

  <section id="kepengurusan" class="pt-36 pb-32 dark:bg-slate-800">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-10 lg:w-1/2">
          <h4 class="font-bold uppercase text-primary mb-3 text-lg">
            KEPENGURUSAN
          </h4>
          <div class="h-1 w-1/2 bg-primary"></div>
          <div class="text-center self-center">
            <h3
              class="
                font-semibold
                text-dark text-2xl
                mb-4
                lg:text-3xl lg:pt-10
                dark:text-white
                mt-6
              "
            >
              Pengurus
            </h3>
            <p class="font-medium text-base text-secondary mb-6 lg:text-lg">
              Beberapa anggota pengurus komunitas AVBC.
            </p>
          </div>
        </div>

        <div
        v-if="kepengurusan"
          class="
            w-full
            px-4
            lg:w-1/2
            flex flex-wrap
            justify-evenly
            self-center
            md:mt-14
          "
        >
          <div
            class="
              w-60
              flex
              border-solid border-gray-200 border-2
              p-4
              rounded-lg
              bg-gray-100
              mb-5
              group
              dark:bg-slate-700 dark:border-slate-600
            "
          >
            <img
              src="~/static/avbc/empty.png"
              alt="Ahmad Muchari"
              width="50"
              height="50"
              class="
                rounded-full
                fill-current
                group-hover:translate-x-2
                transition
                duration-300
              "
            />
            <p
              class="
                ml-6
                group-hover:translate-x-2
                transition
                duration-300
                dark:text-white
              "
            >
              <b>Ketua</b><br />{{ kepengurusan.ketua ? kepengurusan.ketua.user.name : '-' }}
            </p>
          </div>

          <div
            class="
              w-60
              flex
              border-solid border-gray-200 border-2
              p-4
              rounded-lg
              bg-gray-100
              mb-5
              group
              dark:bg-slate-700 dark:border-slate-600
            "
          >
            <img
              src="~/static/avbc/empty.png"
              alt=""
              width="50"
              height="50"
              class="group-hover:translate-x-2 transition duration-300"
            />
            <p
              class="
                ml-6
                group-hover:translate-x-2
                transition
                duration-300
                dark:text-white
              "
            >
              <b>Wakil Ketua</b><br />{{ kepengurusan.wakil ? kepengurusan.wakil.user.name : '-' }}
            </p>
          </div>

          <div
            class="
              w-60
              flex
              border-solid border-gray-200 border-2
              p-4
              rounded-lg
              bg-gray-100
              mb-5
              group
              dark:bg-slate-700 dark:border-slate-600
            "
          >
            <img
              src="~/static/avbc/empty.png"
              alt=""
              width="50"
              height="50"
              class="group-hover:translate-x-2 transition duration-300"
            />
            <p
              class="
                ml-6
                group-hover:translate-x-2
                transition
                duration-300
                dark:text-white
              "
            >
              <b>Sekretaris</b><br />{{ kepengurusan.sekretaris ? kepengurusan.sekretaris.user.name : '-' }}
            </p>
          </div>

          <div
            class="
              w-60
              flex
              border-solid border-gray-200 border-2
              p-4
              rounded-lg
              bg-gray-100
              mb-5
              group
              dark:bg-slate-700 dark:border-slate-600
            "
          >
            <img
              src="~/static/avbc/empty.png"
              alt=""
              width="50"
              height="50"
              class="group-hover:translate-x-2 transition duration-300"
            />
            <p
              class="
                ml-2
                group-hover:translate-x-2
                transition
                duration-300
                dark:text-white
              "
            >
              <b>Bendahara</b><br />{{ kepengurusan.bendahara ? kepengurusan.bendahara.user.name : '-' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Kepengurusan Section End -->
</template>

<script>
export default {
  data() {
    return {
      kepengurusan: null
    }
  },
  mounted() {
    this.getKepengurusan()
  },
  methods: {
    getKepengurusan(){
      this.$axios.get('public/jabatan').then(({data}) => {
        this.kepengurusan = data.data
      }).catch(({response}) => {
        this.$toast.error(response.data.message)
      })
    }
  }
}
</script>
