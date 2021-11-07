import { StyleSheet } from 'react-native';

import { Colors } from '../../utils';
import { generalStyles } from '../../styles';

export default {
  ...generalStyles,
  ...StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.yellowPrimary,
      margin: 5,
      borderColor: Colors.primary,
      borderWidth: 3,
      padding: 3,
    },
    mainContent: {},
  }),
};
