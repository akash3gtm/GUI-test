import { Box, Radio, CircleIcon, Button } from '@/components';
import { GluestackUIProvider } from '../components';
import { config } from '../gluestack-ui.config';
import React, { useState } from 'react';

function Component () {
  return (
    <Radio.Group>
      <Radio size="sm" value="sm">
        <Radio.Indicator>
          <Radio.Icon>
            <CircleIcon />
          </Radio.Icon>
        </Radio.Indicator>
        <Radio.Label>Small size</Radio.Label>
      </Radio>
      <Radio size="md" value="md">
        <Radio.Indicator>
          <Radio.Icon>
            <CircleIcon />
          </Radio.Icon>
        </Radio.Indicator>
        <Radio.Label>Medium size</Radio.Label>
      </Radio>
      <Radio size="lg" value="lg">
        <Radio.Indicator>
          <Radio.Icon>
            <CircleIcon />
          </Radio.Icon>
        </Radio.Indicator>
        <Radio.Label>Large size</Radio.Label>
      </Radio>
    </Radio.Group>
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
      <Box h='$full' w='$full' justifyContent='center' alignItems='center' alignContent='center' bg='$amber300' py='$20' alignSelf='center'>
        <Box p='$3'>
          <Component/>
          <Button onPress={change} mt='$3'>
            <Button.Text>
              {cmd} mode currently... click to change
            </Button.Text>
          </Button>
        </Box>
      </Box>
    </GluestackUIProvider>
  )
}