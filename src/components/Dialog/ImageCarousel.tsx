import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { IconButton, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { wrap } from "motion/react";

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
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: "400px" },
        height: { xs: "250px", sm: "300px", md: "400px" }, // Altura definida para mobile
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        mb: { xs: 2, md: 0 },
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
              left: { xs: 4, md: 8 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(4px)",
              width: { xs: 36, md: 40 },
              height: { xs: 36, md: 40 },
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.95)",
              },
            }}
          >
            <ArrowBackIosIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
          </IconButton>

          <IconButton
            aria-label="next image"
            onClick={() => goToImage(1)}
            sx={{
              position: "absolute",
              right: { xs: 4, md: 8 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              backgroundColor: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(4px)",
              width: { xs: 36, md: 40 },
              height: { xs: 36, md: 40 },
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.95)",
              },
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: { xs: 16, md: 20 } }} />
          </IconButton>
        </>
      )}

      {/* Indicadores de página para mobile */}
      {images.length > 1 && (
        <Box
          sx={{
            position: "absolute",
            bottom: 8,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            zIndex: 10,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  index === currentImageIndex
                    ? "white"
                    : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ImageCarousel;
