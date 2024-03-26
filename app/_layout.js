// app/_layout.js
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'react-native';

export default function Layout() {
  return (<>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
        <Drawer.Screen name="index" // This is the name of the page and must match the url from root
          options={{ drawerLabel: 'Home', title:"",drawerActiveBackgroundColor: '#f0f0f0',drawerInactiveBackgroundColor: '#ffffff' }}
          />
        <Drawer.Screen name="something" // This is the name of the page and must match the url from root
          options={{ drawerLabel: 'something', title:"",drawerActiveBackgroundColor: '#f0f0f0',drawerInactiveBackgroundColor: '#ffffff'}}
          />
      </Drawer>
      <StatusBar style="white" />
    </GestureHandlerRootView>
          </>
  );
}
