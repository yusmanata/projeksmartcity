<script setup>
import { ref, onMounted, nextTick } from "vue";

const props = defineProps({
  cctv: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["close"]);

const currentTime = ref("");
const videoRef = ref(null);

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

  // Force video to play
  nextTick(() => {
    if (videoRef.value) {
      videoRef.value.play().catch((err) => {
        console.log("Autoplay prevented:", err);
      });
    }
  });
});

const closeModal = () => {
  emit("close");
};
</script>

<template>
  <div
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
            ref="videoRef"
            class="w-full h-auto"
            style="min-height: 60vh; max-height: 80vh"
            :class="{ grayscale: cctv.status === 'Offline' }"
            autoplay
            loop
            muted
            playsinline
            controls
          >
            <source :src="cctv.video" type="video/mp4" />
            Browser tidak mendukung video.
          </video>

          <!-- LIVE Badge -->
          <div
            v-if="cctv.status === 'Online'"
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
            v-if="cctv.status === 'Online'"
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
                {{ cctv.title }}
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
                <span>{{ cctv.location }}</span>
              </div>
            </div>
            <div
              :class="[
                'px-4 py-2 rounded font-semibold',
                cctv.status === 'Online'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-600 text-white',
              ]"
            >
              {{ cctv.status }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
