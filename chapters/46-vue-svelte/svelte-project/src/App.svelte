<script>
  import Donut from './Donut.svelte';
  import { LAST_YEAR, THIS_YEAR } from './data.js';

  let thisYear = $state(THIS_YEAR.map((s) => ({ ...s })));
  let current = $state();

  function download() {
    const markup = new XMLSerializer().serializeToString(current);
    const url = URL.createObjectURL(new Blob([markup], { type: 'image/svg+xml' }));
    Object.assign(document.createElement('a'), { href: url, download: 'donut.svg' }).click();
    URL.revokeObjectURL(url);
  }
</script>

<div class="controls">
  {#each thisYear as s (s.name)}
    <label class="control">{s.name} <input type="range" min="0" max="60" bind:value={s.value}></label>
  {/each}
</div>
<div class="stage">
  <Donut bind:svg={current} slices={thisYear} label="This year" />
  <Donut slices={LAST_YEAR} label="Last year" />
</div>
<button class="btn" type="button" onclick={download}>Download SVG</button>
