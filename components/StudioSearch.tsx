import { Box, Divider, Input, useColorMode, Select } from '@chakra-ui/react'
import { InputGroup, Button, ButtonGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react';
const StudioSearch = () => {
    const [studio, setStudio] = useState("");
    const queryHandle = (event: any) => {
        setStudio(event.target.value);
    }
    const handleButtonStudioSearch = () => {
        
    }
    return ( 
        <Box w='80%' textAlign='center'>
        <Input w="100%" className="anime-search" placeholder='Search Studio' value={studio} onChange={queryHandle} />
        <Button colorScheme='cyan' variant='outline' mt='4' onClick={handleButtonStudioSearch}>Studio Search</Button> 
        </Box> 
     );
}

export default StudioSearch;