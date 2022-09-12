import React, { useState, useEffect } from "react";
import { Link } from '@reach/router'

import Layout from "../../Layout/layout";
import "./AssetsPage.scss";

import Button from "../../components/Buttons";
import NftCard from "../../components/NftCard";
import OfferModal from "../../components/Offer_Modal";
import FileUploadModal from "../../components/File_Upload_Modal";

import { ReactComponent as BackArrow } from "../../Assets/Icons/back_arrow.svg";

export default function AssetsPage() {
  const [isToggled, toggleOffer] = useState(false);
  const [isOpen, toggleUploadModal] = useState(false);
  const [assetsList, setAssetsList] = useState([]);
  const [assetType, setAssetType] = useState("Backgrounds");

  const AssetTypes = [
    { name: "Backgrounds" },
    { name: "Base Torsos" },
    { name: "Base Head" },
    { name: "Torsos" },
    { name: "Arms" },
    { name: "Mouths" },
    { name: "Eyes" },
    { name: "Accessories" },
    { name: "Noses" },
  ];

  const nfts = [
    { type: "Backgrounds" },
    { type: "Backgrounds" },
    { type: "Backgrounds" },
    { type: "Torsos" },
    { type: "Arms" },
    { type: "Arms" },
    { type: "Backgrounds" },
    { type: "Backgrounds" },
    { type: "Backgrounds" },
    { type: "Backgrounds" },
    { type: "Backgrounds" },
    { type: "Backgrounds" },
    { type: "Backgrounds" },
  ];

  useEffect(() => {
    const results = nfts.filter((item) => item.type === "Backgrounds");
    setAssetsList(results);
  }, []);

  const renderAssetType = (name) => {
    const results = nfts.filter((item) => item.type === name);
    setAssetsList(results);
    setAssetType(name);
  };

  return (
    <Layout activeItem={"activeItem1"}>
      <div className="pageHeader">
        <div className="pageTitle">
          <div className="titleSection">
            <div className="navigator">
              <BackArrow />
              <Link to="/current_project"> Back to generated NFT's</Link>
            </div>
            <h2>Cyber Chef's</h2>
            <h4>Total Assets: 300</h4>
          </div>
        </div>
        <div className="pageButtons">
          <Button type="button" onClick={() => toggleOffer(true)}>
            Generate NFT's
          </Button>
        </div>
      </div>
      <hr />
      <div className="assetTypes-layout">
        <div className="assetTypes">
          {AssetTypes.map((item) => (
            <p onClick={() => renderAssetType(item.name)}>{item.name}</p>
          ))}
          <Button type="button" onClick={() => toggleUploadModal(true)}>
            Upload {assetType}
          </Button>
        </div>
        <div className="assetTypes-list">
          {assetsList.map((item) => (
            <NftCard nfts={item} />
          ))}
        </div>
      </div>
      <OfferModal onClose={() => toggleOffer(false)} show={isToggled} />
      <FileUploadModal
        onClose={() => toggleUploadModal(false)}
        show={isOpen}
        assetsList={assetsList}
        assetType={assetType}
      />
    </Layout>
  );
}
