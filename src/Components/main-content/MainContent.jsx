import React from "react";
import MainContentCSS from "./MainContent.module.css"

import Branches from "./branches/Branches";

export default function MainContent() {
  return (
    <div className={MainContentCSS.mainContent}>
      <Branches />
    </div>
  )
}
