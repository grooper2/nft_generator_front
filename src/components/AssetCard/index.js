import React from "react"
import "./AssetCard.scss"
import placeholder from '../../Assets/Images/placeHolder.png'

export default function AssetCard () {
    return (
        <div className="assetPlaceholder">
            <img src={placeholder} alt="assetImage" />
        </div>
    )
}