<script setup>
import { ref, computed } from "vue";

const searchTerm = ref("");
const selectedStatus = ref("");

const reports = ref([
  {
    id: 1,
    title: "CCTV Panjaitan",
    location: "Jl. Merdeka No. 45, Balikpapan",
    img: "/src/assets/banjir.jpg",
    status: "Online",
    link: "#",
  },
  {
    id: 2,
    title: "CCTV Taman Kota",
    location: "Jl. Taman Raya, Balikpapan",
    img: "/src/assets/banjir.jpg",
    status: "Offline",
    link: "#",
  },
  {
    id: 3,
    title: "CCTV Perbukitan",
    location: "Jl. Perbukitan Indah, Balikpapan Utara",
    img: "/src/assets/banjir.jpg",
    status: "Online",
    link: "#",
  },
]);

const filteredReports = computed(() => {
  const q = searchTerm.value.trim().toLowerCase();
  return reports.value.filter((r) => {
    const matchesQ =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q) ||
      r.status.toLowerCase().includes(q);
    const matchesStatus =
      !selectedStatus.value ||
      r.status.toLowerCase() === selectedStatus.value.toLowerCase();
    return matchesQ && matchesStatus;
  });
});
</script>

<template>
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
          <h2 class="text-2xl font-bold text-[#5D5A88]">CCTV Monitoring</h2>
          <p class="text-base text-[#5D5A88] mt-1">
            Pantau Kondisi Kota secara real-time melalui CCTV
          </p>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <div class="flex items-center gap-2 mb-2 sm:mb-0">
          <select
            v-model="selectedStatus"
            class="border border-gray-400 p-2 rounded-lg focus:outline-none focus:border-blue-400 text-sm"
          >
            <option value="">Semua Status</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <!-- Search bar -->
        <div class="flex items-center gap-2">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Cari CCTV, lokasi, kategori..."
            class="w-64 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            @click="searchTerm = ''"
            class="text-sm text-gray-600 px-3 py-2 rounded-lg hover:bg-gray-100"
            title="Reset"
          >
            Reset
          </button>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <template v-if="filteredReports.length">
        <div
          v-for="report in filteredReports"
          :key="report.id"
          class="rounded overflow-hidden shadow-lg flex flex-col bg-white"
        >
          <div class="relative">
            <img
              class="w-full h-64 object-cover"
              :src="report.img"
              :alt="report.title"
            />
            <div class="absolute inset-0 bg-black opacity-10"></div>
            <div
              :class="[
                'text-xs absolute top-3 right-3 px-3 py-1 rounded',
                report.status === 'Online'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-600 text-white',
              ]"
            >
              {{ report.status }}
            </div>
          </div>

          <div class="px-6 py-4 mb-auto">
            <a
              :href="report.link"
              class="font-medium text-lg text-[#5D5A88] hover:text-indigo-200 block mb-2"
              >{{ report.title }}</a
            >

            <div class="flex flex-col gap-1 text-xs text-[#5D5A88]">
              <div class="flex items-center gap-1">
                <svg
                  class="h-3.5 w-3.5 text-gray-500"
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

      <div v-else class="col-span-full text-center text-gray-500 py-20">
        Tidak ada CCTV yang cocok.
      </div>
    </div>
  </div>
</template>
