// Navbar Slide-in
gsap.to(".navbar", {
  duration: 1,
  y: 0,
  opacity: 1,
  ease: "power4.out",
  delay: 0.2,
});

// Button Hover Pulse
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: "power1.inOut",
    });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: "power1.inOut",
    });
  });
});

// Scroll-triggered fade-ins
gsap.utils.toArray(".section").forEach((section) => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
  });
});
