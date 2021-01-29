import React from 'react';
import {PersonDetails, PersonList} from '../sw-components';
import Row from '../row';

const PeoplePage = ({history}) => {
  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(id)}/>}
      right={<PersonDetails itemId={Math.ceil(Math.random() * 83)}/>}
    />
  );
};

export default PeoplePage;
