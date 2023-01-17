import React from 'react';
import {Provider} from 'react-redux';
import counterReducer from './counterSlice';
import Counter from './Counter';
import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({reducer: counterReducer});

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

// import React, {Component} from 'react';
// import {StyleSheet, View, Button, Text} from 'react-native';
// import {myStore} from './src/store/myStore';
// import {Provider, useDispatch, useSelector} from 'react-redux';
// import {addition, subtraction} from './src/actions/countAction';

// const App = () => {
//   const dispatch = useDispatch();
//   const add = count => {
//     dispatch(addition(count));
//   };
//   const subtract = count => {
//     dispatch(subtraction(count));
//   };
//   const current = useSelector(state => state);
//   return (
//     <Provider store={myStore}>
//       <View styles={styles.container}>
//         <Button title="increment" onPress={() => add()} />
//         <Text>1</Text>
//         <Button title="decrement" onPress={() => subtract()} />
//       </View>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
