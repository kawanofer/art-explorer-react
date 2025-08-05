import React, { forwardRef } from 'react';

import { motion, usePresenceData } from 'motion/react';

import * as S from './styles';

interface AnimatedImageProps {
  src: string;
  alt: string;
  onError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const AnimatedImage = forwardRef<HTMLImageElement, AnimatedImageProps>(
  function AnimatedImage({ src, alt, onError }, ref) {
    const direction = usePresenceData();

    return (
      <motion.img
        ref={ref}
        src={src}
        alt={alt}
        onError={onError}
        initial={{ opacity: 0, x: direction * 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.2,
            type: 'spring',
            visualDuration: 0.3,
            bounce: 0.4,
          },
        }}
        exit={{ opacity: 0, x: direction * -50 }}
        className={S.AnimatedImageDiv}
      />
    );
  }
);

export default AnimatedImage;
