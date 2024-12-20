import React, { ReactNode } from 'react';
import { ScrollView, StyleProp, Text, View, ViewStyle } from 'react-native';
interface Props{
    children:ReactNode;
    styles?:StyleProp<ViewStyle>;
    isScroll?: boolean;
}
const ContainerCPN = (props:Props) => {
    const {children, styles, isScroll}=props;
  return isScroll?(
    <ScrollView style={[{margin:5}, styles]}>
      {children}
      <Text>cai qq gi vay</Text>
    </ScrollView>
  ):(
    <View style={props.styles}>{children}</View>
  )
}

export default ContainerCPN