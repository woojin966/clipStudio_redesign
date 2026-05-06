import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/HomeView.vue"),
  },
  // 장치별 페이지 (그룹핑)
  {
    path: "/drawing/pc",
    name: "PcDrawing",
    component: () => import("../views/devices/PcDrawing.vue"),
  },
  {
    path: "/drawing/tablet",
    name: "TabletDrawing",
    component: () => import("../views/devices/TabletDrawing.vue"),
  },
  {
    path: "/drawing/mobile",
    name: "MobileDrawing",
    component: () => import("../views/devices/MobileDrawing.vue"),
  },
  // 주요 메뉴
  {
    path: "/features",
    name: "Features",
    component: () => import("../views/features/FeaturesView.vue"),
  },
  {
    path: "/tutorials",
    name: "Tutorials",
    component: () => import("../views/tutorials/TutorialsView.vue"),
  },
  {
    path: "/assets",
    name: "Assets",
    component: () => import("../views/assets/AssetsView.vue"),
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/support/SupportView.vue"),
  },
  // 결제 및 CS
  {
    path: "/pricing",
    name: "Plan",
    component: () => import("../views/plan/PLanView.vue"),
  },
  {
    path: "/cs",
    name: "CS",
    component: () => import("../views/cs/CustomerServiceView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 페이지 이동 시 항상 스크롤 맨 위로 가게 설정 (애플 감성 필수)
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
