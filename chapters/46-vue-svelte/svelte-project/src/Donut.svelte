<script>
  import DonutSlice from './DonutSlice.svelte';
  import { COLORS } from './data.js';

  // `svg` is bindable, so the parent can write bind:svg={…} and receive the element
  let { slices, label, svg = $bindable() } = $props();
  // One id per instance (Svelte 5.20+), so two donuts on a page never share a gradient
  const uid = $props.id();
  let hovered = $state(null);

  const parts = $derived.by(() => {
    const total = slices.reduce((t, s) => t + s.value, 0) || 1;
    let start = 0;
    return slices.map((s) => {
      const size = (s.value * 100) / total;
      const part = { ...s, start, size };
      start += size;
      return part;
    });
  });
</script>

<figure class="donut">
  <svg bind:this={svg} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 120 120" role="img" aria-label={label}>
    <defs>
      <radialGradient id="{uid}-glow">
        <stop offset="0" stop-color="#94a3b8" stop-opacity="0.25" />
        <stop offset="1" stop-color="#94a3b8" stop-opacity="0" />
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="36" fill="url(#{uid}-glow)" />
    <g transform="rotate(-90 60 60)" role="presentation" onpointerleave={() => (hovered = null)}>
      {#each parts as p, i (p.name)}
        <!-- Events are plain props in Svelte 5: the slice passes onpointerenter to its <circle> -->
        <DonutSlice {...p} color={COLORS[p.name]} dim={hovered !== null && hovered !== i} onpointerenter={() => (hovered = i)} />
      {/each}
    </g>
    <text class="center-name" x="60" y="54" text-anchor="middle">{hovered === null ? label : parts[hovered].name}</text>
    <text class="center-value" x="60" y="72" text-anchor="middle">{hovered === null ? '100%' : Math.round(parts[hovered].size) + '%'}</text>
  </svg>
  <figcaption><code>{uid}-glow</code></figcaption>
</figure>
