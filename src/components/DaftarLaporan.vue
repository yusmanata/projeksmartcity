<script setup>
import { ref, computed } from "vue";

const searchTerm = ref("");

const reports = ref([
  {
    id: 1,
    title: "Banjir Bandang di Jalan Merdeka",
    desc: "Banjir menggenangi jalan utama setelah hujan deras.",
    img: "/src/assets/banjir.jpg",
    status: "Menunggu",
    time: "6 mins ago",
    comments: 2,
    category: "Banjir",
    link: "#",
  },
  {
    id: 2,
    title: "Pohon Tumbang di Taman Kota",
    desc: "Pohon besar tumbang dan menutup jalur pejalan kaki.",
    img: "/src/assets/banjir.jpg",
    status: "Selesai",
    time: "10 days ago",
    comments: 0,
    category: "Lingkungan",
    link: "#",
  },
  {
    id: 3,
    title: "Longsor di Perbukitan",
    desc: "Longsor kecil menghalangi akses jalan pedesaan.",
    img: "/src/assets/banjir.jpg",
    status: "Proses",
    time: "16 hours ago",
    comments: 9,
    category: "Bencana",
    link: "#",
  },
]);

const filteredReports = computed(() => {
  const q = searchTerm.value.trim().toLowerCase();
  if (!q) return reports.value;
  return reports.value.filter((r) => {
    return (
      r.title.toLowerCase().includes(q) ||
      r.desc.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q)
    );
  });
});

function statusClass(status) {
  if (status.toLowerCase() === "menunggu")
    return "bg-yellow-100 text-yellow-800";
  if (status.toLowerCase() === "selesai") return "bg-green-600 text-white";
  if (status.toLowerCase() === "proses") return "bg-indigo-600 text-white";
  return "bg-gray-200 text-gray-800";
}
</script>

<template>
  <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div class="flex items-center justify-between mb-6">
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
        <h2 class="text-lg font-semibold text-gray-800">Daftar Laporan</h2>
        <span class="text-sm text-gray-500"></span>
      </div>

      <!-- Search bar -->
      <div class="flex items-center gap-2">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Cari laporan, kategori, deskripsi..."
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

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <template v-if="filteredReports.length">
        <div
          v-for="report in filteredReports"
          :key="report.id"
          class="rounded overflow-hidden shadow-lg flex flex-col bg-white"
        >
          <div class="relative">
            <img
              class="w-full h-44 object-cover"
              :src="report.img"
              :alt="report.title"
            />
            <div class="absolute inset-0 bg-black opacity-10"></div>
            <div
              :class="[
                'text-xs absolute top-3 right-3 px-3 py-1 rounded',
                statusClass(report.status),
              ]"
            >
              {{ report.status }}
            </div>
          </div>

          <div class="px-6 py-4 mb-auto">
            <a
              :href="report.link"
              class="font-medium text-lg text-gray-800 hover:text-indigo-600 block mb-2"
              >{{ report.title }}</a
            >
            <p class="text-gray-500 text-sm">{{ report.desc }}</p>
          </div>

          <div class="px-6 py-3 flex items-center justify-between bg-gray-50">
            <div class="flex items-center gap-3">
              <span class="flex items-center text-xs text-gray-600">
                <svg
                  class="h-4 w-4 mr-1 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8v4l3 3"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
                <span class="text-xs">{{ report.time }}</span>
              </span>

              <span class="flex items-center text-xs text-gray-600">
                <svg
                  class="h-4 w-4 mr-1 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"></path>
                </svg>
                <span class="text-xs font-medium text-indigo-600">{{
                  report.category
                }}</span>
              </span>
            </div>

            <div class="flex items-center text-xs text-gray-600">
              <svg
                class="h-4 w-4 mr-1 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              <span>{{ report.comments }} Comments</span>
            </div>
          </div>
        </div>
      </template>

      <div v-else class="col-span-full text-center text-gray-500 py-20">
        Tidak ada laporan yang cocok.
      </div>
    </div>
  </div>
</template>
