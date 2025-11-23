<script setup>
import { ref } from "vue";

const reports = ref([
  {
    id: 1,
    title: "CCTV Panjaitan",
    location: "Jl. Merdeka No. 45, Balikpapan",
    img: "/src/assets/banjir.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "CCTV Taman Kota",
    location: "Jl. Taman Raya, Balikpapan",
    img: "/src/assets/banjir.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "CCTV Perbukitan",
    location: "Jl. Perbukitan Indah, Balikpapan Utara",
    img: "/src/assets/banjir.jpg",
    link: "#",
  },
]);
</script>

<template>
  <div class="bg-[#5D5A88]">
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
      >
        <div class="flex items-center gap-4">
          <svg
            class="h-6 text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 3v4M16 3v4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <h2 class="text-2xl font-bold text-white">CCTV Monitoring</h2>
            <p class="text-base text-gray-200 mt-1">
              Pantau Kondisi Kota secara real-time melalui CCTV
            </p>
          </div>
        </div>
        <div class="mt-8 flex gap-4">
          <router-link
            to="/DaftarCCTV"
            class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#5D5A88] shadow"
          >
            Lihat Semua →
          </router-link>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <template v-if="reports.length">
          <div
            v-for="report in reports"
            :key="report.id"
            class="rounded overflow-hidden shadow-lg flex flex-col bg-[#5D5A88]"
          >
            <div class="relative">
              <img
                class="w-full h-64 object-cover"
                :src="report.img"
                :alt="report.title"
              />
              <div class="absolute inset-0 bg-black opacity-10"></div>
            </div>

            <div class="px-6 py-4 mb-auto">
              <a
                :href="report.link"
                class="font-medium text-lg text-white hover:text-indigo-200 block mb-2"
                >{{ report.title }}</a
              >

              <div class="flex flex-col gap-1 text-xs text-gray-200">
                <div class="flex items-center gap-1">
                  <svg
                    class="h-3.5 w-3.5 text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{{ report.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
