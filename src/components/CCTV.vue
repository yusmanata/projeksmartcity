<script setup>
import { ref, onMounted } from "vue";

const currentTime = ref("");

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
            class="rounded overflow-hidden shadow-lg flex flex-col bg-white"
          >
            <div class="relative">
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
      </div>
    </div>
  </div>
</template>
