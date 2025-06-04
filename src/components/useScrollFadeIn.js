import { useRef, useEffect, useState } from "react";

const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const dom = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(dom.current);
        }
      },
      { threshold: 0.3 }
    );

    if (dom.current) observer.observe(dom.current);
    return () => observer && observer.disconnect();
  }, []);

  const getDirection = (dir) => {
    switch (dir) {
      case "up":
        return "translate3d(0, 20px, 0)";
      case "down":
        return "translate3d(0, -20px, 0)";
      case "left":
        return "translate3d(20px, 0, 0)";
      case "right":
        return "translate3d(-20px, 0, 0)";
      default:
        return "translate3d(0, 20px, 0)";
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0)" : getDirection(direction),
    transition: `all ${duration}s ease ${delay}s`,
  };

  return {
    ref: dom,
    style,
  };
};

export default useScrollFadeIn;
