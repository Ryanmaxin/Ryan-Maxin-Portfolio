import React, { useRef, useState } from "react";
import codeImage from "./research-images/URA2.png";
import warningImage from "./research-images/URA.png";

const images = [
  {
    src: codeImage,
    label: "Scala source",
    alt: "Two Scala objects that refer to each other during initialization",
  },
  {
    src: warningImage,
    label: "Checker warning",
    alt: "Compiler warning showing the O1 to O2 to O1 initialization cycle",
  },
];

const ResearchGallery = () => {
  const dialogRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const openImage = (index) => {
    setSelectedImage(index);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <div className="researchGallery">
        {images.map((image, index) => (
          <figure className="researchFigure" key={image.label}>
            <button
              type="button"
              className="researchImageButton"
              onClick={() => openImage(index)}
              aria-label={`Enlarge ${image.label.toLowerCase()} image`}
            >
              <img src={image.src} alt={image.alt} />
            </button>
            <figcaption>{image.label}</figcaption>
          </figure>
        ))}
      </div>
      <dialog
        className="researchLightbox"
        ref={dialogRef}
        aria-label="Research image preview"
      >
        <button
          type="button"
          className="researchCloseButton"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close image preview"
        >
          &times;
        </button>
        <img src={images[selectedImage].src} alt={images[selectedImage].alt} />
        <p>{images[selectedImage].label}</p>
      </dialog>
    </>
  );
};

export default ResearchGallery;
