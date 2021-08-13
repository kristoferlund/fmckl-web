import React, { useState } from "react";
import Lightbox from "react-spring-lightbox";
import Image from "next/image";

const images = [
  {
    src: "/images/shiro-web.jpg",
    loading: "lazy",
  },
  {
    src: "/images/tecommons.jpg",
    loading: "lazy",
  },
  {
    src: "/images/Food_Shift_Functions_lores.jpg",
    loading: "lazy",
  },
  {
    src: "/images/odla.jpg",
    loading: "lazy",
  },
  {
    src: "/images/shiro-uml.jpg",
    loading: "lazy",
  },
  {
    src: "/images/tweex.jpg",
    loading: "lazy",
  },
  {
    src: "/images/livsmedel-mojligheter-utmaningar.jpg",
    loading: "lazy",
  },
  {
    src: "/images/finkop.jpg",
    loading: "lazy",
  },
  {
    src: "/images/Domain-community-practice.jpg",
    loading: "lazy",
  },
  {
    src: "/images/agfo-karta.jpg",
    loading: "lazy",
  },
  {
    src: "/images/Food_Shift_Ecosystem_lores.jpg",
    loading: "lazy",
  },
  {
    src: "/images/landet3.jpg",
    loading: "lazy",
  },
  {
    src: "/images/sah.jpg",
    loading: "lazy",
  },
  {
    src: "/images/bunbun1.jpg",
    loading: "lazy",
  },
  {
    src: "/images/landet1.jpg",
    loading: "lazy",
  },
  {
    src: "/images/lantmannen.jpg",
    loading: "lazy",
  },
  {
    src: "/images/elefanten2.jpg",
    loading: "lazy",
  },
  {
    src: "/images/gatmat.jpg",
    loading: "lazy",
  },
  {
    src: "/images/nb1.jpg",
    loading: "lazy",
  },
  {
    src: "/images/ffe3.jpg",
    loading: "lazy",
  },
  {
    src: "/images/ffe2.jpg",
    loading: "lazy",
  },
  {
    src: "/images/landet2.jpg",
    loading: "lazy",
  },
  {
    src: "/images/elefanten1.jpg",
    loading: "lazy",
  },
  {
    src: "/images/ffe1.jpg",
    loading: "lazy",
  },
  {
    src: "/images/nb3.jpg",
    loading: "lazy",
  },
  {
    src: "/images/nb2.jpg",
    loading: "lazy",
  },
  {
    src: "/images/bunbun3.jpg",
    loading: "lazy",
  },
  {
    src: "/images/bunbun2.jpg",
    loading: "lazy",
  },
];

const FMCKLLightbox = () => {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleGalleryClick = (i) => {
    setCurrentIndex(i);
    setIsOpen(true);
  };

  return (
    <>
      <div class="w-full">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            className="pb-8 pl-8 w-52 inline-table flex-nowrap drop-shadow hover:opacity-70"
            onClick={() => {
              handleGalleryClick(i);
            }}
          />
        ))}
      </div>

      <Lightbox
        isOpen={isOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        /* Add your own UI */
        // renderHeader={() => (<CustomHeader />)}
        // renderFooter={() => (<CustomFooter />)}
        // renderPrevButton={() => <CustomLeftArrowButton />}
        // renderNextButton={() => (<CustomRightArrowButton />)}
        // renderImageOverlay={() => (<ImageOverlayComponent >)}

        /* Add styling */
        className="drop-shadow-lg"
        // style={{ background: "grey" }}

        /* Handle closing */
        onClose={handleClose}

        /* Use single or double click to zoom */
        // singleClickToZoom

        /* react-spring config for open/close animation */
        // pageTransitionConfig={{
        //   from: { transform: "scale(0.75)", opacity: 0 },
        //   enter: { transform: "scale(1)", opacity: 1 },
        //   leave: { transform: "scale(0.75)", opacity: 0 },
        //   config: { mass: 1, tension: 320, friction: 32 }
        // }}
      />
    </>
  );
};

export default FMCKLLightbox;
