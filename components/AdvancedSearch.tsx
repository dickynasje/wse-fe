import { Box, Divider, Input, useColorMode, Select, Grid, GridItem, Checkbox, CheckboxGroup,Radio, RadioGroup  } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import { error } from 'console'
import { useEffect, useState } from 'react'
import { AdvanceObject } from './AdvanceObject'
import styles from '../styles/Home.module.css'
import { Genre } from './AdvanceObject'
const AdvancedSearch = () => {
    const [data, setData] = useState<AdvanceObject>()
    const arrayGenre = new Array();
    const handleButtonAdvancedSearch = () => {
        
    }
    
    useEffect(() => {
      fetch('https://wse-be.up.railway.app/main/advance-data').then(res => {
        if(!res.ok){
          throw Error('FETCH GAGAL');
        }
        return res.json();
      }).then(list => {
        setData(list);
        console.log(list);
      }).catch(err => {

      })
    }, [])

    const genreData = data?.genre
    const handleGenreCheckBox = (e: any) => {
      console.log(e.target.checked)
      
    }

    console.log(data?.genre)
    return (
        
        <Box w='80%' textAlign='center'>
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
          <option value='2'>Finished Airing</option>
          <option value='3'>Currently Airing</option>
          <option value='1'>Not Yet Aired</option>
        </Select>
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

        <HStack className={styles.filter_main}>
        <p className={styles.tes}><strong>Year</strong></p>
        <select className={styles.new} >
          <option value='1'> Select Year </option>
          {[...Array(107).keys()].map((item, index) => {
            return (  
              <option value={2023 - item} key={index}>
                {2023 - item}
              </option>
            )
          })}
        </select>
        </HStack>

        <h1 className={styles.info_title}>Content Filter</h1>
        
        <Grid templateColumns='repeat(3, 1fr)' gap={10}>
          <GridItem w='100%' >
          <h1 className={styles.content_title}>Genre</h1>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              {genreData?.map((datas, index) => (
                <GridItem pl='2'>
                  <div className="genrelist" key={index}>
                    
                      {/* <Link href={`/ex:${datas.animeId.value.slice(24, )}`}> */}
                    <Checkbox onChange={handleGenreCheckBox} value={datas?.genreId.value.slice(24, )} >{datas?.genreName.value}</Checkbox>
                      
                      {/* </Link> */}
                  </div>
                </GridItem>
              ))}
            </Grid>
          </GridItem>

          <GridItem w='100%'>
          <h1 className={styles.content_title}>Themes</h1>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              <Checkbox >Checkbox</Checkbox>
              <Checkbox >Checkbox</Checkbox>
              <Checkbox >Checkbox</Checkbox>
              <Checkbox >Checkbox</Checkbox>
            </Grid>
          </GridItem>

          <GridItem w='100%'>
          <h1 className={styles.content_title}>Demographics</h1>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              <Checkbox >Checkbox</Checkbox>
              <Checkbox >Checkbox</Checkbox>
              <Checkbox >Checkbox</Checkbox>
              <Checkbox >Checkbox</Checkbox>
            </Grid>
          </GridItem>
        </Grid>

        <p className={styles.sort_title}><strong>Sort by Score</strong></p>
        <div className={styles.sort_score}>
          <RadioGroup className={styles.sort_score} defaultValue='desc'>
            <Stack spacing={5} direction='row'>
              <Radio  colorScheme='blue' value='desc'>
                Descending
              </Radio>
              <Radio colorScheme='blue' value='asc'>
                Ascending
              </Radio>
            </Stack>
          </RadioGroup>
        </div>
        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonAdvancedSearch}>Search</Button> 
        </Box>

        
     );
}
 
export default AdvancedSearch;