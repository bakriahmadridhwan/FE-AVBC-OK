<template>
  <!-- <Tutorial/> -->

  <main>
    <Hero />
    <About />
    <div class="w-full bg-primary h-2"></div>
    <Pendaftaran />
    <Kepengurusan />
    <Motto />
    <Galeri />
    <div class="w-full bg-primary h-2"></div>
    <!-- <Bootstrap /> -->

    <!-- floating button ~ back to top -->
    <a
      href="#home"
      class="
        fixed
        bottom-4
        right-4
        z-[9999]
        h-14
        w-14
        items-center
        hidden
        justify-center
        rounded-full
        bg-primary
        p-4
        hover:animate-pulse
      "
      id="to-top"
      ><span class="mt-2 block h-5 w-5 rotate-45 border-t-2 border-l-2"></span
    ></a>
    <!-- floating button -->
  </main>
</template>

<script>
// import Hero from "~/layouts/Hero.vue";
export default {
  name: "IndexPage",
  // components: { Hero },
};
</script>
