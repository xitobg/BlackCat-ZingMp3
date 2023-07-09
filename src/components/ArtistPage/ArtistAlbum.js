import React from "react"
import PlayListSelector from "../Selection/PlayListSelector"
import { v4 as uuidv4 } from "uuid"
import { useOutletContext } from "react-router"
import CarouselItem from "../Selection/CarouselItem"
import { LoadingSvg } from "../loading/LoadingSvg"

const ArtistAlbum = () => {
   const datas = useOutletContext()
   const dataSelector = datas?.sections?.find((e) => e.title === "Album")

   if (datas?.length === 0 || !datas) return <LoadingSvg></LoadingSvg>

   return (
      <PlayListSelector classAdd2={"!flex-wrap"} key={uuidv4()} title={dataSelector.title}>
         {dataSelector &&
            dataSelector?.items?.length > 0 &&
            dataSelector?.items?.map((e, index) => {
               let classGird = "col l-2-4 m-3 c-6 !mb-[30px]"

               return <CarouselItem key={e.encodeId} artis={true} desc={false} class1={classGird} item={e}></CarouselItem>
            })}
      </PlayListSelector>
   )
}

export default ArtistAlbum
