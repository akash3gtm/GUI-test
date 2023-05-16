import { ScrollView, TextInput } from 'react-native';
import { GluestackUIProvider, Box, Input, SearchIcon, Button } from './components';
import { config } from './gluestack-ui.config';
import React, { useState } from 'react';

function Component () {
  const [value, setvalue] = useState('');
  const onChange = (text) => {
    setvalue(text);
  };
  return (
    <TextInput placeholder='YOHOHOHOHO'/>
  );
}


export default function App() {
  const [cmd, setcmd] = useState('dark');
  const change = () => {
    console.log(cmd);
    setcmd((state) => {
      if (state === 'dark') {
        return 'light';
      }
      return 'dark';
    })
  };
  return (
    <GluestackUIProvider config={config.theme} colorMode={cmd}>
      <Box h='$full' w='$full' alignContent='center'>
        <ScrollView>
          <Box mt={100} mx='$5'>
            <Component/>
            <Button onPress={change}>
              <Button.Text>
                {cmd} mode currently... click to change
              </Button.Text>
            </Button>
          </Box>
        </ScrollView>
      </Box>
    </GluestackUIProvider>
  );
}