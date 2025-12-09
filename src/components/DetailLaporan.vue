<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { reportStore } from "../stores/reportStore";

const route = useRoute();
const router = useRouter();

const report = ref(null);
const commentForm = ref({
  author: "",
  text: "",
});

const handleAddComment = () => {
  if (commentForm.value.author && commentForm.value.text) {
    reportStore.addComment(report.value.id, {
      author: commentForm.value.author,
      text: commentForm.value.text,
    });

    // Update report.value with new comments from store
    const updatedReport = reportStore.getReportById(report.value.id);
    if (updatedReport) {
      report.value.comments = updatedReport.comments;
    }

    // Reset form
    commentForm.value = {
      author: "",
      text: "",
    };
  }
}; // Extended report data for detail view
const extendedReports = [
  {
    id: 1,
    title: "Banjir Bandang di Jalan Merdeka",
    desc: "Banjir menggenangi jalan utama setelah hujan deras.",
    description:
      "Terdapat jalan berlubang di jalan sudirman, tepatnya di depan Gedung Serbaguna, dengan kondisi cukup dalam sehingga berpotensi membahayakan pengendara motor dan mobil yang melintas, terutama pada malam hari karena minim penerangan.",
    location: "Jl. Merdeka No. 45, Balikpapan",
    fullLocation: "Jl. M21 Thamrin, Jakarta Pusat",
    date: "12 Oktober 2025",
    img: "/src/assets/banjir.jpg",
    status: "Diproses",
    reporter: "Haji Alam",
    category: "Jalan Rusak",
    persimpangan: "Persimpangan",
    timeline: [
      {
        status: "Laporan Diterima",
        date: "12 Oktober 2025",
        completed: true,
      },
      {
        status: "Verifikasi",
        date: "15 Oktober 2025",
        completed: true,
      },
      {
        status: "Dalam Proses",
        date: "20 Oktober 2025",
        completed: true,
      },
      {
        status: "Status Selesai",
        date: "30 Oktober 2025",
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "Pohon Tumbang di Taman Kota",
    desc: "Pohon besar tumbang dan menutup jalur pejalan kaki.",
    description:
      "Pohon besar tumbang akibat angin kencang dan menutup jalur pejalan kaki di Taman Kota.",
    location: "Jl. Taman Raya, Balikpapan",
    fullLocation: "Jl. Taman Raya No. 10, Balikpapan",
    date: "13 November 2025",
    img: "/src/assets/banjir.jpg",
    status: "Selesai",
    reporter: "Budi Santoso",
    category: "Lingkungan",
    persimpangan: "Taman",
    timeline: [
      {
        status: "Laporan Diterima",
        date: "13 November 2025",
        completed: true,
      },
      {
        status: "Verifikasi",
        date: "14 November 2025",
        completed: true,
      },
      {
        status: "Dalam Proses",
        date: "15 November 2025",
        completed: true,
      },
      {
        status: "Status Selesai",
        date: "16 November 2025",
        completed: true,
      },
    ],
  },
  {
    id: 3,
    title: "Longsor di Perbukitan",
    desc: "Longsor kecil menghalangi akses jalan pedesaan.",
    description:
      "Longsor kecil terjadi di jalan perbukitan yang menghalangi akses jalan pedesaan.",
    location: "Jl. Perbukitan Indah, Balikpapan Utara",
    fullLocation: "Jl. Perbukitan Indah No. 5, Balikpapan Utara",
    date: "22 November 2025",
    img: "/src/assets/banjir.jpg",
    status: "Menunggu",
    reporter: "Siti Rahma",
    category: "Bencana",
    persimpangan: "Jalan",
    timeline: [
      {
        status: "Laporan Diterima",
        date: "22 November 2025",
        completed: true,
      },
      {
        status: "Verifikasi",
        date: "",
        completed: false,
      },
      {
        status: "Dalam Proses",
        date: "",
        completed: false,
      },
      {
        status: "Status Selesai",
        date: "",
        completed: false,
      },
    ],
  },
];

onMounted(() => {
  const reportId = parseInt(route.params.id);
  const baseReport = reportStore.getReportById(reportId);

  // Try to find extended data, fallback to base report with default timeline
  const extended = extendedReports.find((r) => r.id === reportId);

  if (extended) {
    // Merge extended data with comments from store
    report.value = {
      ...extended,
      comments: baseReport?.comments || [],
    };
  } else if (baseReport) {
    // Create extended report from base data with default timeline
    report.value = {
      ...baseReport,
      description: baseReport.desc,
      fullLocation: baseReport.location,
      reporter: "Pelapor",
      persimpangan: "Area",
      timeline: [
        {
          status: "Laporan Diterima",
          date: baseReport.date,
          completed: true,
        },
        {
          status: "Verifikasi",
          date: "",
          completed: false,
        },
        {
          status: "Dalam Proses",
          date: "",
          completed: false,
        },
        {
          status: "Status Selesai",
          date: "",
          completed: false,
        },
      ],
    };
  }
});

const goBack = () => {
  router.push("/DaftarLaporan");
};

const statusClass = (status) => {
  if (status.toLowerCase() === "menunggu")
    return "bg-yellow-100 text-yellow-800";
  if (status.toLowerCase() === "selesai") return "bg-green-600 text-white";
  if (status.toLowerCase() === "diproses" || status.toLowerCase() === "proses")
    return "bg-indigo-600 text-white";
  return "bg-gray-200 text-gray-800";
};
</script>

<template>
  <div class="min-h-screen bg-[#E7E6F2] py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Back Button -->
      <button
        @click="goBack"
        class="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Kembali
      </button>

      <div v-if="report" class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Left Column - Main Content -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Header Card -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <div class="mb-4">
              <h1 class="text-2xl font-bold text-gray-800 mb-2">
                Detail Laporan
              </h1>
              <p class="text-sm text-gray-500">
                Lihat dan pantau semua laporan yang telah dibuat
              </p>
            </div>

            <!-- Report Title & Meta -->
            <div class="mb-4">
              <h2 class="text-xl font-semibold text-gray-800 mb-3">
                {{ report.title }}
              </h2>
              <div class="flex flex-wrap gap-4 text-sm text-gray-600">
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{{ report.date }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>{{ report.reporter }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"></path>
                  </svg>
                  <span>{{ report.category }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    ></path>
                  </svg>
                  <span>{{ report.persimpangan }}</span>
                </div>
              </div>
            </div>

            <!-- Status Badge -->
            <div
              :class="[
                'inline-block px-4 py-1 rounded-full text-sm font-medium',
                statusClass(report.status),
              ]"
            >
              {{ report.status }}
            </div>
          </div>

          <!-- Image -->
          <div class="bg-white rounded-lg shadow-sm overflow-hidden">
            <img
              :src="report.img"
              :alt="report.title"
              class="w-full h-96 object-cover"
            />
          </div>

          <!-- Description -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Deskripsi</h3>
            <p class="text-gray-600 leading-relaxed">
              {{ report.description }}
            </p>
          </div>

          <!-- Location -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Lokasi</h3>
            <div class="flex items-start gap-2 mb-4">
              <svg
                class="w-5 h-5 text-gray-500 mt-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span class="text-gray-700">{{ report.fullLocation }}</span>
            </div>

            <!-- Map Placeholder -->
            <div class="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1751171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sBunderan%20HI!5e0!3m2!1sen!2sid!4v1635456789012!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Right Column - Timeline & Actions -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Status Timeline -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">
              Status Timeline
            </h3>

            <div class="space-y-6">
              <div
                v-for="(item, index) in report.timeline"
                :key="index"
                class="relative"
              >
                <!-- Timeline Line -->
                <div
                  v-if="index < report.timeline.length - 1"
                  :class="[
                    'absolute left-3 top-8 w-0.5 h-12',
                    item.completed ? 'bg-blue-500' : 'bg-gray-300',
                  ]"
                ></div>

                <div class="flex items-start gap-3">
                  <!-- Icon -->
                  <div
                    :class="[
                      'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center',
                      item.completed
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-300 text-gray-500',
                    ]"
                  >
                    <svg
                      v-if="item.completed"
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <!-- Content -->
                  <div class="flex-1">
                    <p
                      :class="[
                        'font-medium',
                        item.completed ? 'text-gray-800' : 'text-gray-500',
                      ]"
                    >
                      {{ item.status }}
                    </p>
                    <p v-if="item.date" class="text-sm text-gray-500 mt-0.5">
                      {{ item.date }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="bg-white rounded-lg shadow-sm p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Tindakan</h3>
            <div class="space-y-3">
              <button
                class="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <span class="text-gray-700">Hubungi Admin</span>
              </button>

              <button
                class="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <span class="text-gray-700">Lihat di Map</span>
              </button>
            </div>
          </div>

          <!-- Comments Section -->
          <div class="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3
              class="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            >
              <svg
                class="w-6 h-6 text-indigo-600"
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
              Komentar ({{ report.comments?.length || 0 }})
            </h3>

            <!-- Comment Form -->
            <div class="mb-6">
              <form @submit.prevent="handleAddComment" class="space-y-3">
                <div>
                  <input
                    v-model="commentForm.author"
                    type="text"
                    placeholder="Nama Anda"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
                <div>
                  <textarea
                    v-model="commentForm.text"
                    placeholder="Tulis komentar Anda..."
                    rows="3"
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                >
                  Kirim Komentar
                </button>
              </form>
            </div>

            <!-- Comments List -->
            <div class="space-y-4">
              <div
                v-if="report.comments?.length === 0"
                class="text-center text-gray-500 py-8"
              >
                Belum ada komentar. Jadilah yang pertama berkomentar!
              </div>

              <div
                v-for="comment in report.comments"
                :key="comment.id"
                class="border-l-4 border-indigo-200 bg-gray-50 p-4 rounded-r-lg"
              >
                <div class="flex items-start justify-between mb-2">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    >
                      {{ comment.author.charAt(0).toUpperCase() }}
                    </div>
                    <div>
                      <p class="font-semibold text-gray-800">
                        {{ comment.author }}
                      </p>
                      <p class="text-xs text-gray-500">{{ comment.date }}</p>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700 ml-10">{{ comment.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="flex items-center justify-center min-h-[60vh]">
        <p class="text-gray-500">Memuat detail laporan...</p>
      </div>
    </div>
  </div>
</template>
