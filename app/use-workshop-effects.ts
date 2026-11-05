'use client';

import { useEffect } from 'react';

export function useWorkshopEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const targets = document.querySelectorAll<HTMLElement>(
      '.section-heading, .service-card, .benefits article, .workshop-photo, .workshop-copy, .appointment-intro, .appointment form, .workshop-shot, .faq-intro, .faq-item, .contact-inner',
    );
    const cards = document.querySelectorAll<HTMLElement>('.service-card');
    const reset = (card: HTMLElement) => {
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
    };
    const tilt = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement;
      if (reducedMotion.matches || !finePointer.matches || event.pointerType !== 'mouse') return;
      const bounds = card.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
      card.style.setProperty('--tilt-x', `${(0.5 - y) * 4}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 4}deg`);
    };
    const leave = (event: PointerEvent) => reset(event.currentTarget as HTMLElement);
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!reducedMotion.matches) entry.target.classList.add('scroll-reveal');
        observer?.unobserve(entry.target);
      }
    }, { threshold: 0.08 }) : null;

    targets.forEach(target => observer?.observe(target));
    cards.forEach(card => {
      card.addEventListener('pointermove', tilt);
      card.addEventListener('pointerleave', leave);
      card.addEventListener('pointercancel', leave);
    });
    const resetMotion = () => {
      cards.forEach(reset);
      targets.forEach(target => target.classList.remove('scroll-reveal'));
    };
    reducedMotion.addEventListener('change', resetMotion);
    finePointer.addEventListener('change', resetMotion);
    return () => {
      observer?.disconnect();
      resetMotion();
      reducedMotion.removeEventListener('change', resetMotion);
      finePointer.removeEventListener('change', resetMotion);
      cards.forEach(card => {
        card.removeEventListener('pointermove', tilt);
        card.removeEventListener('pointerleave', leave);
        card.removeEventListener('pointercancel', leave);
      });
    };
  }, []);
}
