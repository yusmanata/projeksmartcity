<template>
  <div class="bg-[#E7E6F2] min-h-screen">
    <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
      <h2 class="text-2xl font-medium mb-4">Buat Laporan Baru</h2>
      <form>
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2"
            >Nama Pelapor (optional)</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Yusma Nata"
            required
          />
        </div>
        <div class="mb-4">
          <label for="age" class="block text-gray-700 font-medium mb-2"
            >Judul Laporan</label
          >
          <input
            type="text"
            id="judul"
            name="judul"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Pencurian di Jalan Merdeka"
            required
          />
        </div>
        <div class="mb-4">
          <label for="kategori" class="block text-gray-700 font-medium mb-2"
            >Kategori</label
          >
          <select
            id="kategori"
            name="kategori"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value="">Select Kategori</option>
            <option value="male">Pencurian</option>
            <option value="female">Lampu Mati</option>
            <option value="other">Kebakaran</option>
          </select>
        </div>

        <div class="mb-4">
          <label for="deskripsi" class="block text-gray-700 font-medium mb-2"
            >Deskripsi</label
          >
          <textarea
            id="deskripsi"
            name="deskripsi"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
            placeholder="Terjadi Pencurian di Jalan Merdeka..."
          ></textarea>
        </div>

        <div class="mx-auto w-full max-w-[550px] bg-white">
          <div class="mb-6 pt-4">
            <label class="block text-gray-700 font-medium mb-2">
              Foto Pendukung (Opsional)
            </label>

            <div class="mb-8">
              <input type="file" name="file" id="file" class="sr-only" />
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop files here
                  </span>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span
                    class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                  >
                    Browse
                  </span>
                </div>
              </label>
            </div>

            <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
              <div class="flex items-center justify-between">
                <span
                  class="truncate pr-3 text-base font-medium text-[#07074D]"
                >
                  foto-kecelakaan.png
                </span>
                <button class="text-[#07074D]">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
              <div class="flex items-center justify-between">
                <span
                  class="truncate pr-3 text-base font-medium text-[#07074D]"
                >
                  foto-lokasi.png
                </span>
                <button class="text-[#07074D]">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                      fill="currentColor"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                <div
                  class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"
                ></div>
              </div>
            </div>
            <div class="mb-5">
              <label for="email" class="block text-gray-700 font-medium mb-2">
                Lokasi Pelaporan
              </label>
              <input
                type="text"
                name="lokasi"
                id="lokasi"
                placeholder="Jalanan Merdeka No.123, Balikpapan"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div class="flex items-center gap-4">
              <button
                type="reset"
                class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                type="submit"
                class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
