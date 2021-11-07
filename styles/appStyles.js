import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Colors } from '../utils';

import generalStyles from './generalStyles';

export default {
  ...generalStyles,
  ...StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: Colors.yellowDarker2,
      margin: 5,
      borderColor: Colors.primary,
      borderWidth: 3,
      padding: 3,
    },
  }),
};
