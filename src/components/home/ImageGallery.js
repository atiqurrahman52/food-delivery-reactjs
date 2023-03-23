import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { galleryData } from "../../data/home/galleryData";

const ImageGallery = () => {
  return (
    <section id="gallery">
      <div className="bg-[#F3F4EF]">
        <div className="container">
          <div className="py-10 lg:py-20">
            <div className="flex flex-col items-center mb-10 lg:mb-14">
              <h3 className="font-edwardian text-[32px] lg:text-[80px] leading-[38px] text-primary opacity-[0.2]">
                Gallery
              </h3>
              <h3 className="font-Playfair font-bold text-2xl lg:text-5xl leading-[29px] lg:leading-[58px] text-primary mb-2">
                Image Gallery
              </h3>
              <p className="font-Raleway font-medium text-sm leading-[21px] text-primary/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="24px">
                {galleryData.map(({ id, img }) => (
                  <img src={img} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
