import { ScrollView } from 'react-native';
import { GluestackUIProvider, Box, Input, SearchIcon } from './components';
import { config } from './gluestack-ui.config';

export default function App() {
  return (
    <GluestackUIProvider config={config.theme}>
      <Box h='$full' w='$full' alignContent='center'>
        <ScrollView>
          <Box>
            <Input mt={600} mx='$5'>
              <Input.Icon as={SearchIcon}/>
              <Input.Input placeholder='yohohohoho?'/>
            </Input>
          </Box>
        </ScrollView>
      </Box>
    </GluestackUIProvider>
  );
}