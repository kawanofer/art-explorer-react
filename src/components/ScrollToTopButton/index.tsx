import React, { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import * as S from "./styles";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <S.ScrollToTopContainer $isVisible={isVisible}>
      <S.StyledFab
        color="primary"
        aria-label="voltar ao topo"
        onClick={scrollToTop}
        size="small"
      >
        <KeyboardArrowUpIcon />
      </S.StyledFab>
    </S.ScrollToTopContainer>
  );
};

export default ScrollToTopButton;
