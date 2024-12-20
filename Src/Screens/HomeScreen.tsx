import React from 'react';
import ButtonCPN from '../Component/ButtonCPN';
import ContainerCPN from '../Component/ContainerCPN';
import TextComponet from '../Component/TextComponet';

const HomeScreen = () => {
  return (
    <ContainerCPN styles={{margin:5}} isScroll>
      <TextComponet label="Home" />
      <ButtonCPN label="Hung" />

    </ContainerCPN>
  );
};

export default HomeScreen;


