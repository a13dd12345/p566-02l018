//myAppStyles
import * as React from 'react';
import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import Header from '../Header/Header'
import Main from '../Main/Main'

// Fake Data:
import { Person1, Person2, PeopleData } from '../../DataFake'
let idCount = 10
const idCountHandler = () => {
  return idCount++
  }

// Styles:
import styles from './myAppStyles'

export default function MyApp() {
  console.log(styles.myAppContainer.margin)
  return (
    <View style={styles.myAppContainer}>
      <Text style={[styles.textH1]}>My App</Text>
      <Header />
      <Main Person1={Person1} Person2={Person2} PeopleData={PeopleData} idCountHandler={idCountHandler} />
    </View>
  );
}

