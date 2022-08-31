import React, {useCallback, useState} from "react";
import cuid from "cuid"
import "./File_Upload_Modal.scss";

import Dropzone from "../Inputs/Dropzone.js";
import AssetCard from "../AssetCard";
import ImageGrid from "../ImageGrid/imageGrid";

export default function FileUploadModal(props) {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  if (!props.show) {
    return null;
  }

  return (
    <div className="modal-uploadFile" onClick={props.onClose}>
      <div
        className="modal-uploadFile-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-uploadFile-header">
          <h3 className="modal-uploadFile-title">Upload {props.assetType}</h3>
        </div>
        <div className="modal-uploadFile-body">
          <div className="dropContainer">
            <h3>Upload your {props.assetType} here</h3>
            <Dropzone onDrop={onDrop} accept={"image/*"} />
          </div>
          <div className="newlyUploaded">
            <h3>Newly Uploaded files</h3>
            <ImageGrid images={images} setImages={setImages} />
          </div>
          <div className="previouslyUploaded">
            <h3>Previously Uploaded files</h3>
            <div className="previousAssetsContainer">
              {props.assetsList.map((item) => (
                <AssetCard />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
