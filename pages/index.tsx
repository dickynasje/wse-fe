import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Input, useColorMode } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [data, setData] =useState<String[] | null>();
  const [title, setTitle] = useState("");
  const queryHandle = (event: any) => {
    setTitle(event.target.value)
  }
  const handleButtonSearch = async () => {
    if (title!="") {
      console.log(title)
      const obj = {title: {title}}
      const res = await fetch('http://127.0.0.1:8000/main/',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj)
      });
      const data = await res.json;
      console.log(data);
      window.location.replace('#resultSearch')
    }
    console.log("masukin fungsi backend frontend frontflip backflip disini lakukan magic")
  }

  const handleButtonAnime = () => {
    
  }
  const handleButtonStudio = () => {
    
  }
  const handleButtonAdvanced= () => {
    
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>WSE</title>
        <meta name="description" content="WSE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SemWeb <a href="">Wibu Search Engine</a>
        </h1>
        <p className={styles.description}>
          WSE is a semantic web search engine using myAnimeList as its data. Hence its name WSE (Weaboo Search engine)
        </p>
        <Box m={2}>
        <Stack spacing = {4} direction='row' align='center'>
        <Button colorScheme='cyan' variant='outline'  onClick={handleButtonAnime}>WIBU</Button>
        <Button colorScheme='cyan' variant='outline'  onClick={handleButtonStudio}>Studio</Button>
        <Button colorScheme='cyan' variant='outline'  onClick={handleButtonAdvanced}>Advanced Search</Button>
        </Stack>
        </Box>

        <Input w="80%" className="anime-search" placeholder='Search' value={title} onChange={queryHandle} />

        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonSearch}>Search</Button>

        {data && <Box mt='96' h='100vh' id='resultSearch' >
          RESULTS
        </Box>}

      </main>
    </div>
  )
}
