<template>
  <button
    :type="type"
    class="py-2 px-4 bg-primary inline-flex items-center justify-center border border-transparent rounded-md font-semibold text-white"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>
