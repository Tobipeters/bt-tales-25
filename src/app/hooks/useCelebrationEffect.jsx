"use client";
import { useEffect, useRef, useCallback } from "react";

// Celebration Effects Hook
const useCelebrationEffects = (containerRef) => {
  const intervals = useRef([]);
  const timeouts = useRef([]);

  const cleanup = useCallback(() => {
    intervals.current.forEach((id) => clearInterval(id));
    timeouts.current.forEach((id) => clearTimeout(id));
    intervals.current = [];
    timeouts.current = [];
  }, []);

  const addInterval = useCallback((id) => {
    intervals.current.push(id);
  }, []);

  const addTimeout = useCallback((id) => {
    timeouts.current.push(id);
  }, []);

  const createFallingPetals = useCallback(() => {
    const petals = ["🌸", "🌺", "🌹", "💮", "🏵️", "🌻"];

    const id = setInterval(() => {
      if (!containerRef.current) return;

      const petal = document.createElement("div");
      petal.className = "petal";
      petal.textContent = petals[Math.floor(Math.random() * petals.length)];
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = Math.random() * 3 + 4 + "s";
      petal.style.animationDelay = Math.random() * 2 + "s";

      containerRef.current.appendChild(petal);

      const timeoutId = setTimeout(() => {
        if (petal.parentNode) {
          petal.parentNode.removeChild(petal);
        }
      }, 8000);
      addTimeout(timeoutId);
    }, 800);

    addInterval(id);
  }, [containerRef, addInterval, addTimeout]);

  const createFloatingHearts = useCallback(() => {
    const hearts = ["💕", "💖", "💗", "💘", "💝", "💞"];

    const id = setInterval(() => {
      if (!containerRef.current) return;

      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 4 + 6 + "s";
      heart.style.animationDelay = Math.random() * 3 + "s";

      containerRef.current.appendChild(heart);

      const timeoutId = setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 12000);
      addTimeout(timeoutId);
    }, 1500);

    addInterval(id);
  }, [containerRef, addInterval, addTimeout]);

  const createGoldenCascadeExplosion = useCallback(
    (x, y) => {
      if (!containerRef.current) return;

      const maxX = window.innerWidth - 50;
      const maxY = window.innerHeight - 50;
      x = Math.max(25, Math.min(x, maxX));
      y = Math.max(25, Math.min(y, maxY));

      const explosion = document.createElement("div");
      explosion.className = "golden-explosion";
      explosion.style.left = x - 25 + "px";
      explosion.style.top = y - 25 + "px";
      explosion.style.width = "50px";
      explosion.style.height = "50px";
      containerRef.current.appendChild(explosion);

      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 60 : 120;
      const maxSpread = isMobile ? 60 : 80;

      for (let i = 0; i < particleCount; i++) {
        const timeoutId = setTimeout(() => {
          if (!containerRef.current) return;

          const spark = document.createElement("div");
          spark.className = "golden-cascade";

          const angle = Math.random() * Math.PI * 2;
          const initialDistance = Math.random() * maxSpread;
          const sparkX = Math.max(
            0,
            Math.min(
              x + Math.cos(angle) * initialDistance,
              window.innerWidth - 5
            )
          );
          const sparkY = Math.max(
            0,
            Math.min(
              y + Math.sin(angle) * initialDistance,
              window.innerHeight - 5
            )
          );

          spark.style.left = sparkX + "px";
          spark.style.top = sparkY + "px";
          spark.style.animationDuration = Math.random() * 2 + 2 + "s";
          spark.style.animationDelay = Math.random() * 0.3 + "s";

          containerRef.current.appendChild(spark);

          const sparkTimeoutId = setTimeout(() => {
            if (spark.parentNode) {
              spark.parentNode.removeChild(spark);
            }
          }, 4000);
          addTimeout(sparkTimeoutId);
        }, i * (isMobile ? 40 : 20));
        addTimeout(timeoutId);
      }

      const explosionTimeoutId = setTimeout(() => {
        if (explosion.parentNode) {
          explosion.parentNode.removeChild(explosion);
        }
      }, 3000);
      addTimeout(explosionTimeoutId);
    },
    [containerRef, addTimeout]
  );

  const createClickBurst = useCallback(
    (x, y) => {
      if (!containerRef.current) return;

      const burstElements = ["💖", "✨", "🌸", "💕", "⭐"];

      for (let i = 0; i < 6; i++) {
        const element = document.createElement("div");
        element.className = "celebration-burst";
        element.textContent =
          burstElements[Math.floor(Math.random() * burstElements.length)];
        element.style.left = x + "px";
        element.style.top = y + "px";
        element.style.fontSize = Math.random() * 20 + 15 + "px";

        const angle = (Math.PI * 2 * i) / 6;
        const distance = Math.random() * 50 + 30;
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

        containerRef.current.appendChild(element);

        const timeoutId = setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 1000);
        addTimeout(timeoutId);
      }
    },
    [containerRef, addTimeout]
  );

  const initEffects = useCallback(() => {
    cleanup();
    createFallingPetals();
    createFloatingHearts();

    // Add click effects
    const handleClick = (e) => {
      createClickBurst(e.clientX, e.clientY);

      if (Math.random() < 0.15) {
        const timeoutId = setTimeout(() => {
          createGoldenCascadeExplosion(e.clientX, e.clientY);
        }, 500);
        addTimeout(timeoutId);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      cleanup();
    };
  }, [
    cleanup,
    createFallingPetals,
    createFloatingHearts,
    createClickBurst,
    createGoldenCascadeExplosion,
    addTimeout,
  ]);

  useEffect(() => {
    if (containerRef.current) {
      const cleanupFn = initEffects();
      return cleanupFn;
    }
  }, [initEffects]);

  return { createGoldenCascadeExplosion, createClickBurst };
};

export default useCelebrationEffects;
