"use client"

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: '/doc1.jpeg',
    thumbnail: '/doc1.jpeg',
  },
  {
    original: '/doc2.jpeg',
    thumbnail: '/doc2.jpeg',
  },
  {
    original: '/doc3.jpeg',
    thumbnail: '/doc3.jpeg',
  },
  {
    original: '/doc4.jpeg',
    thumbnail: '/doc4.jpeg',
  },
  {
    original: '/doc5.jpeg',
    thumbnail: '/doc5.jpeg',
  },
  {
    original: '/doc6.jpeg',
    thumbnail: '/doc6.jpeg',
  },
  {
    original: '/doc7.jpeg',
    thumbnail: '/doc7.jpeg',
  },
  {
    original: '/doc8.jpeg',
    thumbnail: '/doc8.jpeg',
  },
  {
    original: '/doc9.jpeg',
    thumbnail: '/doc9.jpeg',
  },
  {
    original: '/doc10.jpeg',
    thumbnail: '/doc10.jpeg',
  },
  {
    original: '/doc11.jpeg',
    thumbnail: '/doc11.jpeg',
  },
  {
    original: '/doc12.jpeg',
    thumbnail: '/doc12.jpeg',
  },
  {
    original: '/doc13.jpeg',
    thumbnail: '/doc13.jpeg',
  },
  {
    original: '/doc14.jpeg',
    thumbnail: '/doc14.jpeg',
  },
  {

    original: '/doc15.jpeg',
    thumbnail: '/doc15.jpeg',
  },
  {
    original: '/doc16.jpeg',
    thumbnail: '/doc16.jpeg',
  },
  {
    original: '/doc17.jpeg',
    thumbnail: '/doc17.jpeg',
  },
  {
    original: '/doc18.jpeg',
    thumbnail: '/doc18.jpeg',
  },
  {
    original: '/doc19.jpeg',
    thumbnail: '/doc19.jpeg',
  },
];

export const DocumentGallery = () => {
  return (
    <div className="border border-gray-400 rounded-lg shadow-md p-6">
      <ImageGallery
        items={images}
        showThumbnails={true}
        thumbnailPosition="bottom"
        showFullscreenButton={true}
        showPlayButton={true}
        // showBullets={true}
        autoPlay={true}
        slideDuration={800}
        slideInterval={5000}
      />

    </div>
  );
};
