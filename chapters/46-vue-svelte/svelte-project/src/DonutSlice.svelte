<script>
  let { start, size, color, name, dim, onpointerenter } = $props();
</script>

<!-- The root is a <circle>, an SVG-only element, so the compiler creates it in the SVG namespace -->
<circle class="slice" class:dim role="img" cx="60" cy="60" r="44" pathLength="100" fill="none" stroke={color} stroke-width="16"
  style:stroke-dasharray="{Math.max(size - 0.8, 0)} {100 - size + 0.8}" style:stroke-dashoffset={-start} {onpointerenter}>
  <title>{name}: {Math.round(size)}%</title>
</circle>
