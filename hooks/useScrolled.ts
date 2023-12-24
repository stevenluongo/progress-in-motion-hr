import { useEffect, useState } from "react";

export const useScrolled = (): boolean => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 50);
    };

    if (window.scrollY > window.innerHeight - 50) setIsScrolled(true);

    const debouncedHandleScroll = debounce(handleScroll, 5);
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  return isScrolled;
};

// Debounce function implementation
function debounce<F extends (...args: any[]) => void>(
  func: F,
  wait: number,
  immediate: boolean = false
): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (...args: Parameters<F>) {
    // @ts-ignore
    const context: any = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    const callNow = immediate && !timeout;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
