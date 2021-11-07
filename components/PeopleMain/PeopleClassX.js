import * as React from 'react';
import { useState } from 'react';

import { Text, View } from 'react-native';

// or any pure javascript modules available in npm

// You can import from local files
import PersonView from '../PersonView/PersonView';
import PeopleList from '../PeopleList/PeopleList';
// Styles:
import styles from './peopleStyles';

/// Read
/// https://reactjs.org/docs/hooks-state.html

export default class People extends React.Component {
  // export default function People({ PeopleData }) {
  constructor(props) {
    // console.log('People - PeopleData: ', props.PeopleData);

    super(props);
    this.state = {
      peopleData: props.PeopleData,
    };
    this.peoplePersonAddHandler = this.peoplePersonAddHandler.bind(this);
  }

  // const [peopleData, setPeopleData] = useState(props.PeopleData);

  peoplePersonAddHandler = (person) => {
    console.log('People - peoplePersonAddHandler - person: ', person);

    this.setState({peopleData: [...this.PeopleData, person]});
  };

  render() {
    // console.log("PeopleX: ", this.state.peopleData)
    return (
      <View style={styles.peopleContainer}>
        <Text style={[styles.textH1]}>People</Text>
        <PeopleList peopleData={this.state.peopleData} />
      </View>
    );
  }
}
