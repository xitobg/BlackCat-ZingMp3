import { LazyLoadImage } from "react-lazy-load-image-component";
import { Navigation, Autoplay, Pagination, Lazy } from "swiper";
import React, { memo, useState, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import { useGetHomePage } from "../../asset/api/path"
import { LoadingSkeleton } from "../loading/LoadingSvg"

const SliderHomePage = memo(() => {
   const [datas, setData] = useState(null);
   const { data, status } = useGetHomePage();
   const dataNice = data?.data?.items.filter((e) => e.sectionType === "banner");

   const SlideStyle = styled.div`
      flex-grow: 1;
      margin: 0 auto;
      position: relative;
      width: 100%;
      .gallery-container {
         align-items: center;
         justify-content: center;
         display: flex;
         position: relative;
         transform-style: preserve-3d;
      }
      .gallery-item {
         height: auto;
         transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out, z-index 0s linear 0.25s;
         width: 100%;
         z-index: 1;
         opacity: 1;
         border-radius: 8px;
         padding: 15px;
      }
      .gallery-item.gallery-item-selected {
         transform: translateX(0);
         opacity: 1;
         z-index: 10;
      }
      .gallery-item.gallery-item-next {
         transform: translateX(100%);
      }
      .gallery-item.gallery-item-next, .gallery-item.gallery-item-previous {
         opacity: 1;
         z-index: 1;
      }
      .gallery-item.gallery-item-last {
         transform: translateX(20%);
      }
      .gallery-item.gallery-item-last {
         transform: translateX(20%);
      }
      .gallery-item.gallery-item-previous {
         transform: translateX(-100%);
      }
      .gallery-item .zm-card-image {
         border-radius: 8px;
      }
      .zm-card-image {
         display: block;
         position: relative;
         overflow: hidden;
         border-radius: 4px;
         flex-shrink: 0;
      }
   `;
   useLayoutEffect(() => {
      if(data) {
         setData(dataNice[0].items)
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [status]);
   const navigationPrevRef = React.useRef(null);
   const navigationNextRef = React.useRef(null);
   try {
      return (
         <SlideStyle>
            <div className="gallery mr-[-15px] ml-[-15px]">
               <div className="gallery-container slider_list min-h-[160px]">
                  <Swiper
                     height={216}
                     modules={[Navigation, Autoplay, Pagination, Lazy]}
                     autoplay={{ delay: 3500, disableOnInteraction: false }}
                     loop={true}
                     loopFillGroupWithBlank={true}
                     pagination={{ dynamicBullets: true }}
                     navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                     }}
                     onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                        swiper.params.navigation.nextEl = navigationNextRef.current
                     }}
                     speed={600}
                     allowTouchMove={false}
                     scrollbar={{ draggable: false }}
                     breakpoints={{
                        0: {
                           slidesPerView: 1,
                           allowTouchMove: true,
                           navigation: false,
                           autoplay: {
                              delay: 3000,
                              disableOnInteraction: false,
                           },
                        },
                        600: {
                           slidesPerView: 2,
                           allowTouchMove: true,
                        },
                        1040: { slidesPerView: 3 },
                     }}
                  >
                    {datas && datas.length > 0 && datas.map((e) => (
                      <SwiperSlide key={e.banner}>
                        <div className="gallery-item">
                          <div className="zm-card  cursor-pointer">
                            <div className="zm-card-image">
                              <LazyLoadImage height={"auto"} src={e.banner} alt="" />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                     <>
                        <button ref={navigationPrevRef} type="button" className="slider_list-btn-left slick-prev slick-arrow">
                           <span className="material-icons-outlined">arrow_back_ios</span>
                        </button>
                        <button ref={navigationNextRef} type="button" className="slider_list-btn-right slick-next slick-arrow ">
                           <span className="material-icons-outlined">arrow_forward_ios</span>
                        </button>
                     </>
                     {(!datas || status === "loading") && Array(3).fill(0).map((e, index) => (
                        <SwiperSlide key={index}>
                          <div className="gallery-item">
                            <div className="zm-card  cursor-pointer">
                              <div className="zm-card-image ">
                                <LoadingSkeleton className="w-full h-[216px] "/>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
               </div>
            </div>
         </SlideStyle>
      );
   } catch (error) {
      console.log(error)
   };
});

export default SliderHomePage;