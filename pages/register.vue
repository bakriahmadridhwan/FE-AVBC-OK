<template>
  <section id="formRegister" class="formRegister">
    <div class="flex justify-center items-center w-full">
      <div class="flex items-center">
        <div
          class="
            w-full
            md:w-[800px]
            mt-4
            bg-white
            rounded-lg
            shadow-xl
            px-4
            md:px-6
          "
        >
          <div class="justify-center items-center w-full">
            <div class="flex items-center space-x-4 mb-4">
              <img src="~/static/logo.png" alt="avbc" class="w-20 h-20" />
              <div class="flex flex-col">
                <div class="font-semibold uppercase md:text-xl text-gray-800">
                  Formulir Pendaftaran Calon Anggota Klub Bola Voli
                </div>
                <div class="text-gray-800 uppercase text-sm md:text-base">
                  universitas amikom yogyakarta
                </div>
              </div>
            </div>
            <h1 class="my-4 text-red-600">
              Lengkapi semua data dengan data sebenar benarnya.
            </h1>

            <form class="flex flex-col space-y-4" action="">
              <div>
                <label for="name">Nama Lengkap</label>
                <br />
                <input
                  placeholder="Masukan nama lengkap anda"
                  type="text"
                  v-model="form.name"
                  class="form-input px-4 py-2 rounded-lg w-full"
                />
              </div>

              <div>
                <label for="email">Email</label>
                <br />
                <input
                  placeholder="Masukan email google anda"
                  type="email"
                  v-model="form.email"
                  class="form-input px-4 py-2 rounded-lg w-full"
                />
              </div>

              <div>
                <label for="no_telp">Nomor Telpon</label>
                <br />
                <input
                  placeholder="Masukan No. Telp contoh: 62897**********"
                  type="number"
                  v-model="form.no_telp"
                  class="form-input px-4 py-2 rounded-lg w-full"
                />
              </div>

              <div>
                <label for="password"
                  >Password
                  <span class="text-sm font-semibold text-red-500 capitalize">
                    (digunakan untuk login akun)
                  </span></label
                >
                <br />
                <input
                  placeholder="Masukan password anda"
                  type="password"
                  v-model="form.password"
                  class="form-input px-4 py-2 rounded-lg w-full"
                />
              </div>

              <div>
                <label for="password">Konfirmasi Password</label>
                <br />
                <input
                  placeholder="Konfirmasi password baru anda"
                  type="password"
                  v-model="form.c_password"
                  class="form-input px-4 py-2 rounded-lg w-full"
                />
              </div>

              <div>
                <label for="alamat">Alamat</label>
                <br />
                <textarea
                  placeholder="Masukan alamat lengkap anda beserta Kota Asal"
                  cols="4"
                  v-model="form.alamat"
                  class="form-input px-4 py-2 rounded-lg w-full"
                />
              </div>

              <div>
                <label for="jk">Jenis Kelamin</label>
                <br />
                <div class="px-2">
                  <input
                    v-model="form.jenis_kelamin"
                    type="radio"
                    id="lk"
                    name="fav_language"
                    value="Laki-Laki"
                  />
                  <label for="lk">Laki-Laki</label><br />
                  <input
                    v-model="form.jenis_kelamin"
                    type="radio"
                    id="pr"
                    name="fav_language"
                    value="Perempuan"
                  />
                  <label for="pr">Perempuan</label><br />
                </div>
              </div>

              <div>
                <label for="jurusan">Jurusan </label>
                <br />
                <select
                  class="form-select px-4 py-2 rounded-lg w-full"
                  v-model="jurusan.selected"
                >
                  <option value="null" disabled selected>
                    -- Pilih jurusan --
                  </option>
                  <option
                    v-for="(item, i) in jurusan.source"
                    :key="'jurusan_' + i"
                    :value="item.id"
                  >
                    {{ item.nama }}
                  </option>
                </select>
              </div>

              <div>
                <label for="nim">NIM</label>
                <br />
                <input
                  type="number"
                  v-model="form.nim"
                  placeholder="Masukan NIM anda tanpa titik. contoh 19014330"
                  class="form-input px-4 py-2 rounded-lg w-full"
                />
              </div>

              <div>
                <label for="posisi">Posisi Pemain</label>
                <br />
                <select
                  class="form-select px-4 py-2 rounded-lg w-full"
                  v-model="posisi.selected"
                >
                  <option value="null" disabled selected>
                    -- Pilih posisi --
                  </option>
                  <option
                    v-for="(item, i) in posisi.source"
                    :key="'posisi_' + i"
                    :value="item.id"
                  >
                    {{ item.posisi }}
                  </option>
                </select>
              </div>

              <div>
                <label for="prestasi">Prestasi</label>
                <br />
                <input
                  placeholder="Masukan prestasi jika ada"
                  type="text"
                  v-model="form.prestasi"
                  class="form-input px-4 py-2 rounded-lg w-full"
                />
              </div>

              <div>
                <button
                  type="submit"
                  :disabled="loadingRegister"
                  @click="submitRegister"
                  class="
                    py-4
                    px-4
                    text-white
                    font-bold
                    w-full
                    mx-auto
                    rounded-xl
                    my-4
                    uppercase
                  "
                  :class="loadingRegister ? 'bg-gray-800' : 'bg-primary'"
                >
                  <div
                    class="flex justify-center items-center"
                    v-if="loadingRegister"
                  >
                    <Spinner />
                  </div>
                  <div v-else>Register</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      jurusan: {
        source: [],
        selected: null,
      },
      posisi: {
        source: [],
        selected: null,
      },
      form: {
        name: null,
        email: null,
        no_telp: null,
        password: null,
        c_password: null,
        angkatan_id: null,
        alamat: null,
        jenis_kelamin: null,
        jurusan_id: null,
        nim: null,
        posisi_id: null,
        prestasi: null,
      },
      loadingRegister: false,
    };
  },
  layout: "auth",
  mounted() {
    this.cekHariPendaftaran();
    this.getJurusan();
    this.getPosisi();
  },
  methods: {
    getJurusan() {
      this.$axios
        .get("public/jurusan")
        .then(({ data }) => {
          this.jurusan.source = data.data;
        })
        .catch(({ response }) => {
          this.$toast.error(response.data.message);
        });
    },
    getPosisi() {
      this.$axios
        .get("public/posisi")
        .then(({ data }) => {
          this.posisi.source = data.data;
        })
        .catch(({ response }) => {
          this.$toast.error(response.data.message);
        });
    },
    submitRegister() {
      let raw = {
        name: this.form.name,
        email: this.form.email,
        no_telp: this.form.no_telp,
        password: this.form.password,
        c_password: this.form.c_password,
        angkatan_id: this.form.angkatan_id,
        alamat: this.form.alamat,
        jenis_kelamin: this.form.jenis_kelamin,
        nim: this.form.nim,
        jurusan_id: this.jurusan.selected,
        posisi_id: this.posisi.selected,
        prestasi: this.form.prestasi,
      };
      this.loadingRegister = true;
      this.$axios
        .post("register", raw)
        .then(({ data }) => {
          this.loadingRegister = false;
          this.$toast.success(data.message);
          this.$cookiz.set("authToken", data.data.token);
          this.$cookiz.set("user", data.data.user);
          this.$router.replace("/user/dashboard");
        })
        .catch(({ response }) => {
          this.loadingRegister = false;
          this.$toast.error(response.data.message);
        });
    },
    cekHariPendaftaran() {
      this.$axios
        .get("public/hari-pendaftaran")
        .then(({ data }) => {
          const msg = data.message;
          if (!data.data.open) {
            this.$toast.error(msg);
            this.$router.replace("/login");
          }
          this.form.angkatan_id = data.data.angkatan_id;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
