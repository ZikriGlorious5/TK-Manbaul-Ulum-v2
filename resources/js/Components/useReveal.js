import { useEffect } from 'react';

function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || 0;
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translate(0,0) scale(1)';
            }, delay * 100);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => {
      const type = el.dataset.reveal;
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = '0';
      if (type === 'up') el.style.transform = 'translateY(30px)';
      else if (type === 'left') el.style.transform = 'translateX(-30px)';
      else if (type === 'right') el.style.transform = 'translateX(30px)';
      else if (type === 'scale') el.style.transform = 'scale(0.9)';
      else el.style.transform = 'translateY(20px)';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export default useReveal;
