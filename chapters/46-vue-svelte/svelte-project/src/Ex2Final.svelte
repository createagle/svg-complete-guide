<script>
  import BarLink from './BarLinkFinal.svelte';

  const days = [['Mon', 420], ['Tue', 510], ['Wed', 380], ['Thu', 610], ['Fri', 560]];
</script>

<svg class="bars" viewBox="0 0 300 180" role="group" aria-label="Visits per day">
  <line x1="10" x2="290" y1="160" y2="160" stroke="currentColor" stroke-opacity=".2" />
  {#each days as [day, n], i}
    <BarLink href="#{day.toLowerCase()}" label="{day}: {n} visits">
      <rect x={22 + i * 56} y={160 - n / 4.5} width="36" height={n / 4.5} rx="3" />
    </BarLink>
    <text x={40 + i * 56} y="175" text-anchor="middle">{day}</text>
  {/each}
</svg>
