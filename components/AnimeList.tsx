import { useState } from 'react'

const AnimeList = ({data}: {data:String[]}) => {
    return (  
        <div>
            {data.map((datas, index) => (
            <div className="animelist" key={index}>
              <h2>{datas}</h2>
            </div>
          ))}
        </div>
    );
}
 
export default AnimeList;