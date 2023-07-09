import React from "react"
import { useSelector } from "react-redux"
import ItemChartList from "../TopChartPage/ItemChartList"

const HistorySong = () => {
   const recentSongs = useSelector((state) => state.logged.recentSongs);
   return (
      <div className="main_topchart mt-2">
         <div className="container_zing-chart">
            <div className="zing-chart_list pt-2">
               {recentSongs && recentSongs.length > 0 && recentSongs.map((e, index) => {
                  return <ItemChartList isNotList isNoneRank item={e} index={index} key={e.encodeId}/>
               })}

               {recentSongs && recentSongs.length === 0 && (
                  <div className="personal_podcast-main personal_container-main active">
                     <div className="personal_podcast-img"></div>
                     <div className="personal_podcast-text">Không có tập mới</div>
                  </div>
               )}
            </div>
         </div>
      </div>
   )
}

export default HistorySong;