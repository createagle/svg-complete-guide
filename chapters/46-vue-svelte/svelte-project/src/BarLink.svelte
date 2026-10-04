<script>
  let { href, label, children } = $props();
</script>

<!-- Only an <a> at the root: the compiler cannot tell it is meant for SVG and creates an HTML <a> -->
<a {href} aria-label={label}>{@render children()}</a>
