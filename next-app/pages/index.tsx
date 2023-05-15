import { Box, Input, SearchIcon } from '@/components'

export default function Home() {
  return (
    <Box h='$full' w='$full' alignContent='center'>
      <Box>
        <Input my='$40' mx='$5'>
          <Input.Icon as={SearchIcon}/>
          <Input.Input placeholder='yohohohoho?'/>
        </Input>
      </Box>
    </Box>
  )
}
