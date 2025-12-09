<script setup>
import { ref, computed, onMounted } from "vue";
import DetailCCTV from "./DetailCCTV.vue";

const searchTerm = ref("");
const selectedStatus = ref("");
const currentTime = ref("");
const selectedCCTV = ref(null);
const showModal = ref(false);

const openModal = (report) => {
  selectedCCTV.value = report;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedCCTV.value = null;
};

// Update timestamp every second for real-time effect
onMounted(() => {
  const updateTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };
  updateTime();
  setInterval(updateTime, 1000);
});

const reports = ref([
  {
    id: 1,
    title: "CCTV Panjaitan",
    location: "Jl. Merdeka No. 45, Balikpapan",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    status: "Online",
    link: "#",
  },
  {
    id: 2,
    title: "CCTV Taman Kota",
    location: "Jl. Taman Raya, Balikpapan",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    status: "Offline",
    link: "#",
  },
  {
    id: 3,
    title: "CCTV Perbukitan",
    location: "Jl. Perbukitan Indah, Balikpapan Utara",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
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
          <div class="relative cursor-pointer" @click="openModal(report)">
            <video
              class="w-full h-64 object-cover"
              :class="{ grayscale: report.status === 'Offline' }"
              muted
              preload="metadata"
            >
              <source :src="report.video + '#t=0.1'" type="video/mp4" />
              Browser tidak mendukung video.
            </video>

            <!-- LIVE Badge with Recording Indicator -->
            <div
              v-if="report.status === 'Online'"
              class="absolute top-3 left-3 flex items-center gap-2 bg-red-600 text-white text-xs px-3 py-1 rounded font-semibold"
            >
              <span class="relative flex h-2 w-2">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-2 w-2 bg-white"
                ></span>
              </span>
              LIVE
            </div>

            <!-- Real-time Timestamp -->
            <div
              v-if="report.status === 'Online'"
              class="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono"
            >
              {{ currentTime }}
            </div>

            <!-- Status Badge -->
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

            <!-- Fullscreen Icon on Hover -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/30 transition-all duration-200 group"
            >
              <svg
                class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
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

    <!-- Fullscreen Modal -->
    <div
      v-if="showModal && selectedCCTV"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      @click="closeModal"
    >
      <div class="relative w-full max-w-6xl" @click.stop>
        <!-- Back Button -->
        <button
          @click="closeModal"
          class="absolute -top-12 left-0 flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span class="font-medium">Kembali</span>
        </button>

        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <svg
            class="w-8 h-8"
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

        <!-- Video Container -->
        <div class="bg-black rounded-lg overflow-hidden">
          <div class="relative">
            <video
              v-if="selectedCCTV.status === 'Online'"
              class="w-full max-h-[80vh] object-contain"
              autoplay
              loop
              controls
              :poster="selectedCCTV.img"
            >
              <source :src="selectedCCTV.video" type="video/mp4" />
              Browser tidak mendukung video.
            </video>
            <img
              v-else
              class="w-full max-h-[80vh] object-contain grayscale"
              :src="selectedCCTV.img"
              :alt="selectedCCTV.title"
            />

            <!-- LIVE Badge -->
            <div
              v-if="selectedCCTV.status === 'Online'"
              class="absolute top-4 left-4 flex items-center gap-2 bg-red-600 text-white text-sm px-4 py-2 rounded font-semibold"
            >
              <span class="relative flex h-3 w-3">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-3 w-3 bg-white"
                ></span>
              </span>
              LIVE
            </div>

            <!-- Timestamp -->
            <div
              v-if="selectedCCTV.status === 'Online'"
              class="absolute bottom-4 left-4 bg-black/80 text-white text-sm px-3 py-2 rounded font-mono"
            >
              {{ currentTime }}
            </div>
          </div>

          <!-- Info Panel -->
          <div class="bg-gray-900 text-white p-6">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-2xl font-bold mb-2">
                  {{ selectedCCTV.title }}
                </h3>
                <div class="flex items-center gap-2 text-gray-300">
                  <svg
                    class="h-5 w-5"
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
                  <span>{{ selectedCCTV.location }}</span>
                </div>
              </div>
              <div
                :class="[
                  'px-4 py-2 rounded font-semibold',
                  selectedCCTV.status === 'Online'
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-600 text-white',
                ]"
              >
                {{ selectedCCTV.status }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
