import { useState, useEffect, useRef } from 'react';

/**
 * Returns [ref, isVisible]. Attach ref to an element; isVisible becomes true
 * when the element enters the viewport (with optional rootMargin).
 */
export default function useInView(options = {}) {
  const { rootMargin = '0px 0px -60px 0px', threshold = 0 } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { rootMargin, threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, isVisible];
}
