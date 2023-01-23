<template>
  <!-- Footer Section Start -->

  <footer class="bg-nav pt-24 pb-12 dark:bg-dark">
    <div class="container">
      <div class="flex flex-wrap">
        <div class="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
          <h2 class="font-bold text-4xl text-white mb-2 tracking-wide">AVBC</h2>
          <div class="h-1 w-1/4 bg-primary mb-6"></div>
          <h3 class="font-bold text-2xl mb-2 text-gray-200">Hubungi Kami</h3>
          <p class="text-gray-200">Sekretariat Amikom Volleyball Club</p>
          <p class="text-gray-200">Gedung BSC</p>
          <p class="text-gray-200">Universitas Amikom Yogyakarta</p>
          <br />
          <p class="text-gray-200">Telp : +62 83865756338</p>
        </div>

        <div class="w-full px-4 mb-12 md:w-1/3">
          <h3 class="font-semibold text-xl text-white mb-2 font-bold">
            Informasi
          </h3>
          <div class="h-1 w-1/4 bg-primary mb-6"></div>
          <ul class="text-slate-300">
            <li>
              <a
                href="#"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Sosial Media</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Pengumuman</a
              >
            </li>
            <li>
              <a
                href="#"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Latihan</a
              >
            </li>
          </ul>
        </div>

        <div class="w-full px-4 mb-12 md:w-1/3">
          <h3 class="font-semibold text-xl text-white mb-2">Tautan</h3>
          <div class="h-1 w-1/4 bg-primary mb-6"></div>
          <ul class="text-slate-300">
            <li>
              <NuxtLink
                to="/login"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Login</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/register"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Daftar Sekarang!</NuxtLink
              >
            </li>
            <li>
              <a
                href="#pendaftaran"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Cara Daftar</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Tentang</a
              >
            </li>
            <li>
              <a
                href="#kepengurusan"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Kepengurusan</a
              >
            </li>
            <li>
              <a
                href="#galeri"
                class="
                  inline-block
                  text-base
                  hover:text-primary
                  mb-3
                  text-gray-200
                "
                >Galeri Foto</a
              >
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <!-- footer copyright -->
      <div class="w-full pt-10 border-t border-slate-700">
        <div class="flex items-center justify-center mb-5">
          <!-- Instagram -->
          <a
            href="https://www.instagram.com/amikomvolleyballclub/"
            target="_blank"
            class="
              w-9
              h-9
              mr-3
              rounded-full
              flex
              justify-center
              items-center
              border border-slate-300
              text-slate-300
              hover:border-primary hover:bg-primary hover:text-white
            "
          >
            <svg
              role="img"
              width="20"
              class="fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Instagram</title>
              <path
                d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
              />
            </svg>
          </a>

          <!-- Gmail -->
          <a
            href="mailto:avbc.amikomyk@gmail.com"
            target="_blank"
            class="
              w-9
              h-9
              mr-3
              rounded-full
              flex
              justify-center
              items-center
              border border-slate-300
              text-slate-300
              hover:border-primary hover:bg-primary hover:text-white
            "
          >
            <svg
              role="img"
              width="20"
              class="fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Gmail</title>
              <path
                d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
              />
            </svg>
          </a>
        </div>
        <p class="text-white font-bold text-center">
          © 2022 | AMIKOM VOLLEYBALL CLUB
        </p>
        <p
          class="
            font-medium
            text-xs text-gray-200
            hover:text-primary
            text-center
          "
        >
          Dibuat menggunakan
          <a
            href="https://tailwindcss.com"
            target="_blank"
            class="font-bold text-sky-500"
          >
            Tailwind CSS</a
          >.
        </p>
      </div>
    </div>
  </footer>

  <!-- Footer Section End -->
</template>
