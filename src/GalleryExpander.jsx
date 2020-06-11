import React from 'react';
import Gallery from "react-photo-gallery";
import { render } from '@testing-library/react';

const photos = [
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ];

  
export const GalleryExpander = function GalleryBox() {
    return (
        <Gallery photos={photos} />
    )
}

