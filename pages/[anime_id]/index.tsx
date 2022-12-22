import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Box, Input, useColorMode, Image, Text } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { AnimeDetailObject } from '../../components/AnimeDetailObject'

export default function AnimeDetail() {
  const router = useRouter();
  const [anime_id, setAnime_id] = useState("");
  const [data, setData] = useState<AnimeDetailObject[]>();
  const [Bool, setBool] = useState(false);

  useEffect(() => {
    setAnime_id(router.query.anime_id as string);
  }, [router.query])
  //getAnimeId
  console.log(anime_id);

  if (!anime_id) {
    const obj = { anime: { anime_id } }
    console.log("")
    fetch('http://127.0.0.1:8000/main/detail', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj.anime)
    }).then(res => {
      if (!res.ok) {
        throw Error('FETCH GAGAL');
      }
      return res.json();
    }).then(list => {
      setData(list.result);
      console.log(list);
      setBool(true);
    })
      .catch(err => {

      })
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Boruto: Naruto Next Generations</title>
        <meta name="description" content="WSE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Box bg='https://cdn.myanimelist.net/images/anime/9/84460l.jpg' w='100%' p={4} >

            </Box> */}

      <div className={styles.main_info}>
        <div className={styles.main_left} >
          <Image src='https://cdn.myanimelist.net/images/anime/9/84460l.jpg' />
          <h2 className={styles.score}>Score : 5.74</h2>
          <div>
            <h3 className={styles.info_title}>Alternative Title</h3>
            <p><strong>Japanese: </strong>BORUTO -NARUTO NEXT GENERATIONS-</p>
            <br />
            <p><strong>English: </strong>Boruto: Naruto Next Generations</p>

            <h3 className={styles.info_title}>Information</h3>
            <p><strong>Type: </strong>TV</p>
            <p><strong>Episodes: </strong>Unknown</p>
            <p><strong>Status: </strong>Currently Airing</p>
            <p><strong>Aired: </strong>Apr 5, 2017 to ?</p>
            <p><strong>Premiered: </strong>Spring 2017</p>
            <p><strong>Broadcast: </strong>Sundays at 17:30 (JST)</p>
            <p><strong>Producers: </strong>TV Tokyo, Aniplex, Rakuonsha, Shueisha</p>
            <p><strong>Licensors: </strong>VIZ Media</p>
            <p><strong>Studios: </strong>Pierrot</p>
            <p><strong>Source: </strong>Manga</p>
            <p><strong>Genres: </strong>Action, Adventure, Fantasy</p>
            <p><strong>Theme: </strong>Martial Arts</p>
            <p><strong>Demographic: </strong>Shounen</p>
            <p><strong>Duration: </strong>23 min.</p>
            <p><strong>Rating: </strong>PG-13 - Teens 13 or older</p>

            <h3 className={styles.info_title}>Statistics</h3>
            <p><strong>Ranked: </strong>#10542</p>
            <p><strong>Popularity: </strong>#197</p>
            <p><strong>Members: </strong>786,587</p>
            <p><strong>Favorites: </strong>6,779</p>
          </div>
        </div>

        <div className={styles.main_right}>
          <h1 className={styles.anime_title}>Boruto: Naruto Next Generation</h1>
          <Text className={styles.teks}>
            Following the successful end of the Fourth Shinobi World War, Konohagakure has been enjoying a period of peace, prosperity, and extraordinary technological advancement. This is all due to the efforts of the Allied Shinobi Forces and the village's Seventh Hokage, Naruto Uzumaki. Now resembling a modern metropolis, Konohagakure has changed, particularly the life of a shinobi. Under the watchful eye of Naruto and his old comrades, a new generation of shinobi has stepped up to learn the ways of the ninja.

            Boruto Uzumaki is often the center of attention as the son of the Seventh Hokage. Despite having inherited Naruto's boisterous and stubborn demeanor, Boruto is considered a prodigy and is able to unleash his potential with the help of supportive friends and family. Unfortunately, this has only worsened his arrogance and his desire to surpass Naruto which, along with his father's busy lifestyle, has strained their relationship. However, a sinister force brewing within the village may threaten Boruto's carefree life.

            New friends and familiar faces join Boruto as a new story begins.</Text>
        </div>
      </div>


    </div>
  )
}