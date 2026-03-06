<script>
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in, .fade-in-stagger").forEach(function (el) {
    observer.observe(el);
  });
});
</script>
