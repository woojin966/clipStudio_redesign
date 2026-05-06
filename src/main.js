import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/common.scss";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const app = createApp(App);
app.component("Swiper", Swiper);
app.component("SwiperSlide", SwiperSlide);
app.use(router);
app.mount("#app");
