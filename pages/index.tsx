import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Divider, Input, useColorMode, Select } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import AnimeList from '../components/AnimeList'

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode()
  const [data, setData] =useState<String[]>();
  const [title, setTitle] = useState("");
  const [Bool, setBool] = useState(false);
  const [studioData, setStudioData] = useState<String[]>();
  const [animeSearch, setAnimeSearch] = useState(true);
  const [studioSearch, setStudioSearch] = useState(false);
  const [advancedSearch, setAdvancedSearch] = useState(false);
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
        console.log(list);
        setBool(true);
      })
      .catch(err => {

      })
    }
  }

  const handleButtonAnime = () => {
    setStudioSearch(false);
    setAdvancedSearch(false);
    setAnimeSearch(true);
  }
  const handleButtonStudio = () => {
    setStudioSearch(true);
    setAdvancedSearch(false);
    setAnimeSearch(false);
  }
  const handleButtonAdvanced= () => {
    setStudioSearch(false);
    setAdvancedSearch(true);
    setAnimeSearch(false);
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

        {animeSearch && <Box w='80%' textAlign='center'>
        <Input w="100%" className="anime-search" placeholder='Search' value={title} onChange={queryHandle} />
        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonSearch}>Search</Button> 
        </Box>}
        {studioSearch && <Box w='80%' textAlign='center'>
        <Input w="100%" className="anime-search" placeholder='Search Studio' value={title} onChange={queryHandle} />
        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonSearch}>Studio Search</Button> 
        </Box>}
        {advancedSearch && <Box w='80%' textAlign='center'>
        <h1 className={styles.info_title}>Filter</h1>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Type</strong></p>
        <Select placeholder='Select Type'>
          <option value='1'>TV</option>
          <option value='2'>OVA</option>
          <option value='3'>Movie</option>
          <option value='1'>Special</option>
          <option value='2'>ONA</option>
          <option value='3'>Music</option>
        </Select>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Score</strong></p>
        <Select placeholder='Select Score'>
          <option value='1'>(10) Masterpiece</option>
          <option value='2'>(9) Great</option>
          <option value='3'>(8) Very Good</option>
          <option value='1'>(7) Good</option>
          <option value='2'>(6) Fine</option>
          <option value='3'>(5) Average</option>
          <option value='1'>(4) Bad</option>
          <option value='2'>(3) Very Bad</option>
          <option value='3'>(2) Horrible</option>
          <option value='1'>(1) Appalling</option>
        </Select>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Status</strong></p>
        <Select placeholder='Select Status'>
          <option value='1'>(10) Masterpiece</option>
          <option value='2'>(9) Great</option>
          <option value='3'>(8) Very Good</option>
          <option value='1'>(7) Good</option>
          <option value='2'>(6) Fine</option>
          <option value='3'>(5) Average</option>
          <option value='1'>(4) Bad</option>
          <option value='2'>(3) Very Bad</option>
          <option value='3'>(2) Horrible</option>
          <option value='1'>(1) Appalling</option>
        </Select>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Rated</strong></p>
        <Select placeholder='Select Rating'>
          <option value='1'>(10) Masterpiece</option>
          <option value='2'>(9) Great</option>
          <option value='3'>(8) Very Good</option>
          <option value='1'>(7) Good</option>
          <option value='2'>(6) Fine</option>
          <option value='3'>(5) Average</option>
          <option value='1'>(4) Bad</option>
          <option value='2'>(3) Very Bad</option>
          <option value='3'>(2) Horrible</option>
          <option value='1'>(1) Appalling</option>
        </Select>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Year</strong></p>
        <Input placeholder="Select Date and Time" size="md" type="datetime-local"/>
        </HStack>

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Season</strong></p>
        <Select placeholder='Select Season'>
          <option value='1'>Spring</option>
          <option value='2'>Summer</option>
          <option value='3'>Winter</option>
          <option value='1'>Fall</option>
        </Select>
        </HStack>

        <h1 className={styles.info_title}>Content Filter</h1>

        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonSearch}>Search</Button> 
        </Box>}
        

        {data && <Box mt='16' h='100vh' id='resultSearch' >
          <AnimeList data={data}/>
        </Box>}

      </main>
    </div>
  )
}