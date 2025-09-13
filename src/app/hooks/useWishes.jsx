"use client";
import { useState, useEffect, useCallback } from "react";

// Wishes Hook
const useWishes = () => {
  const [wishes, setWishes] = useState([]);
  const [currentWishIndex, setCurrentWishIndex] = useState(0);
  const carouselInterval = useRef(null);

  const escapeHtml = useCallback((text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }, []);

  const loadWishesFromServer = useCallback(async () => {
    try {
      const response = await fetch('https://zacify.djunehor.workers.dev/wishes', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const result = await response.json();
      if (result.success && result.wishes) {
        setWishes(result.wishes);
      }
    } catch (error) {
      console.error('Error loading wishes from server:', error);
    }
  }, []);

  const submitWish = useCallback(async (wishData) => {
    const newWish = {
      ...wishData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };

    try {
      const response = await fetch('https://zacify.djunehor.workers.dev/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newWish)
      });

      if (response.ok) {
        const result = await response.json();
        newWish.id = result.wishId || newWish.id;
      }

      setWishes(prev => [newWish, ...prev]);
      return { success: true };
    } catch (error) {
      console.error('Error submitting wish:', error);
      setWishes(prev => [newWish, ...prev]);
      return { success: false, error };
    }
  }, []);

  const startCarousel = useCallback(() => {
    if (carouselInterval.current) clearInterval(carouselInterval.current);
    
    carouselInterval.current = setInterval(() => {
      setCurrentWishIndex(prev => (prev + 1) % wishes.length);
    }, 6000);
  }, [wishes.length]);

  const stopCarousel = useCallback(() => {
    if (carouselInterval.current) {
      clearInterval(carouselInterval.current);
      carouselInterval.current = null;
    }
  }, []);

  useEffect(() => {
    loadWishesFromServer();
    const refreshInterval = setInterval(loadWishesFromServer, 30000);
    return () => clearInterval(refreshInterval);
  }, [loadWishesFromServer]);

  useEffect(() => {
    if (wishes.length > 0) {
      startCarousel();
      return stopCarousel;
    }
  }, [wishes.length, startCarousel, stopCarousel]);

  return {
    wishes,
    currentWishIndex,
    submitWish,
    escapeHtml,
    startCarousel,
    stopCarousel
  };
};