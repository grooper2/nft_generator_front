//*ImageGrid.js*//

import React from "react";
import { ReactComponent as DeleteIcon } from "../../Assets/Icons/delete.svg";
// Rendering individual images
const Image = ({ image, removeImage }) => {

  return (
    <div className="file-item">
      <DeleteIcon className="delete-file-icon" onClick={() => removeImage(image.id)}/>
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

const ImageGride = ({ images, setImages }) => {

  const removeImage = (id) => {
    return setImages(images.filter(item => item.id !== id))
  }

  const renderImage = (image, index) => {
    return <Image removeImage={removeImage} image={image} key={`${image.id}-image`} />;
  };

  return <section className="file-list">{images.map(renderImage)}</section>;
};

export default ImageGride;
