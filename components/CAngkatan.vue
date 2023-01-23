<template>
  <div>
    <div v-if="loading" class="flex items-center pt-10 justify-center">
      <Spinner />
    </div>
    <div v-else class="p-4">
      <div class="text-gray-800 font-semibold">
        {{ angkatan && "Teman " + angkatan.nama }}
      </div>
      <hr class="bg-gray-800 my-3" />
      <div class="flex flex-col" v-if="angkatan">
        <div
          v-for="(item, i) in angkatan.pengguna_detail"
          :key="'angkatan_' + i"
          class="flex border-b mb-1 justify-between items-center px-2"
        >
          <div class="py-1 text-gray-600 truncate">{{ item.user.name }}</div>
          <div
            @click="goToChatWA(item.user.no_telp)"
            class="
              w-10
              rounded-lg
              px-2
              flex
              cursor-pointer
              text-green-800
              hover:opacity-80
              items-center
              justify-center
              bg-gray-200
              text-sm
              lowercase
            "
          >
            Chat
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CAngkatan",
  data() {
    return {
      loading: false,
      angkatan: null,
    };
  },
  mounted() {
    this.getTemanAngkatan();
  },
  methods: {
    goToChatWA(number) {
      let url = `https://wa.me/${number}`;
      window.open(url, "_blank");
    },
    getTemanAngkatan() {
      this.loading = true;
      const user = this.$cookiz.get("user");
      this.$axios
        .get(
          `public/teman-angkatan?angkatan=${user.pengguna_detail.angkatan_id}`
        )
        .then(({ data }) => {
          this.loading = false;
          this.angkatan = data.data;
        })
        .catch(({ response }) => {
          this.loading = false;
          console.log(response);
        });
    },
  },
};
</script>

<style>
</style>