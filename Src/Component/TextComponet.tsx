/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, View} from 'react-native';
interface Props {
  label: string;
  size?:number
}

const TextComponet = (props: Props) => {
  const {label, size} = props;
  return (
    <View>
      <Text>{props.label}</Text>
    </View>
  );
};

export default TextComponet;
