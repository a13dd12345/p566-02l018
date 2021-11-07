import * as React from 'react';
import { useState } from 'react';

import { Text, View, Button } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import PersonView from '../PersonView/PersonView';
import PersonUpdate from '../PersonUpdate/PersonUpdate';
import PeopleList from '../PeopleList/PeopleList';
// Styles:
import styles from './peopleStyles';

/// Read
/// https://reactjs.org/docs/hooks-state.html

export default function People({ PeopleData, id }) {
  const [peopleData, setPeopleData] = useState(PeopleData);

  const peoplePersonAddHandler = (person) => {
    console.log('People - peoplePersonAddHandler - person: ', person);
    console.log('People - peoplePersonAddHandler - peopleData 1: ', peopleData);
    setPeopleData([...peopleData, person]);
    console.log('People - peoplePersonAddHandler - peopleData 2: ', peopleData);
  };
  const [person, setPerson] = useState({});

  const onChangeTextHandler = (info) => {
    info[0]
      ? setPerson({ id: id, name: info[1], age: person.age })
      : setPerson({ id: id, name: person.name, age: info[1] });
  };

  const addPersonHandler = (person) => {
  };

  return (
    <View style={styles.peopleContainer}>
      <Text style={[styles.textH1]}>People</Text>
      <PersonUpdate onChangeTextHandler={onChangeTextHandler} />
      <Button
        onPress={() => peoplePersonAddHandler(person)}
        title="add person"
        color="#841584"
        accessibilityLabel=""
      />
      <PeopleList peopleData={peopleData} />
    </View>
  );
}
