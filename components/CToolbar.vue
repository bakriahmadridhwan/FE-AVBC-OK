<template>
  <div class="flex justify-around items-center border overflow-hidden m-4 shadow-md rounded-xl">
      <div @click="changeLocationToolbar('kegiatan')" class="toolbar" :class="pointer == 'kegiatan' && 'toolbar-active'">
          Kegiatan
      </div>
      <div @click="changeLocationToolbar('info')" class="toolbar" :class="pointer == 'info' && 'toolbar-active'">
          Informasi
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            pointer: 'kegiatan'
        }
    },
    methods: {
        changeLocationToolbar(val) {
            this.pointer = val
            this.$emit('onToolbar', val)
        }
    }
}
</script>

<style>
    .toolbar {
        @apply cursor-pointer text-gray-700 font-bold uppercase py-2 w-full h-full text-center hover:opacity-70;
    }

    .toolbar-active {
        @apply bg-primary text-white;
    }
</style>