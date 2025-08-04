import React, { useState } from "react";
import { wrap, AnimatePresence } from "motion/react";

import { IconButton, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import AnimatedImage from "./AnimatedImage";

interface ImageCarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goToImage = (newDirection: 1 | -1) => {
    const nextIndex = wrap(0, images.length, currentImageIndex + newDirection);
    setCurrentImageIndex(nextIndex);
    setDirection(newDirection);
  };

  const currentImage = images[currentImageIndex];

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    (e.target as HTMLImageElement).src =
      "https://via.placeholder.com/320x320?text=No+Image";
  };

  return (
    <Box
      flexShrink={0}
      position="relative"
      sx={{
        width: { xs: "100%", md: "320px" },
        height: { xs: "auto", md: "320px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <AnimatedImage
          key={currentImageIndex}
          src={currentImage}
          alt={title || "Artwork image"}
          onError={handleImageError}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <IconButton
            aria-label="previous image"
            onClick={() => goToImage(-1)}
            sx={{
              position: "absolute",
              left: 8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <ArrowBackIosIcon />
          </IconButton>
          <IconButton
            aria-label="next image"
            onClick={() => goToImage(1)}
            sx={{
              position: "absolute",
              right: 8,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
              backgroundColor: "rgba(255,255,255,0.7)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.9)",
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default ImageCarousel;
