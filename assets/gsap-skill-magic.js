// Animaciones GSAP mágicas e impactantes para las skill-card
// Requiere GSAP y ScrollTrigger cargados en el HTML

gsap.utils.toArray('.skill-card').forEach((card, i) => {
  // Animación de entrada: rebote, giro y glow
  gsap.fromTo(card,
    { opacity: 0, y: 80, scale: 0.7, rotateY: 90 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      filter: 'drop-shadow(0 0 32px #38bdf8)',
      duration: 1.2,
      delay: 0.2 + i * 0.08,
      ease: 'elastic.out(1, 0.6)',
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      }
    }
  );

  // Animación mágica al pasar el mouse
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {
      scale: 1.15,
      rotate: gsap.utils.random(-8, 8),
      boxShadow: '0 0 40px 10px #38bdf8, 0 0 80px 20px #0ea5e9',
      filter: 'drop-shadow(0 0 64px #38bdf8) brightness(1.2) saturate(1.5)',
      background: 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)',
      color: '#fff',
      duration: 0.5,
      ease: 'expo.out',
    });
    // Efecto de partículas mágicas
    for(let j=0;j<8;j++){
      const particle = document.createElement('span');
      particle.className = 'magic-particle';
      Object.assign(particle.style, {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #38bdf8 0%, #0ea5e9 80%, transparent 100%)',
        pointerEvents: 'none',
        zIndex: 20,
        opacity: 0.8,
        transform: 'translate(-50%, -50%)',
      });
      card.appendChild(particle);
      gsap.to(particle, {
        x: gsap.utils.random(-40, 40),
        y: gsap.utils.random(-40, 40),
        scale: gsap.utils.random(0.7, 1.7),
        opacity: 0,
        duration: gsap.utils.random(0.7, 1.2),
        ease: 'power2.out',
        onComplete: () => particle.remove()
      });
    }
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      scale: 1,
      rotate: 0,
      boxShadow: 'none',
      filter: 'none',
      background: '',
      color: '',
      duration: 0.5,
      ease: 'expo.inOut',
    });
  });
});
