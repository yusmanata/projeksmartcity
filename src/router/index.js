import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ContactPage from "../components/ContactPage.vue";
import BuatLaporan from "../components/BuatLaporanPage.vue";
import DaftarLaporan from "../components/DaftarLaporanPage.vue";
import DaftarCCTVPage from "../components/DaftarCCTVPage.vue";

const routes = [
  {
    path: "/",
    name: HomePage,
    component: HomePage,
  },
  {
    path: "/contact",
    name: ContactPage,
    component: ContactPage,
  },
  {
    path: "/BuatLaporan",
    name: BuatLaporan,
    component: BuatLaporan,
  },
  {
    path: "/DaftarLaporan",
    name: DaftarLaporan,
    component: DaftarLaporan,
  },
  {
    path: "/DaftarCCTV",
    name: DaftarCCTVPage,
    component: DaftarCCTVPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
