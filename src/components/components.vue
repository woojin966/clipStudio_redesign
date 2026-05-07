<template>
  <!-- // radio -->
  <label class="radio_group">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      @change="$emit('update:modelValue', value)"
    />
    <span v-if="label">{{ label }}</span>
  </label>
  <!-- checkbox -->
  <label class="chkbox_group">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span v-if="label">{{ label }}</span>
  </label>
  <!-- input : text -->
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
</template>

<script setup>
// radio
defineProps({
  modelValue: [String, Number, Boolean],
  value: [String, Number, Boolean],
  label: String,
});
defineEmits(["update:modelValue"]);
// checkbox
defineProps({
  modelValue: Boolean,
  label: String,
});
defineEmits(["update:modelValue"]);
// input text
defineProps({
  modelValue: String,
  placeholder: { type: String, default: "입력해 주세요" },
});
defineEmits(["update:modelValue"]);
</script>
