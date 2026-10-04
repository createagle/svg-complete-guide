<script>
  let { href, label, children } = $props();
</script>

<!-- An SVG-only root element tells the compiler this markup belongs inside <svg> -->
<g><a {href} aria-label={label}>{@render children()}</a></g>
