<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { reportStore } from "../stores/reportStore";

const router = useRouter();

const formData = ref({
  name: "",
  title: "",
  category: "",
  desc: "",
  location: "",
  img: "/src/assets/banjir.jpg", // default image
});

const submitted = ref(false);
const showSuccess = ref(false);
const selectedFile = ref(null);
const previewUrl = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;

    // Create preview URL
    const reader = new FileReader();
    reader.onload = (e) => {
      previewUrl.value = e.target.result;
      formData.value.img = e.target.result; // Store base64 in formData
    };
    reader.readAsDataURL(file);
  }
};

const removeFile = () => {
  selectedFile.value = null;
  previewUrl.value = null;
  formData.value.img = "/src/assets/banjir.jpg";
};

const handleSubmit = (e) => {
  e.preventDefault();

  // Format tanggal
  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Tambahkan laporan ke store
  reportStore.addReport({
    title: formData.value.title,
    desc: formData.value.desc,
    location: formData.value.location,
    date: formattedDate,
    img: formData.value.img,
    category: formData.value.category,
  });

  // Reset form
  formData.value = {
    name: "",
    title: "",
    category: "",
    desc: "",
    location: "",
    img: "/src/assets/banjir.jpg",
  };
  selectedFile.value = null;
  previewUrl.value = null;

  // Show success message
  showSuccess.value = true;
  submitted.value = true;

  // Hide success message and redirect after 2 seconds
  setTimeout(() => {
    showSuccess.value = false;
    router.push("/DaftarLaporan");
  }, 2000);
};
</script>

<template>
  <div class="bg-[#E7E6F2] -my-8 py-8 px-2 sm:px-0">
    <!-- Success Message -->
    <div
      v-if="showSuccess"
      class="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2"
    >
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd"
        />
      </svg>
      <span>Laporan berhasil dibuat! Mengalihkan ke Daftar Laporan...</span>
    </div>

    <div class="bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
      <h2 class="text-2xl font-medium mb-2">Buat Laporan Baru</h2>
      <form @submit="handleSubmit" class="flex flex-col gap-4">
        <div class="">
          <label for="name" class="block text-gray-700 font-medium mb-2"
            >Nama Pelapor (optional)</label
          >
          <input
            v-model="formData.name"
            type="text"
            id="name"
            name="name"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Yusma Nata"
          />
        </div>
        <div class="">
          <label for="age" class="block text-gray-700 font-medium mb-2"
            >Judul Laporan</label
          >
          <input
            v-model="formData.title"
            type="text"
            id="judul"
            name="judul"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            placeholder="Pencurian di Jalan Merdeka"
            required
          />
        </div>
        <div class="">
          <label for="kategori" class="block text-gray-700 font-medium mb-2"
            >Kategori</label
          >
          <select
            v-model="formData.category"
            id="kategori"
            name="kategori"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          >
            <option value="">Select Kategori</option>
            <option value="Pencurian">Pencurian</option>
            <option value="Lampu Mati">Lampu Mati</option>
            <option value="Kebakaran">Kebakaran</option>
            <option value="Banjir">Banjir</option>
            <option value="Jalan Rusak">Jalan Rusak</option>
            <option value="Lingkungan">Lingkungan</option>
          </select>
        </div>

        <div class="">
          <label for="deskripsi" class="block text-gray-700 font-medium mb-2"
            >Deskripsi</label
          >
          <textarea
            v-model="formData.desc"
            id="deskripsi"
            name="deskripsi"
            class="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
            placeholder="Terjadi Pencurian di Jalan Merdeka..."
            required
          ></textarea>
        </div>

        <div class="mx-auto w-full bg-white">
          <div class="flex flex-col gap-4 mb-6">
            <label class="block text-gray-700 font-medium">
              Foto Pendukung (Opsional)
            </label>

            <!-- Upload Area (Show if no file) -->
            <div v-if="!previewUrl" class="">
              <input
                type="file"
                name="file"
                id="file"
                class="sr-only"
                accept="image/*"
                @change="handleFileChange"
              />
              <label
                for="file"
                class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center cursor-pointer hover:border-blue-400 transition-colors"
              >
                <div>
                  <svg
                    class="mx-auto h-12 w-12 text-gray-400 mb-4"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop files here
                  </span>
                  <span class="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span
                    class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] hover:bg-gray-50"
                  >
                    Browse
                  </span>
                  <p class="mt-2 text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </label>
            </div>

            <!-- Image Preview (Show if file uploaded) -->
            <div v-else class="relative">
              <img
                :src="previewUrl"
                alt="Preview"
                class="w-full h-64 object-cover rounded-lg border border-gray-300"
              />
              <button
                type="button"
                @click="removeFile"
                class="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div class="mt-2 text-sm text-gray-600">
                <span class="font-medium">{{ selectedFile?.name }}</span>
                <span class="text-gray-500 ml-2">
                  ({{ (selectedFile?.size / 1024 / 1024).toFixed(2) }} MB)
                </span>
              </div>
            </div>

            <div class="">
              <label for="email" class="block text-gray-700 font-medium mb-2">
                Lokasi Pelaporan
              </label>
              <input
                v-model="formData.location"
                type="text"
                name="lokasi"
                id="lokasi"
                placeholder="Jalanan Merdeka No.123, Balikpapan"
                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                required
              />
            </div>
            <div class="flex items-center justify-end gap-4">
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
