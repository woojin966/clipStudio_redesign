<template>
  <div class="home_wrapper">
    <article class="mainbanner_wrap">
      <section class="mainbanner_sec">
        <h2 class="blind">클립스튜디오 메인배너</h2>
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
        <h2 class="blind">{{ card.hiddenTitle }}</h2>
        <router-link to="/" class="feature_link">
          <div class="text_box">
            <span class="category big sb">{{ card.category }}</span>
            <h2 class="title h1">{{ card.title }}</h2>
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
          <h2 class="h1" aria-label="PC로 그림그리기">
            거대한 스케일,
            <br />
            압도적 디테일의 완성
          </h2>
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
          <h2 class="h1" aria-label="타블렛으로 그림그리기">
            펜끝에서 살아나는,
            <br />
            가장 직관적인 획
          </h2>
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
          <h2 class="h1" aria-label="모바일로 그림그리기">
            일상이 화실이 되는,
            <br />
            풍부한 영감
          </h2>
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
    <article class="plan_wrap">
      <div class="sticky_box" ref="stickyBox">
        <div
          v-for="(pos, index) in dotPositions"
          :key="index"
          class="dot"
          :class="{ active: activeIndex === index }"
          :style="{ top: pos + 'px' }">
          <span></span>
        </div>
      </div>
      <div class="plan_secs_container" ref="planContainer">
        <section class="plan_sec" :ref="(el) => (sections[0] = el)">
          <div class="top">
            <div>
              <h3 class="h2" aria-label="무료 체험판 이용하기">시작하기</h3>
              <p class="big sb">
                <span class="small n">
                  Windows / macOS / iPad / Android / iPhone
                </span>
              </p>
            </div>
            <router-link to="/" class="btn xl primary">
              무료체험 다운로드
            </router-link>
          </div>
          <div class="bottom edition_desc_box">
            <div class="pro">
              <p class="big sb">PRO</p>
              <p class="text">
                일러스트와 아트워크의 표준.
                <br />
                합리적인 가격으로 전문적인 드로잉 경험을 제공합니다.
              </p>
            </div>
            <div class="ex">
              <p class="big sb">EX</p>
              <p class="text">
                만화, 웹툰, 애니메이션을 위한 궁극의 도구.
                <br />
                모든 창작 영역을 아우르는 프리미엄 에디션입니다.
              </p>
            </div>
          </div>
        </section>
        <section class="plan_sec" :ref="(el) => (sections[1] = el)">
          <div class="top">
            <div>
              <h3 class="h2" aria-label="월정액 플랜 이용하기">월정액 플랜</h3>
              <p class="big sb">
                모든 기기에서, 가장 앞선 기능을
                <br />
                <span class="small n">
                  Windows / macOS / iPad / Android / iPhone
                </span>
              </p>
            </div>
            <router-link to="/" class="btn xl primary">
              PRO 월 1,000원 ~ / EX 월 3,000원 ~
            </router-link>
          </div>
        </section>
        <section class="plan_sec" :ref="(el) => (sections[2] = el)">
          <div class="top">
            <div>
              <h3 class="h2" aria-label="일시불 플랜 이용하기">
                무기한 라이센스
              </h3>
              <p class="big sb">
                Ver4.0 무기한 사용
                <br />
                <span class="small n">Windows / macOS</span>
              </p>
            </div>
            <router-link to="/" class="btn xl primary">
              PRO 66,400원 / EX 301,000원
            </router-link>
          </div>
        </section>
        <section class="plan_sec" :ref="(el) => (sections[3] = el)">
          <div class="top">
            <h3 class="h2 blind">추천 플랜 진단하기 & APP 다운로드</h3>
            <router-link to="/" class="btn xl secondary search_plan">
              추천 플랜 진단하기
            </router-link>
          </div>
          <div class="bottom download_box">
            <div class="left">
              <p class="big sb">APP Download</p>
              <div>
                <a
                  href="https://apps.apple.com/kr/app/id1262985592"
                  target="_blank">
                  <img
                    src="../../assets/images/App_Store_Badge_kr.png"
                    alt="애플 앱스토어 앱 다운로드 이미지" />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=jp.co.celsys.clipstudiopaint.googleplay"
                  target="_blank">
                  <img
                    src="../../assets/images/google-play-badge_kr.png"
                    alt="구글 앱스토어 앱 다운로드 이미지" />
                </a>
                <a href="https://galaxy.store/csp" target="_blank">
                  <img
                    src="../../assets/images/GalaxyStore_kr.png"
                    alt="갤럭시 앱스토어 앱 다운로드 이미지" />
                </a>
              </div>
            </div>
            <div class="right">
              <img
                src="../../assets/images/QR_onelink_kr.png"
                alt="QR 다운로드 이미지" />
            </div>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { Pagination, Navigation } from "swiper/modules";
