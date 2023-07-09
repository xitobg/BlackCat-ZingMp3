import React, { memo, useState, useLayoutEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import MvItem from "./MvItem";
import axios from "axios";
import { tmdAPI } from "../../asset/api/path"
import PlayListSelector from "../Selection/PlayListSelector"

const MvDataList = memo(({ item }) => {
   const [datas, setData] = useState([])

   const fetchData = useCallback(async () => {
      const data = await axios.get(tmdAPI.getArtistPage(item.alias))
      const res = data.data.data.sections?.find((e) => e.sectionType === "video")
      setData(res.items);
   }, []);

   useLayoutEffect(() => {
      fetchData();
   }, []);

   if (datas.length === 0) return;

   return (
      <PlayListSelector classAdd2={"container_top100-list "} key={uuidv4()} title={`MV Của ${item.name} `}>
         {datas?.slice(0, 8).map((e) => {
            return <MvItem isMvFull key={uuidv4()} data={e}></MvItem>
         })}
      </PlayListSelector>
   )
})

export default MvDataList
