<script setup>
import Avatar from './Avatar.vue';

const people = [
  { name: 'Ada Lovelace', from: '#2563eb', to: '#06b6d4' },
  { name: 'Grace Hopper', from: '#7c3aed', to: '#ec4899' },
  { name: 'Alan Turing', from: '#ea580c', to: '#facc15' },
];
</script>

<template>
  <div class="stage">
    <Avatar v-for="p in people" :key="p.name" v-bind="p" />
  </div>
</template>
