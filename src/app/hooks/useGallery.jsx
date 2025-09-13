
"use client";
import { useState, useRef, useEffect, useCallback } from "react";

// Gallery Hook
const useGallery = (slides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoSlideRef = useRef(null);

  const startAutoSlide = useCallback(() => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
  }, [slides.length]);

  const stopAutoSlide = useCallback(() => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide, stopAutoSlide]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    stopAutoSlide();
    startAutoSlide();
  }, [startAutoSlide, stopAutoSlide]);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
    stopAutoSlide();
    startAutoSlide();
  }, [slides.length, startAutoSlide, stopAutoSlide]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    stopAutoSlide();
    startAutoSlide();
  }, [slides.length, startAutoSlide, stopAutoSlide]);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    startAutoSlide,
    stopAutoSlide
  };
};

export default useGallery;