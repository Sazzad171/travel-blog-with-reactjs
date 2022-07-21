import React from 'react';

// components
import BannerSlider from './BannerSlider';
import PopularDestination from './PopularDestination';
import TourGallery from './TourGallery';
import PopularVideos from './PopularVideos';

export default function Home({ places, videos, gallery }) {

  return (
    <>
      <BannerSlider />
      <PopularDestination places={places} />
      <TourGallery gallery={gallery} />
      <PopularVideos videos={videos}  />
    </>
  )
}
