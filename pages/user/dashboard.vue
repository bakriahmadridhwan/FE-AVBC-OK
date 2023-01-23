<template>
  <div>
    <div class="relative w-full flex justify-between border">
      <div class="hidden md:block md:w-1/4 border h-screen">
        <CProfile />
      </div>
      <div class="w-full md:w-1/2 md:h-screen bg-gray-100">
        <div class="md:hidden h-screen" v-if="showProfileMobile">
          <CProfile />
        </div>
        <div class="md:hidden pb-10" v-else-if="showAngkatanMobile">
          <CAngkatan />
        </div>
        <div class="md:hidden pb-10 overflow-scroll h-screen" v-else>
          <CInfo />
        </div>
        <div class="hidden md:block overflow-scroll h-screen">
          <CInfo />
        </div>
      </div>
      <div class="hidden md:block md:w-1/4 border overflow-scroll h-screen">
        <CAngkatan />
      </div>
      <div
        class="
          md:hidden
          flex
          justify-around
          w-full
          fixed
          bottom-0
          bg-purple-600
          mt-14
        "
      >
        <div
          @click="
            (showProfileMobile = true),
              (showAngkatanMobile = false),
              (showDashboardMobile = false)
          "
          class="
            text-white
            w-1/2
            flex
            justify-center
            items-center
            text-xs
            font-semibold
            hover:bg-purple-800
            cursor-pointer
            py-4
            px-2
          "
          :class="showProfileMobile && 'bg-purple-800'"
        >
          PROFILE
        </div>
        <div
          @click="
            (showProfileMobile = false),
              (showAngkatanMobile = false),
              (showDashboardMobile = true)
          "
          class="
            text-white
            w-1/2
            flex
            justify-center
            items-center
            text-xs
            font-semibold
            hover:bg-purple-800
            cursor-pointer
            py-4
            px-2
          "
          :class="showDashboardMobile && 'bg-purple-800'"
        >
          DASHBOARD
        </div>
        <div
          @click="
            (showAngkatanMobile = true),
              (showProfileMobile = false),
              (showDashboardMobile = false)
          "
          class="
            text-white
            w-1/2
            flex
            justify-center
            items-center
            text-xs
            font-semibold
            hover:bg-purple-800
            cursor-pointer
            py-4
            px-2
          "
          :class="showAngkatanMobile && 'bg-purple-800'"
        >
          ANGKATAN
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "pengguna",
  data() {
    return {
      showProfileMobile: false,
      showDashboardMobile: true,
      showAngkatanMobile: false,
    };
  },
};
</script>

<style>
</style>