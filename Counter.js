import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, addIfEven} from './counterSlice';

function Counter() {
  const count = useSelector(state => state.count);
  // console.log(count);
  // const count = useSelector(state => state.count);

  const dispatch = useDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button onPress={() => dispatch(increment())} title="+" />
      <Button onPress={() => dispatch(decrement())} title="-" />
      <Button onPress={() => dispatch(addIfEven())} title="Add if even" />
    </View>
  );
}

export default Counter;
