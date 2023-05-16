import { View } from 'react-native';
import { styled } from '../../styled';

export default styled(
  View,
  {
    '_dark': {
      'bgColor': '$black',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
