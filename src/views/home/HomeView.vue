<template>
  <div class="home_wrapper">
    <article class="mainbanner_wrap">
      <section class="mainbanner_sec">
        <h1 class="blind">클립스튜디오 메인배너</h1>
        <Swiper
          :modules="modules"
          :centeredSlides="true"
          :loop="true"
          :spaceBetween="12"
          :slidesPerView="1.3"
          navigation
          pagination
          class="mainbanner_swiper">
          <SwiperSlide>
            <router-link to="/product/pc" class="slide_link">
              <div class="banner_text_box">
                <p class="banner_title">
                  THE
                  <br />
                  FLOW
                </p>
                <p class="babber_sub b">오직, 영감만이 흐르도록</p>
              </div>
            </router-link>
          </SwiperSlide>
          <SwiperSlide>
            <router-link to="/product/pc" class="slide_link">
              <div class="banner_text_box">
                <p class="banner_title">
                  PRO
                  <br />
                  POWER
                </p>
                <p class="babber_sub b">불가능했던 디테일의 실현</p>
              </div>
            </router-link>
          </SwiperSlide>
          <SwiperSlide>
            <router-link to="/product/pc" class="slide_link">
              <div class="banner_text_box">
                <p class="banner_title">SEAMLESS</p>
                <p class="babber_sub b">어디서든, 당신의 스튜디오</p>
              </div>
            </router-link>
          </SwiperSlide>
          <SwiperSlide>
            <router-link to="/product/pc" class="slide_link">
              <div class="banner_text_box">
                <p class="banner_title">
                  THE
                  <br />
                  TOUCH
                </p>
                <p class="babber_sub b">가장 완벽한 획</p>
              </div>
            </router-link>
          </SwiperSlide>
        </Swiper>
      </section>
    </article>
    <article class="core_features_wrap">
      <section div v-for="card in cards" :key="card.id" class="feature_sec">
        <h1 class="blind">{{ card.hiddenTitle }}</h1>
        <router-link to="/" class="feature_link">
          <div class="text_box">
            <span class="category big sb">{{ card.category }}</span>
            <h2 class="title h2">{{ card.title }}</h2>
            <p class="desc text" v-html="card.desc"></p>
          </div>
          <div class="img_box">
            <img :src="card.image" :alt="card.title" />
          </div>
        </router-link>
      </section>
    </article>
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
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation];

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

// feature data
const cards = ref([
  {
    id: 1,
    hiddenTitle: "기능소개",
    category: "Features",
    title: "본질의 진화",
    desc: `상상을 현실로 만드는 가장 정교한 도구들의 집합. <br />v5.0이 제시하는 새로운 창작의 기준을 경험하십시오.`,
    // image: '/images/feature_main.jpg'
    image: "",
  },
  {
    id: 2,
    hiddenTitle: "소재",
    category: "Assets",
    title: "영감의 보고",
    desc: `전 세계 크리에이터가 공유하는 무한한 소재 라이브러리. <br />당신의 획에 독보적인 가능성을 더합니다.`,
    // image: '/images/feature_main.jpg'
    image: "",
  },
  {
    id: 3,
    hiddenTitle: "커뮤니티",
    category: "Community",
    title: "창작의 연대",
    desc: `함께 그릴 때 영감은 배가됩니다. <br />팁을 나누고 작품을 공유하며 전 세계 아티스트와 함께 성장하십시오.`,
    // image: '/images/feature_main.jpg'
    image: "",
  },
  {
    id: 4,
    hiddenTitle: "지원",
    category: "Support",
    title: "완벽한 동행",
    desc: `창작 과정의 모든 고민을 해결합니다. <br />입문자를 위한 가이드부터 전문가를 위한 기술 지원까지`,
    // image: '/images/feature_main.jpg'
    image: "",
  },
]);

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
