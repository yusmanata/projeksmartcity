import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../components/HomePage.vue";
import ContactPage from "../components/ContactPage.vue";
import BuatLaporan from "../components/BuatLaporanPage.vue";
import DaftarLaporan from "../components/DaftarLaporanPage.vue";
import DaftarCCTVPage from "../components/DaftarCCTVPage.vue";
import DetailLaporan from "../components/DetailLaporan.vue";
import NamaGuePage from "../components/NamaGuePage.vue";

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
  {
    path: "/laporan/:id",
    name: DetailLaporan,
    component: DetailLaporan,
  },
  {
    path: "/NamaGue",
    name: NamaGuePage,
    component: NamaGuePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
