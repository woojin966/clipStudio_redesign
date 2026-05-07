<template>
  <article>
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
        class="mainbanner_swiper"
      >
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
  <div
    :class="[
      'ipt_group lg has_l_icon has_r_icon', // lg, regular, small, has_l_icon, has_r_icon
    ]"
  >
    <span class="icon left">
      <img src="" />
    </span>
    <input
      type="text"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button class="icon right">
      <img src="" />
    </button>
  </div>
  <label class="chkbox_group">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span v-if="label">{{ label }}</span>
  </label>
  <label class="radio_group">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <span v-if="label">{{ label }}</span>
  </label>
</template>
<script setup>
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
</script>
<style lang="scss" scoped>
@import "../../assets/scss/views/home.scss";
</style>
