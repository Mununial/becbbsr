import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If a hash exists in the URL, try to scroll to the corresponding element
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        // Delay slightly to allow the DOM/Tab layout to render fully
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return () => clearTimeout(timer);
      }
    }
    // Otherwise, reset scroll to the top of the page
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
