import React, { memo, useEffect, useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useGetHomePage } from "../../asset/api/path";
import CarouselItem from "../Selection/CarouselItem";

const NewMusicHomePage2 = memo(() => {
   const [datas, setData] = useState(null)
   const { data, status } = useGetHomePage()

   const dataSelector = data?.data.items.find((e) => e.sectionId === "hAlbum")

   useEffect(() => {
      if(data) {
         setData(dataSelector.items);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [status]);

   try {
      return (
         <div className="release_list !block row mt-[30px]">
            {datas && datas.length > 0 && (
               <Swiper
                  modules={[Autoplay]}
                  autoplay={{
                     delay: 5200,
                     disableOnInteraction: false,
                  }}
                  loop={true}
                  spaceBetween={4}
                  speed={700}
                  allowTouchMove={true}
                  scrollbar={{ draggable: false }}
                  breakpoints={{
                     0: {
                        allowTouchMove: true,
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                     },
                     650: {
                        slidesPerGroup: 4,
                        slidesPerView: 4,
                     },
                     1220: {
                        slidesPerGroup: 5,
                        slidesPerView: 5,
                     },
                  }}
               >
                  {datas && datas.length > 0 && datas.map((e, index) => {
                    return (
                      <SwiperSlide key={e.encodeId}>
                        <CarouselItem isSwiper={true} desc={false} artis={true} class1={`col`} item={e}/>
                      </SwiperSlide>
                    )
                  })}
               </Swiper>
            )}
         </div>
      );
   } catch (error) {
      console.log(error);
   };
});

export default NewMusicHomePage2;