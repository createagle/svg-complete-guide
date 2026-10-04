<script setup>
defineProps({ start: Number, size: Number, color: String, name: String, dim: Boolean });
</script>

<template>
  <!-- The root is a <circle>: Vue creates it in the SVG namespace because its parent is an <svg> -->
  <circle class="slice" :class="{ dim }" role="img" cx="60" cy="60" r="44" pathLength="100" fill="none" :stroke="color" stroke-width="16"
    :style="{ strokeDasharray: `${Math.max(size - 0.8, 0)} ${100 - size + 0.8}`, strokeDashoffset: -start }">
    <title>{{ name }}: {{ Math.round(size) }}%</title>
  </circle>
</template>
