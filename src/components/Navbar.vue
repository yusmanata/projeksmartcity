<template>
  <header class="relative z-50 bg-white shadow-sm">
    <nav
      aria-label="Global"
      class="flex items-center justify-center p-4 md:p-6 lg:px-8 relative"
    >
      <div class="absolute left-4 md:left-6 lg:left-8">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Smart City Balikpapan</span>
          <img
            src="/src/assets/logo.png"
            alt="Logo"
            class="h-8 md:h-10 w-auto"
          />
        </router-link>
      </div>
      <div class="absolute right-4 md:right-6 lg:right-8 md:hidden">
        <button
          type="button"
          command="show-modal"
          commandfor="mobile-menu"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            data-slot="icon"
            aria-hidden="true"
            class="size-6"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="hidden md:flex md:gap-x-6 lg:gap-x-12">
        <router-link
          to="/"
          class="text-sm/6 font-semibold text-[#5D5A88] hover:bg-gray-100 px-2 md:px-3 py-2 rounded-lg transition-colors"
          >Home</router-link
        >
        <router-link
          to="/BuatLaporan"
          class="text-sm/6 font-semibold text-[#5D5A88] hover:bg-gray-100 px-2 md:px-3 py-2 rounded-lg transition-colors"
          >Buat Laporan</router-link
        >
        <router-link
          to="/DaftarLaporan"
          class="text-sm/6 font-semibold text-[#5D5A88] hover:bg-gray-100 px-2 md:px-3 py-2 rounded-lg transition-colors"
          >Daftar Laporan</router-link
        >
        <router-link
          to="/DaftarCCTV"
          class="text-sm/6 font-semibold text-[#5D5A88] hover:bg-gray-100 px-2 md:px-3 py-2 rounded-lg transition-colors"
          >CCTV</router-link
        >
        <router-link
          to="/contact"
          class="text-sm/6 font-semibold text-[#5D5A88] hover:bg-gray-100 px-2 md:px-3 py-2 rounded-lg transition-colors"
          >Kontak</router-link
        >
      </div>
    </nav>
    <el-dialog>
      <dialog id="mobile-menu" class="backdrop:bg-transparent md:hidden">
        <div tabindex="0" class="fixed inset-0 focus:outline-none">
          <el-dialog-panel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div class="flex items-center justify-between">
              <router-link to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Smart City Balikpapan</span>
                <img src="/src/assets/logo.png" alt="Logo" class="h-8 w-auto" />
              </router-link>
              <button
                type="button"
                command="close"
                commandfor="mobile-menu"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  class="size-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <router-link
                    to="/"
                    command="close"
                    commandfor="mobile-menu"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Home</router-link
                  >
                  <router-link
                    to="/BuatLaporan"
                    command="close"
                    commandfor="mobile-menu"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Buat Laporan</router-link
                  >
                  <router-link
                    to="/DaftarLaporan"
                    command="close"
                    commandfor="mobile-menu"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Daftar Laporan</router-link
                  >
                  <router-link
                    to="/DaftarCCTV"
                    command="close"
                    commandfor="mobile-menu"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >CCTV</router-link
                  >
                  <router-link
                    to="/contact"
                    command="close"
                    commandfor="mobile-menu"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >Kontak</router-link
                  >
                </div>
              </div>
            </div>
          </el-dialog-panel>
        </div>
      </dialog>
    </el-dialog>
  </header>
</template>
