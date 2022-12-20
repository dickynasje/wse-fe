import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Input, useColorMode } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import AnimeList from '../components/animelist'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [data, setData] =useState<String[]>();
  const [title, setTitle] = useState("");
  const [Bool, setBool] = useState(false);
  const queryHandle = (event: any) => {
    setTitle(event.target.value)
  }
  const handleButtonSearch = () => {
    if (title!="") {
      console.log(title)
      const obj = {title: {title}}
      fetch('http://127.0.0.1:8000/main/',{
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj.title)
      }).then(res => {
        if(!res.ok){
          throw Error('FETCH GAGAL');
        }
        return res.json();
      }).then(list => {
        setData(list.result);
        console.log(list.result);
        setBool(true);
      })
      .catch(err => {

      })
    }
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

        {data && <Box mt='16' h='100vh' id='resultSearch' >
          <AnimeList data={data}/>
        </Box>}

      </main>
    </div>
  )
}
