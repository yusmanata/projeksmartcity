<script setup>
import { ref, onMounted } from "vue";

const currentTime = ref("");

const reports = ref([
  {
    id: 1,
    title: "Membaca",

    text: "Saya Jago membaca cepat dan memahami isi bacaan dengan baik.",

    link: "#",
  },
  {
    id: 2,
    title: "Menulis",

    text: "Saya Jago menulis dengan baik dan mampu menyampaikan ide secara jelas.",
    status: "Offline",
    link: "#",
  },
  {
    id: 3,
    title: "Mendengarkan",

    text: "Saya Jago mendengarkan dengan baik dan mampu memahami informasi secara efektif.",

    link: "#",
  },
]);
</script>

<template>
  <div class="bg-[#5D5A88] min-h-screen">
    <div class="relative isolate">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div class="text-left">
            <h5
              class="text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Raditya Yusma Nata
            </h5>
            <h5
              class="text-2xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              11231080 - Teknik Informatika - ITK
            </h5>
            <p class="mt-6 text-lg text-white/80 max-w-xl">
              Saya adalah mahasiswa Teknik Informatika di Institut Teknologi
              Kalimantan. Saya tertarik pada pengembangan perangkat lunak dan
              teknologi terbaru.
            </p>
          </div>
          <div class="flex justify-center lg:justify-end hidden sm:flex">
            <img
              src="/src/assets/gambarhero.png"
              alt="Illustration"
              class="w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-[#5D5A88]">
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 text-center">
      <div
        class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
      ></div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <template v-if="reports.length">
          <div
            v-for="report in reports"
            :key="report.id"
            class="rounded overflow-hidden shadow-lg flex flex-col bg-white"
          >
            <div class="px-6 py-4 mb-auto text-center mx-auto">
              <a
                :href="report.link"
                class="font-medium text-lg text-[#5D5A88] hover:text-indigo-200 mb-2"
                >{{ report.title }}</a
              >
            </div>
            <div class="relative">
              <textarea
                class="w-full h-64 object-cover p-2 mx-auto text-center"
                readonly
                >{{ report.text }}</textarea
              >
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
