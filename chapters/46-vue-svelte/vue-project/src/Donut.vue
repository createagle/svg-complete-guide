<script setup>
import { computed, ref, useId, useTemplateRef } from 'vue';
import DonutSlice from './DonutSlice.vue';
import { COLORS } from './data.js';

const props = defineProps({ slices: Array, label: String });
// One id per instance (Vue 3.5+), so two donuts on a page never share a gradient
const uid = useId();
const svg = useTemplateRef('svg');
const hovered = ref(null);

const parts = computed(() => {
  const total = props.slices.reduce((t, s) => t + s.value, 0) || 1;
  let start = 0;
  return props.slices.map((s) => {
    const size = (s.value * 100) / total;
    const part = { ...s, start, size };
    start += size;
    return part;
  });
});

// The parent reaches the <svg> through the component ref
defineExpose({ svg });
</script>

<template>
  <figure class="donut">
    <svg ref="svg" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 120 120" role="img" :aria-label="label">
      <defs>
        <radialGradient :id="`${uid}-glow`">
          <stop offset="0" stop-color="#94a3b8" stop-opacity="0.25" />
          <stop offset="1" stop-color="#94a3b8" stop-opacity="0" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="36" :fill="`url(#${uid}-glow)`" />
      <g transform="rotate(-90 60 60)" @pointerleave="hovered = null">
        <!-- @pointerenter falls through to the slice's root <circle> -->
        <DonutSlice v-for="(p, i) in parts" :key="p.name" v-bind="p" :color="COLORS[p.name]"
          :dim="hovered !== null && hovered !== i" @pointerenter="hovered = i" />
      </g>
      <text class="center-name" x="60" y="54" text-anchor="middle">{{ hovered === null ? label : parts[hovered].name }}</text>
      <text class="center-value" x="60" y="72" text-anchor="middle">{{ hovered === null ? '100%' : Math.round(parts[hovered].size) + '%' }}</text>
    </svg>
    <figcaption><code>{{ uid }}-glow</code></figcaption>
  </figure>
</template>
