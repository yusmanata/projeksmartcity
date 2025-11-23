<template>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h2
          class="text-4xl font-bold tracking-tight text-[#5D5A88] sm:text-5xl"
        >
          Frequently Asked Questions
        </h2>
        <p class="mt-4 text-lg text-[#5D5A88]">
          Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie
          atole elementum eu facilisis faucibus interdum posuere.
        </p>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2"
      >
        <!-- FAQ Item 1 -->
        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <details class="group">
            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold text-[#5D5A88]"
            >
              <span>Apa itu Sistem Pengaduan Masyarakat?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  class="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-sm text-gray-600 group-open:animate-fadeIn">
              Platform digital yang memungkinkan warga untuk melaporkan masalah
              di lingkungan, seperti jalan rusak, sampah menumpuk, atau kejadian
              darurat. Laporan akan diterima oleh petugas kota untuk
              ditindaklanjuti.
            </p>
          </details>
        </div>

        <!-- FAQ Item 2 -->
        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <details class="group">
            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold text-[#5D5A88]"
            >
              <span>Apakah data pribadi saya akan terlihat oleh publik?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  class="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-sm text-gray-600 group-open:animate-fadeIn">
              Tidak, data pribadi Anda seperti nama dan kontak dijaga
              kerahasiaannya. Hanya informasi laporan (lokasi, kategori,
              deskripsi) yang dapat dilihat publik untuk transparansi.
            </p>
          </details>
        </div>

        <!-- FAQ Item 3 -->
        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <details class="group">
            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold text-[#5D5A88]"
            >
              <span>Siapa saja yang bisa menggunakan aplikasi ini?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  class="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-sm text-gray-600 group-open:animate-fadeIn">
              Semua warga yang memiliki akses internet dapat menggunakan
              aplikasi ini. Anda hanya perlu mendaftar dengan email atau nomor
              telepon untuk mulai membuat laporan.
            </p>
          </details>
        </div>

        <!-- FAQ Item 4 -->
        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <details class="group">
            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold text-[#5D5A88]"
            >
              <span>Apakah saya bisa memantau perkembangan laporan saya?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  class="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-sm text-gray-600 group-open:animate-fadeIn">
              Ya, setelah membuat laporan, Anda dapat melihat statusnya
              (menunggu, proses, atau selesai) melalui halaman "Daftar Laporan"
              atau notifikasi yang dikirim ke email/SMS Anda.
            </p>
          </details>
        </div>

        <!-- FAQ Item 5 -->
        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <details class="group">
            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold text-[#5D5A88]"
            >
              <span>Bagaimana cara membuat laporan baru?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  class="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-sm text-gray-600 group-open:animate-fadeIn">
              Klik tombol "Buat Laporan" di halaman utama, isi formulir dengan
              detail masalah (kategori, lokasi, deskripsi), unggah foto jika
              ada, lalu kirim. Anda akan mendapatkan nomor laporan untuk
              pelacakan.
            </p>
          </details>
        </div>

        <!-- FAQ Item 6 -->
        <div class="rounded-lg border border-gray-200 bg-white p-6">
          <details class="group">
            <summary
              class="flex cursor-pointer list-none items-center justify-between font-semibold text-[#5D5A88]"
            >
              <span>Apa fungsi CCTV dalam aplikasi ini?</span>
              <span class="transition group-open:rotate-180">
                <svg
                  class="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </summary>
            <p class="mt-3 text-sm text-gray-600 group-open:animate-fadeIn">
              Fitur CCTV memungkinkan Anda melihat rekaman kamera pengawas di
              area publik untuk mendukung laporan atau memantau situasi
              real-time di berbagai lokasi kota.
            </p>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>
