import * as React from 'react';
import { useState } from 'react';

import { Text, View, Button } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import PersonView from '../PersonView/PersonView';
import PersonUpdate from '../PersonUpdate/PersonUpdate';
// Styles:
import styles from './personMainStyles';

export default function Main({ Person1, Person2, id, addPersonHandler }) {
  const [person, setPerson] = useState(Person1);
  const personSwitchHandler = () => {
    person.id == 1 ? setPerson(Person2) : setPerson(Person1);
  };

  const onChangeTextHandler = (info) => {
    info[0]
      ? setPerson({ id: id, name: info[1], age: person.age })
      : setPerson({ id: id, name: person.name, age: info[1] });
  };
  return (
    <View style={styles.personMainContainer}>
      <Text style={[styles.textH1]}>Person Main</Text>
      <PersonView person={person} />
      <Button
        onPress={personSwitchHandler}
        title="switch person"
        color="#841584"
        accessibilityLabel=""
      />
      <PersonUpdate onChangeTextHandler={onChangeTextHandler} />
      <Button
        onPress={()=>addPersonHandler(person)}
        title="add person"
        color="#841584"
        accessibilityLabel=""
      />
    </View>
  );
}
// { Person1, Person2, id }
// Person1={Person1} Person2={Person2} id={id}
// { person, id }
// person={person} id={id}
