<template>
  <div class="bg-[#5D5A88] min-h-screen">
    <div class="relative isolate">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div class="text-left">
            <h1
              class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Smart Complain System
            </h1>
            <p class="mt-6 text-lg text-white/80 max-w-xl">
              Laporkan masalah kota Anda dengan mudah dan cepat. Pantau status
              laporan secara real-time dengan dukungan monitoring CCTV.
            </p>
            <div class="mt-8 flex gap-4">
              <router-link
                to="/BuatLaporan"
                class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#5D5A88] shadow"
              >
                Buat Laporan →
              </router-link>

              <router-link
                to="/contact"
                class="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white hover:bg-white/5"
              >
                Contact Us →
              </router-link>
            </div>
          </div>
          <div class="flex justify-center lg:justify-end">
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
</template>
