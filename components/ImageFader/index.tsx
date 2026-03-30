'use client';
import Image from 'next/image';
import type { ForwardRefRenderFunction, HTMLAttributes } from 'react';
import React, { useEffect, useState } from 'react';

interface ImageFaderProps extends HTMLAttributes<HTMLDivElement> {
  backgroundImages: string[];
  rotationSpeed?: number;
  gradient?: string;
}

const DEFAULT_ROTATION_SPEED = 6000;

const ImageFader: ForwardRefRenderFunction<HTMLDivElement, ImageFaderProps> = (
  {
    backgroundImages,
    rotationSpeed = DEFAULT_ROTATION_SPEED,
    gradient = 'linear-gradient(180deg, rgba(31, 31, 31, 0.70) 0%, rgba(18, 18, 18, 1) 90%)',
    ...props
  },
  ref
) => {
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((ai) => (ai + 1) % backgroundImages.length),
      rotationSpeed
    );
    return () => {
      clearInterval(interval);
    };
  }, [backgroundImages, rotationSpeed]);

  return (
    <div ref={ref}>
      {backgroundImages.map((imageUrl, i) => (
        <div
          key={`banner-image-${i}`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in ${
            i === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        >
          <Image
            className="object-cover"
            alt=""
            src={imageUrl}
            fill
            sizes="100vw"
            unoptimized
          />
          <div
            className={`absolute inset-0`}
            style={{ backgroundImage: gradient }}
          />
        </div>
      ))}
    </div>
  );
};

export default React.forwardRef<HTMLDivElement, ImageFaderProps>(ImageFader);
