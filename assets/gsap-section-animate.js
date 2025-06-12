// Animación GSAP para secciones al hacer scroll
// Requiere GSAP y ScrollTrigger cargados en el HTML

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.section-animate').forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 80, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play reverse play reverse',
        // markers: true // descomenta para debug
      }
    }
  );
});
