import React, { useEffect, useRef, useState } from 'react';

const WaveEffect = ({ isActive, onComplete, origin }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isActive && !isAnimating) {
      setIsAnimating(true);
      startWaveAnimation();
    }
  }, [isActive]);

  const startWaveAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Center point for circular wave origin (from logo or center of screen)
    const centerX = origin?.x || width / 2;
    const centerY = origin?.y || height / 2;

    // Google brand colors for the circular waves
    const waves = [
      {
        color: '#FBBC04', // Google Yellow
        delay: 0,
        lineWidth: 4,
        maxRadius: Math.max(width, height) * 1.5
      },
      {
        color: '#000000', // Black
        delay: 150,
        lineWidth: 4,
        maxRadius: Math.max(width, height) * 1.5
      },
      {
        color: '#4285F4', // Google Blue
        delay: 300,
        lineWidth: 4,
        maxRadius: Math.max(width, height) * 1.5
      },
      {
        color: '#5F6368', // Gray
        delay: 450,
        lineWidth: 4,
        maxRadius: Math.max(width, height) * 1.5
      },
      {
        color: '#34A853', // Google Green
        delay: 600,
        lineWidth: 4,
        maxRadius: Math.max(width, height) * 1.5
      }
    ];

    let startTime = null;
    const duration = 3000; // 3 seconds animation (slower)

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      ctx.clearRect(0, 0, width, height);

      let allComplete = true;

      waves.forEach((wave) => {
        const waveElapsed = Math.max(0, elapsed - wave.delay);
        const waveProgress = Math.min(waveElapsed / duration, 1);
        
        // Easing function for smooth animation
        const easedProgress = easeOutCubic(waveProgress);

        if (waveProgress < 1) {
          allComplete = false;
        }

        drawCircularWave(ctx, wave, centerX, centerY, easedProgress);
      });

      if (!allComplete && elapsed < duration + 500) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Animation complete
        setTimeout(() => {
          setIsAnimating(false);
          if (onComplete) onComplete();
        }, 300);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  const drawCircularWave = (ctx, wave, centerX, centerY, progress) => {
    ctx.save();
    ctx.strokeStyle = wave.color;
    ctx.lineWidth = wave.lineWidth;
    ctx.lineCap = 'round';
    
    // Calculate opacity - fade out as wave expands
    const opacity = 1 - (progress * 0.7); // Fade from 1 to 0.3
    ctx.globalAlpha = opacity;

    // Calculate current radius based on progress
    const currentRadius = wave.maxRadius * progress;

    // Draw circular wave
    ctx.beginPath();
    ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!isActive && !isAnimating) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  );
};

export default WaveEffect;
