import React from 'react';
import Gallery from "react-photo-gallery";
import logo from './logo.svg';
import './App.css';
import { GalleryExpander } from './GalleryExpander';
import { MarriageData } from './marriage-data'

function App() {
  return (
    <div className="App grid-container">

       <div className={"grid-item main-image" }>
        <MarriageData />
      </div>
      <div className="grid-item">
        <GalleryExpander />
      </div>
    </div>
  );
}

export default App;
