'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  let hideTimeout: NodeJS.Timeout;

  useEffect(() => {
    try {
      audioRef.current = new Audio('/background-music.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
      console.log('Audio initialized');
    } catch (error) {
      console.error('Error initializing audio:', error);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error playing audio:', error);
    }
  };

  const handleMouseMove = () => {
    setIsVisible(true);
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => setIsVisible(false), 2000);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <motion.button
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-hover/20"
      onClick={togglePlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isPlaying ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 4h4v16H6zm8 0h4v16h-4z"/>
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      )}
    </motion.button>
  );
} 