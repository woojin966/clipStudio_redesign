<template>
  <article class="mainbanner_wrap">
    <section class="mainbanner_sec">
      <h1 class="hidden">클립스튜디오 메인배너</h1>
      <Swiper
        :modules="modules"
        :centeredSlides="true"
        :loop="true"
        :spaceBetween="0"
        :breakpoints="{
          /* 모바일: 주인공이 80% 차지, 양옆 10%씩 슬쩍 보임 */
          0: {
            slidesPerView: 1.4,
          },
          /* 태블릿 */
          768: {
            slidesPerView: 1.3,
          },
          /* 데스크탑: 주인공이 화면의 약 60% 차지, 양옆이 넉넉히 보임 */
          1024: {
            slidesPerView: 1.2,
          },
        }"
        navigation
        pagination
        class="mainbanner_swiper">
        <SwiperSlide>aaaaa</SwiperSlide>
        <SwiperSlide>bbbbb</SwiperSlide>
        <SwiperSlide>ccccc</SwiperSlide>
        <SwiperSlide>ddddd</SwiperSlide>
        <SwiperSlide>eeeee</SwiperSlide>
        <SwiperSlide>fffff</SwiperSlide>
      </Swiper>
      <!-- 추후 아래 코드로 변경할 것 -->
      <!-- <Swiper :modules="modules" pagination>
        <SwiperSlide v-for="item in drawingSteps" :key="item.id">
          <div class="card-content">
            // 이미지는 assets 경로에 맞춰서 바인딩 
          </div>
        </SwiperSlide>
      </Swiper> -->
    </section>
  </article>
  <article class="core_features_wrap"></article>
  <article
    class="device_parallax_wrap"
    :style="{ '--dynamic-h': dynamicHeight }">
    <section class="parallax_sec pc">
      <div class="title_box flex_c">
        <h1 class="h1" aria-label="PC로 그림그리기">
          거대한 스케일,
          <br />
          압도적 디테일의 완성
        </h1>
        <router-link
          to="/drawing/pc"
          aria-label="데스크탑 가이드 알아보기"
          class="btn lg primary move_guide">
          강력한 퍼포먼스 확인하기
        </router-link>
      </div>
      <picture class="main-banner-visual">
        <source
          media="(max-width: 451px)"
          srcset="../../assets/images/device_banner1_mo.png" />
        <source
          media="(max-width: 1023px)"
          srcset="../../assets/images/device_banner1_tab.png" />
        <img
          ref="bannerImg"
          src="../../assets/images/device_banner1_pc.png"
          alt="클립스튜디오 디바이스 가이드 배너 이미지, Device guide banner image for clipstudio website"
          loading="lazy" />
      </picture>
    </section>
    <section class="parallax_sec tablet">
      <div class="title_box flex_c">
        <h1 class="h1" aria-label="타블렛으로 그림그리기">
          펜끝에서 살아나는,
          <br />
          가장 직관적인 획
        </h1>
        <router-link
          to="/drawing/tablet"
          aria-label="타블렛 가이드 알아보기"
          class="btn lg primary move_guide">
          자유로운 드로잉 경험하기
        </router-link>
      </div>
      <picture class="main-banner-visual">
        <source
          media="(max-width: 451px)"
          srcset="../../assets/images/device_banner2_mo.png" />
        <source
          media="(max-width: 1023px)"
          srcset="../../assets/images/device_banner2_tab.png" />
        <img
          ref="bannerImg"
          src="../../assets/images/device_banner2_pc.png"
          alt="클립스튜디오 디바이스 가이드 배너 이미지, Device guide banner image for clipstudio website"
          loading="lazy" />
      </picture>
    </section>
    <section class="parallax_sec mobile">
      <div class="title_box flex_c">
        <h1 class="h1" aria-label="모바일로 그림그리기">
          일상이 화실이 되는,
          <br />
          풍부한 영감
        </h1>
        <router-link
          to="/drawing/tablet"
          aria-label="모바일 가이드 알아보기"
          class="btn lg primary move_guide">
          언제 어디서나 창작하기
        </router-link>
      </div>
      <picture class="main-banner-visual">
        <source
          media="(max-width: 451px)"
          srcset="../../assets/images/device_banner3_mo.png" />
        <source
          media="(max-width: 1023px)"
          srcset="../../assets/images/device_banner3_tab.png" />
        <img
          ref="bannerImg"
          src="../../assets/images/device_banner3_pc.png"
          alt="클립스튜디오 디바이스 가이드 배너 이미지, Device guide banner image for clipstudio website"
          loading="lazy" />
      </picture>
    </section>
  </article>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation];
// 슬라이드에 들어갈 데이터 정의
// const drawingSteps = [
//   {
//     id: 1,
//     title: "PC로 그리기",
//     img: "name.jpg",
//   },
//   {
//     id: 2,
//     title: "타블렛으로 그리기",
//     img: "name.jpg",
//   },
//   {
//     id: 3,
//     img: "name.jpg",
//   },
// ];

// device banner height
const bannerImg = ref(null);
const dynamicHeight = ref("400px");
const updateHeight = () => {
  if (bannerImg.value) {
    // 이미지의 실제 높이를 가져와서 저장
    const height = bannerImg.value.offsetHeight;
    dynamicHeight.value = `${height}px`;
  }
};
let resizeObserver = null;
onMounted(() => {
  if (bannerImg.value) {
    updateHeight(); // 초기 실행
    // 1. 창 크기가 변할 때 실시간 대응
    resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    resizeObserver.observe(bannerImg.value);
    // 2. 이미지 로딩 지연 대응 (혹시 모를 0px 방지)
    bannerImg.value.addEventListener("load", updateHeight);
  }
});
onUnmounted(() => {
  if (resizeObserver) resizeObserver.disconnect();
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/views/home.scss";
</style>
