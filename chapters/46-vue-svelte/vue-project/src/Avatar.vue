<script setup>
const props = defineProps({ name: String, from: String, to: String });
const initials = props.name.split(' ').map((w) => w[0]).join('');
// Every avatar writes the same id, so url(#avatar-bg) always finds the first one in the page
const id = 'avatar-bg';
</script>

<template>
  <svg width="72" height="72" viewBox="0 0 72 72" role="img" :aria-label="name">
    <defs>
      <linearGradient :id="id" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" :stop-color="from" />
        <stop offset="1" :stop-color="to" />
      </linearGradient>
    </defs>
    <circle cx="36" cy="36" r="36" :fill="`url(#${id})`" />
    <text x="36" y="36" text-anchor="middle" dominant-baseline="central" fill="#fff" font-size="24" font-weight="700">{{ initials }}</text>
  </svg>
</template>
