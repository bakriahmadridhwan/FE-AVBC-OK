<template>
  <!-- Contact Section Start -->

  <section id="contact" class="pt-36 pb-32 dark:bg-slate-700 bg-gray-200">
    <div class="container">
      <div class="w-full px-4">
        <div class="max-w-xl mx-auto text-center mb-16">
          <h4 class="font-semibold text-lg text-primary mb-2">Contact</h4>
          <div class="h-1 w-1/4 mx-auto bg-primary"></div>
          <h2
            class="
              font-bold
              text-dark text-3xl
              mb-4
              sm:text-4xl
              lg:text-5xl
              dark:text-white
              mt-6
            "
          >
            Hubungi Kami
          </h2>
          <p class="font-medium text-md text-secondary md:text-lg">
            Silahkan isi isian dibawah ini.
          </p>
        </div>
      </div>

      <form action="">
        <div class="w-full lg:w-2/4 lg:mx-auto">
          <div class="w-full px-4 mb-8">
            <label for="name" class="text-base font-bold text-secondary"
              >Nama</label
            >
            <input
              type="text"
              id="name"
              class="
                w-full
                bg-slate-200
                text-dark
                p-3
                rounded-md
                focus:outline-none
                focus:ring-primary
                focus:ring-1
                focus:border-primary
              "
            />
          </div>
          <div class="w-full px-4 mb-8">
            <label for="email" class="text-base font-bold text-secondary"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="
                w-full
                bg-slate-200
                text-dark
                p-3
                rounded-md
                focus:outline-none
                focus:ring-primary
                focus:ring-1
                focus:border-primary
              "
            />
          </div>
          <div class="w-full px-4 mb-8">
            <label for="message" class="text-base font-bold text-secondary"
              >Pesan</label
            >
            <textarea
              type="text"
              id="message"
              class="
                w-full
                bg-slate-200
                text-dark
                p-3
                rounded-md
                focus:outline-none
                focus:ring-primary
                focus:ring-1
                focus:border-primary
                h-32
              "
            ></textarea>
          </div>
          <div class="lg:w-40 px-4 mb-8 mx-auto sm:w-full">
            <button
              class="
                text-base
                font-semibold
                text-white
                bg-primary
                py-3
                px-8
                rounded-full
                w-full
                hover:scale-110 hover:shadow-primary hover:shadow-md
                transition
                duration-500
                mx-auto
                block
                shadow-xl
                tracking-wide
              "
            >
              Kirim
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>

  <!-- Contact Section End -->
</template>
