<template>
  <div>
    <CToolbar @onToolbar="changePage" />
    <div v-if="tab == 'kegiatan'" class="px-4">
      <div
        v-if="kegiatan.loading"
        class="flex justify-center items-center mt-4"
      >
        <Spinner />
      </div>
      <div v-else>
        <div class="pb-14" v-if="kegiatan.data">
          <div
            v-for="(item, i) in kegiatan.data"
            :key="'kegiatan_' + i"
            class="w-full bg-white rounded-xl shadow-md py-2 mb-4"
          >
            <div
              class="
                w-full
                px-4
                border-b
                text-xl
                font-semibold
                py-1.5
                text-gray-800
              "
            >
              {{ item.judul }}
            </div>
            <div v-html="item.deskripsi" class="p-4 text-gray-700 w-full"></div>
            <div class="px-4 mb-4 border-t-primary">
              <table class="text-gray-700 text-sm font-semibold">
                <tr>
                  <td class="w-1/3">Jadwal</td>
                  <td class="px-2">:</td>
                  <td>{{ item.jadwal }}</td>
                </tr>
                <tr>
                  <td class="w-1/3">Lokasi</td>
                  <td class="px-2">:</td>
                  <td>{{ item.lokasi }}</td>
                </tr>
                <tr>
                  <td class="w-1/3">Ketentuan</td>
                  <td class="px-2">:</td>
                  <td>{{ item.ketentuan }}</td>
                </tr>
              </table>
            </div>
            <div class="w-full border-t pt-2 flex items-center">
              <div
                @click="goToMaps(item.maps)"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  hover:opacity-80
                "
              >
                <div class="h-6 w-6 mr-2">
                  <img src="~/assets/icon/map.svg" class="w-full h-full" />
                </div>
                <div class="text-gray-700 font-semibold text-sm">
                  Temukan lokasi di Maps
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            w-full
            py-4
            bg-white
            rounded-xl
            font-semibold
            text-gray-700
            shadow-md
            flex
            justify-center
            items-center
          "
          v-else
        >
          Belum ada kegiatan
        </div>
      </div>
    </div>
    <div v-else-if="tab == 'info'" class="px-4">
      <div v-if="info.loading" class="flex justify-center items-center mt-4">
        <Spinner />
      </div>
      <div v-else>
        <div class="pb-14" v-if="info.data">
          <div
            v-for="(item, i) in info.data"
            :key="'info_' + i"
            class="w-full bg-white rounded-xl shadow-md py-2 mb-4"
          >
            <div
              class="
                w-full
                px-4
                border-b
                text-xl
                font-semibold
                py-1.5
                text-gray-800
              "
            >
              {{ item.judul }}
            </div>
            <div v-html="item.deskripsi" class="p-4 text-gray-700 w-full"></div>
          </div>
        </div>
        <div
          class="
            w-full
            py-4
            bg-white
            rounded-xl
            font-semibold
            text-gray-700
            shadow-md
            flex
            justify-center
            items-center
          "
          v-else
        >
          Belum ada info
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "kegiatan",
      kegiatan: {
        loading: false,
        data: null,
      },
      info: {
        loading: false,
        data: null,
      },
    };
  },
  mounted() {
    this.getKegiatan();
  },
  methods: {
    goToMaps(maps) {
      window.open(maps, "_blank");
    },
    changePage(val) {
      this.tab = val;
      if (this.tab == "kegiatan") {
        this.getKegiatan();
      } else if (this.tab == "info") {
        this.getInfo();
      }
    },
    getKegiatan() {
      this.kegiatan.loading = true;
      this.$axios
        .get("main/kegiatan")
        .then(({ data }) => {
          this.kegiatan.loading = false;
          this.kegiatan.data = data.data;
        })
        .catch(({ response }) => {
          this.kegiatan.loading = false;
          this.$toast.error(response.data.message);
        });
    },
    getInfo() {
      this.info.loading = true;
      this.$axios
        .get("main/info")
        .then(({ data }) => {
          this.info.loading = false;
          this.info.data = data.data;
        })
        .catch(({ response }) => {
          this.info.loading = false;
          this.$toast.error(response.data.message);
        });
    },
  },
};
</script>

<style>
</style>