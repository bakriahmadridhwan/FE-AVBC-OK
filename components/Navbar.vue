<template>
  <!-- Navbar Start -->

  <header class="bg-nav absolute top-0 left-0 w-full flex items-center z-10">
    <img
      src="~/static/logo.png"
      alt="avbc"
      width="50"
      height="50"
      class="ml-12"
    />

    <div class="container">
      <div class="flex items-center justify-between relative">
        <div class="px-4">
          <NuxtLink
            to="/"
            class="font-bold text-2xl text-white block py-6 hover:text-primary"
            >AVBC</NuxtLink
          >
        </div>

        <div class="flex items-center px-4">
            <NuxtLink
              to="/login"
              class="
              md:hidden
                text-base text-white
                py-2
                mx-8
                flex
                group-hover:scale-110 group-hover:shadow-primary
                transition
                duration-300
                dark:text-white
                bg-primary
                btnLogin
                tracking-wide
              "
              >LOGIN</NuxtLink
            >

          <nav
            id="nav-menu"
            class="
              hidden
              absolute
              py-5
              bg-nav
              max-w-[250px]
              w-full
              rounded-lg
              shadow-lg
              right-4
              top-full
              lg:block
              lg:static
              lg:bg-transparent
              lg:max-w-full
              lg:rounded-none
              lg:shadow-none
              lg:font-bold
              dark:bg-dark dark:shadow-slate-500
              lg:dark:bg-transparent
            "
          >
            <ul class="block lg:flex">
              <li class="group">
                <NuxtLink
                  to="/login"
                  class="
                    text-base text-white
                    py-2
                    mx-8
                    flex
                    group-hover:scale-110 group-hover:shadow-primary
                    transition
                    duration-300
                    dark:text-white
                    bg-primary
                    btnLogin
                    tracking-wide
                  "
                  >LOGIN</NuxtLink
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <!-- Navbar End -->
</template>

<script>
</script>

<style>
.hamburger-line {
  @apply w-[30px] h-[2px] my-2 block bg-white dark:bg-white;
}

.hamburger-active > span:nth-child(1) {
  @apply rotate-45 translate-x-1;
}
.hamburger-active > span:nth-child(2) {
  @apply scale-0 translate-x-1;
}
.hamburger-active > span:nth-child(3) {
  @apply -rotate-45 translate-x-1;
}
</style>
