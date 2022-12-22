import { Box, Divider, Input, useColorMode, Select } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
const AdvancedSearch = () => {
    const handleButtonAdvancedSearch = () => {
        
    }
    
    
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
        <p className={styles.tes}><strong>Rated</strong></p>
        <Select placeholder='Select Rating'>
          <option value='1'>G - All Ages</option>
          <option value='2'>PG - Children</option>
          <option value='3'>PG-13 - Teens 13 or Older</option>
          <option value='1'>R - 17+ (Violence & Profanity)</option>
          <option value='2'>R+ - Mild Nudity</option>
          <option value='3'>Rx - Hentai</option>
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
          {[...Array(107).keys()].map((item) => {
            return (  
              <option value={2023 - item}>
                {2023 - item}
              </option>
            )
          })}
        </select>
        </HStack>

        <h1 className={styles.info_title}>Content Filter</h1>
        

        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonAdvancedSearch}>Search</Button> 
        </Box>

        
     );
}
 
export default AdvancedSearch;