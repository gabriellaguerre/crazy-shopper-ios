import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Splash from './Splash';
import { View, Text } from 'react-native';
// import App from '../App'
import { Stack } from 'expo-router/stack'


export default function RootLayout() {
  
  console.log("Rendering RootLayout");
  // console.log(children, 'CHILDREN')

  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2500);
  }, []);

  if(isSplash) {
    console.log("Showing Splash Screen")
      return <Splash />
  }

  console.log("Showing Main Content")
  return  (
    <Provider store={store}>
       {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello There</Text>
     </View> */}
     {/* <App /> */}
     <Stack>
      <Stack.Screen name="(tabs)" />
     </Stack>
    </Provider>
  )
}

// const styles = StyleSheet.create({
//   touchContainer: {
//     marginRight: 10,
//   },
//   buttonItem: {
//     width: 35,
//     height: 35,
//     borderRadius: 30,
//     backgroundColor: '#094a85',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