const modules = [Pagination, Navigation];

// device banner height
const bannerImg = ref(null);
const dynamicHeight = ref("400px");
let bannerResizeObserver = null;

const updateBannerHeight = () => {
  if (bannerImg.value) {
    dynamicHeight.value = `${bannerImg.value.offsetHeight}px`;
  }
};

// feature data
const cards = ref([
  {
    id: 1,
    hiddenTitle: "기능소개",
    category: "Features",
    title: "본질의 진화",
    desc: `상상을 현실로 만드는 가장 정교한 도구들의 집합. <br />v5.0이 제시하는 새로운 창작의 기준을 경험하십시오.`,
    image: "",
  },
  {
    id: 2,
    hiddenTitle: "소재",
    category: "Assets",
    title: "영감의 보고",
    desc: `전 세계 크리에이터가 공유하는 무한한 소재 라이브러리. <br />당신의 획에 독보적인 가능성을 더합니다.`,
    image: "",
  },
  {
    id: 3,
    hiddenTitle: "커뮤니티",
    category: "Community",
    title: "창작의 연대",
    desc: `함께 그릴 때 영감은 배가됩니다. <br />팁을 나누고 작품을 공유하며 전 세계 아티스트와 함께 성장하십시오.`,
    image: "",
  },
  {
    id: 4,
    hiddenTitle: "지원",
    category: "Support",
    title: "완벽한 동행",
    desc: `창작 과정의 모든 고민을 해결합니다. <br />입문자를 위한 가이드부터 전문가를 위한 기술 지원까지`,
    image: "",
  },
]);

// Plan Section & Sticky Box Height Match
const stickyBox = ref(null);
const planContainer = ref(null);
let planResizeObserver = null;

const matchPlanHeight = () => {
  if (planContainer.value && stickyBox.value) {
    const targetHeight = planContainer.value.offsetHeight;
    stickyBox.value.style.height = `${targetHeight}px`;
  }
};

// 4. Dot Active State (Scroll Spy)
const sections = ref([]);
const activeIndex = ref(0);
const dotPositions = ref([]);

const observerOptions = {
  root: null,
  rootMargin: "-20% 0px -20% 0px",
  threshold: 0.5,
};
const updateDotPositions = () => {
  if (!sections.value.length || !planContainer.value) return;

  const containerTop =
    planContainer.value.getBoundingClientRect().top + window.scrollY;

  dotPositions.value = sections.value
    .filter((el) => el !== null)
    .map((el, idx) => {
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const relativeTop = sectionTop - containerTop;

      // 0번째: relativeTop - 0
      // 1번째: relativeTop - 30
      // 2번째: relativeTop - 60
      // 3번째: relativeTop - 90
      return relativeTop - idx * 30;
    });
};

let sectionObserver = null;

if (typeof window !== "undefined") {
  sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = sections.value.indexOf(entry.target);
        if (index !== -1) {
          activeIndex.value = index;
        }
      }
    });
  }, observerOptions);
}

onMounted(async () => {
  await nextTick();

  if (bannerImg.value) {
    updateBannerHeight();
    bannerResizeObserver = new ResizeObserver(updateBannerHeight);
    bannerResizeObserver.observe(bannerImg.value);
    bannerImg.value.addEventListener("load", updateBannerHeight);
  }

  if (planContainer.value) {
    matchPlanHeight();
    updateDotPositions();

    planResizeObserver = new ResizeObserver(() => {
      matchPlanHeight();
      updateDotPositions();
    });
    planResizeObserver.observe(planContainer.value);
  }

  if (sectionObserver) {
    sections.value.forEach((section) => {
      if (section) sectionObserver.observe(section);
    });
  }

  window.addEventListener("resize", updateDotPositions);
});
onUnmounted(() => {
  if (bannerResizeObserver) bannerResizeObserver.disconnect();
  if (planResizeObserver) planResizeObserver.disconnect();
  if (sectionObserver) sectionObserver.disconnect();
  if (bannerImg.value) {
    bannerImg.value.removeEventListener("load", updateBannerHeight);
  }
  window.removeEventListener("resize", updateDotPositions);
});
</script>
<style lang="scss" scoped>
@import "../../assets/scss/views/home.scss";
</style>
