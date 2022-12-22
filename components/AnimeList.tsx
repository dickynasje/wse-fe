import { useState } from 'react'
import { AnimeData } from './animeObject';
import Link from 'next/link';
const AnimeList = ({data}: {data:AnimeData[]}) => {
  console.log(data);
  
    return (  
        <div>
            {data.map((datas, index) => (
            <div className="animelist" key={index}>
              <Link href={`/ex:${datas.animeId.value.slice(24, )}`}>
              <h2>{datas.animeTitle.value}</h2>
              </Link>
            </div>
          ))}
        </div>
    );
}
 
export default AnimeList;