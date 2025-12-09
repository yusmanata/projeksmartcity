<script setup>
import { ref, computed } from "vue";
import { reportStore } from "../stores/reportStore";

const searchTerm = ref("");
const selectedStatus = ref("");

const filteredReports = computed(() => {
  const q = searchTerm.value.trim().toLowerCase();
  return reportStore.reports.filter((r) => {
    const matchesQ =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.desc.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q);
    const matchesStatus =
      !selectedStatus.value ||
      r.status.toLowerCase() === selectedStatus.value.toLowerCase();
    return matchesQ && matchesStatus;
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
          <h2 class="text-2xl font-bold text-[#5D5A88]">Daftar Laporan</h2>
          <p class="text-base text-[#5D5A88] mt-1">
            Lihat dan pantau semua laporan yang telah dibuat oleh masyarakat
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
            <option value="Menunggu">Menunggu</option>
            <option value="Proses">Proses</option>
            <option value="Selesai">Selesai</option>
          </select>
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
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <template v-if="filteredReports.length">
        <router-link
          v-for="report in filteredReports"
          :key="report.id"
          :to="`/laporan/${report.id}`"
          class="rounded overflow-hidden shadow-lg flex flex-col bg-white hover:shadow-xl transition-shadow cursor-pointer"
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
            <h3
              class="font-medium text-lg text-gray-800 hover:text-indigo-600 block mb-2"
            >
              {{ report.title }}
            </h3>
            <p class="text-gray-500 text-sm mb-3">{{ report.desc }}</p>
            <div class="flex flex-col gap-1 text-xs text-gray-600">
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
              <div class="flex items-center gap-1">
                <svg
                  class="h-3.5 w-3.5 text-gray-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{{ report.date }}</span>
              </div>
            </div>
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
              <span>{{ report.comments.length }} Comments</span>
            </div>
          </div>
        </router-link>
      </template>

      <div v-else class="col-span-full text-center text-gray-500 py-20">
        Tidak ada laporan yang cocok.
      </div>
    </div>
  </div>
</template>
