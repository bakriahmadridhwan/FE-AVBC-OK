<template>
  <section id="formLogin" class="formLogin">
    <div
      class="
        columns-1
        sm:columns-1
        md:columns-1
        lg:columns-2
        xl:columns-2
        relative
      "
    >
      <div
        class="
          shadow-xl
          flex
          absolute
          z-10
          md:relative md:z-0
          justify-center
          items-center
          h-screen
          w-full
        "
      >
        <div class="flex items-center">
          <div class="py-4 w-[400px] bg-white rounded-lg shadow-xl px-6">
            <div class="justify-center items-center h-full w-full">
              <img src="~/static/logo.png" alt="avbc" width="60" height="60" />
              <h1 class="my-2 font-semibold">Silakan Login Terlebih Dahulu</h1>
              <form>
                <div>
                  <label for="email">Email</label>
                  <br />
                  <input
                    v-model="email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Masukan email anda"
                    class="form-input px-4 py-2 mb-2 rounded-lg w-full"
                  />
                </div>

                <div>
                  <label for="password">Password</label>
                  <br />
                  <input
                    v-model="password"
                    type="password"
                    name="password"
                    id="paassword"
                    placeholder="Masukan password anda"
                    class="form-input px-4 py-2 mb-2 rounded-lg w-full"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    :disabled="buttonLoading"
                    @click="onLogin"
                    class="
                      py-3
                      px-4
                      text-white
                      font-bold
                      w-full
                      mx-auto
                      rounded-xl
                      my-4
                    "
                    :class="buttonLoading ? 'bg-gray-800' : 'bg-primary'"
                  >
                    <div class="flex justify-center items-center" v-if="buttonLoading">
                      <Spinner />
                    </div>
                    <div v-else>Login</div>
                  </button>
                  <div class="text-center">
                    <p>
                      belum punya akun?
                      <NuxtLink
                        class="font-semibold text-red-800"
                        to="/register"
                        >Daftar!</NuxtLink
                      >
                    </p>
                    <hr class="my-2" />
                    <NuxtLink class="font-semibold" to="/"
                      >Halaman Utama</NuxtLink
                    >
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="relative -z-10 md:z-0 md:w-screen md:h-screen">
        <img
          src="~/static/avbc/6.jpg"
          alt="avbc"
          class="
            w-full
            h-screen
            object-cover
            bg-center
            md:h-full
            overflow-hidden
          "
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: null,
      password: null,
      buttonLoading: false,
    };
  },
  mounted() {
    this.validateLogin()
  },
  methods: {
    validateLogin() {
      this.$cookiz.get('authToken') && this.$router.replace('/user/dashboard')
    },
    onLogin() {
      let raw = {
        email: this.email,
        password: this.password,
      };
      this.buttonLoading = true;
      this.$axios
        .post("login", raw)
        .then(({ data }) => {
          this.buttonLoading = false;
          this.$toast.success(data.message);
          this.$cookiz.set("authToken", data.data.token);
          this.$cookiz.set("user", data.data.user);
          this.$router.replace("/user/dashboard");
        })
        .catch(({ response }) => {
          this.buttonLoading = false;
          this.password = null;
          this.$toast.error(response.data.message);
        });
    },
  },
};
</script>