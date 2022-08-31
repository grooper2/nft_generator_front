import React, { useState } from "react";

import Layout from "../../Layout/layout";
import "./CurrentProjectPage.scss";

import Button from "../../components/Buttons";
import NftCard from "../../components/NftCard";
import ExpandModal from "../../components/Expand_Modal";
import OfferModal from "../../components/Offer_Modal";

import {ReactComponent as BackArrow} from "../../Assets/Icons/back_arrow.svg"

export default function CurrentProjectPage() {
  const [isOpen, setToggle] = useState(false);
  const [isToggled, toggleOffer] = useState(false);
  const nfts = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <Layout activeItem={"activeItem1"}>
      <div className="pageHeader">
        <div className="pageTitle">
          <div className="titleSection">
            <div className="navigator">
              <BackArrow />
              <a href="">Projects Page</a>
            </div>
            <h2>Cyber Chef's</h2>
            <h4>Generated NFT's: 300</h4>
          </div>
        </div>
        <div className="pageButtons">
          <Button type="button" onClick={() => ''}>View Assets</Button>
          <Button type="button" onClick={() => toggleOffer(true)}>Generate NFT's</Button>
        </div>
      </div>
      <hr />
      <OfferModal onClose={() => toggleOffer(false)} show={isToggled}/>
      <ExpandModal onClose={() => setToggle(false)} show={isOpen} />
      <div className="nfts">
        {nfts.map((nft) => (
          <NftCard isOpen={isOpen} setToggle={setToggle} />
        ))}
      </div>
    </Layout>
  );
}
