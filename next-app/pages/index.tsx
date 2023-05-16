import { Box, Input, SearchIcon } from '@/components';
import { GluestackUIProvider } from '../components';
import { config } from '../gluestack-ui.config';
import React, { useState } from 'react';

function Component () {
  return (
    <Input my='$40' mx='$5' size='xl'>
      <Input.Icon as={SearchIcon}/>
      <Input.Input placeholder='yohohohoho?'/>
    </Input>
  );
}

export default function Home() {
  const [cmd, setcmd] = useState<'dark' | 'light' >('dark');
  const change = () => {
    console.log(cmd);
    setcmd((state) => {
      if (state === 'dark') {
        return 'light';
      }
      return 'dark';
    })
  }
  return (
    <GluestackUIProvider config={config.theme} colorMode={cmd}>
      <Box h='$full' w='$full' alignContent='center'>
        <Component/>
        <button onClick={change}>
          {cmd} mode currently... click to change
        </button>
      </Box>
    </GluestackUIProvider>
  )
}