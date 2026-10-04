<script setup>
import { reactive, useTemplateRef } from 'vue';
import Donut from './Donut.vue';
import { LAST_YEAR, THIS_YEAR } from './data.js';

const thisYear = reactive(THIS_YEAR.map((s) => ({ ...s })));
const current = useTemplateRef('current');

function download() {
  const markup = new XMLSerializer().serializeToString(current.value.svg);
  const url = URL.createObjectURL(new Blob([markup], { type: 'image/svg+xml' }));
  Object.assign(document.createElement('a'), { href: url, download: 'donut.svg' }).click();
  URL.revokeObjectURL(url);
}
</script>

<template>
  <div class="controls">
    <label v-for="s in thisYear" :key="s.name" class="control">{{ s.name }} <input type="range" min="0" max="60" v-model.number="s.value"></label>
  </div>
  <div class="stage">
    <Donut ref="current" :slices="thisYear" label="This year" />
    <Donut :slices="LAST_YEAR" label="Last year" />
  </div>
  <button class="btn" type="button" @click="download">Download SVG</button>
</template>
