import React from 'react';
import Gallery from "react-photo-gallery";
import logo from './logo.svg';
import './App.css';
import { GalleryExpander } from './GalleryExpander';
import {MarriageData} from './marriage-data'

 



function App() {
  return (
    <div className="App">
      <MarriageData/>
   <GalleryExpander/>

    </div>
  );
}

export default App;
