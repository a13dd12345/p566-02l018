import * as React from 'react';
import { Text, View, ScrollView } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import PersonMain from '../PersonMain/PersonMain';
import PeopleMain from '../PeopleMain/PeopleMain';

// Styles:
import styles from './mainStyles';

export default function Main({ Person1, Person2, PeopleData, idCountHandler }) {
  const id = idCountHandler();
    // console.log('Main - PeopleData: ', PeopleData);

  const addPersonHandler = (person) => {
    console.log('Main - person XXXXX: ', person);

  };

  
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
      <Text style={[styles.textH1]}>Main</Text>
      {/**
      
        <PersonMain
          Person1={Person1}
          Person2={Person2}
          id={id}
          addPersonHandler={addPersonHandler}
        />
       */}
        <PeopleMain PeopleData={PeopleData} id={id}/>
      </ScrollView>
    </View>
  );
}
// { Person1, Person2, idCountHandler }
// Person1={Person1} Person2={Person2} idCountHandler={idCountHandler}
// { Person1, Person2, id }
// Person1={Person1} Person2={Person2} id={id}
