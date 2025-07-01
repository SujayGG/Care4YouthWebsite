import React, { useState, useEffect, useRef } from 'react';
import { Box, Skeleton } from '@mui/material';

const OptimizedImage = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  aspectRatio,
  placeholder = 'https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Loading...',
  className,
  style,
  onClick,
  priority = false,
  sizes = '100vw',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (priority) {
      loadImage();
    } else {
      // Lazy loading with Intersection Observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.01
        }
      );

      if (imgRef.current) {
        observerRef.current.observe(imgRef.current);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, priority]);

  const loadImage = () => {
    if (!src || imageError) return;

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setImageLoaded(true);
    };
    img.onerror = () => {
      setImageError(true);
      setImageLoaded(true);
    };
    img.src = src;
  };

  const handleImageClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const containerStyle = {
    position: 'relative',
    width,
    height: aspectRatio ? 'auto' : height,
    overflow: 'hidden',
    borderRadius: style?.borderRadius || 0,
    cursor: onClick ? 'pointer' : 'default',
    ...style
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: aspectRatio ? 'cover' : 'contain',
    transition: 'opacity 0.3s ease-in-out',
    opacity: imageLoaded ? 1 : 0,
    ...(aspectRatio && {
      aspectRatio: aspectRatio
    })
  };

  return (
    <Box
      ref={imgRef}
      sx={containerStyle}
      className={className}
      onClick={handleImageClick}
    >
      {/* Skeleton loader */}
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            ...(aspectRatio && {
              aspectRatio: aspectRatio
            })
          }}
        />
      )}

      {/* Low-quality placeholder */}
      {!imageLoaded && placeholder && (
        <img
          src={placeholder}
          alt=""
          style={{
            ...imageStyle,
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
        />
      )}

      {/* Main image */}
      <img
        src={imageSrc}
        alt={alt}
        style={imageStyle}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        {...props}
      />

      {/* Error fallback */}
      {imageError && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            color: '#6b7280',
            fontSize: '14px',
            textAlign: 'center',
            padding: 2
          }}
        >
          Image not available
        </Box>
      )}
    </Box>
  );
};

export default OptimizedImage; 