import React from "react";
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
  return (
    <div className="researchGallery">
      {images.map((image) => (
        <figure className="researchFigure" key={image.label}>
          <img src={image.src} alt={image.alt} />
          <figcaption>{image.label}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default ResearchGallery;
