/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
interface Props {
  label: string;
}
const ButtonCPN = (props: Props) => {
  const {label} = props;
  const gicungdc = ()=>{
    console.log('====================================');
    console.log("uhuuuuhn");
    console.log('====================================');
  }
  function uyguy(){

  }
  return (
    <TouchableOpacity
      onPress={gicungdc}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        borderWidth: 2,
        borderRadius: 12,
        backgroundColor: 'pink',
        height: '20%',
      }}>
      <Text style={{textAlign: 'center', color: 'black', fontSize: 20}}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonCPN;
