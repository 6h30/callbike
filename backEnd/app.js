import * as React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import store from './store';

import homeScreen from './views/homeScreen';
import searchScreen from './views/searchResultScreen';


import SearchResult from './src/components/HomeScreen/SearchResult';

export default function App() {
  const Drawer = createDrawerNavigator();

  // Custom Drawer Content
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />   
           
        <DrawerItem
          label="Notifications"
          onPress={() => alert('Notification pressed')}
          icon={({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'notifications' : 'notifications-outline'}
              size={size}
              color={color}
            />
          )}
        />

      </DrawerContentScrollView>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer.Navigator
              drawerContent={props => <CustomDrawerContent {...props} />}
              screenOptions={({ navigation }) => ({
                headerLeft: () => (
                  <Ionicons
                    name="menu"
                    size={30}
                    style={{ marginLeft: 10 }}
                    onPress={() => navigation.toggleDrawer()}
                  />
                ),
                headerRight: () => (
                  <Ionicons
                    name="notifications"
                    size={20}
                    style={{ marginRight: 10 }}
                    onPress={() => alert('Notification pressed')}
                  />
                )
              })}
            >
              <Drawer.Screen
                name="Home"
                component={homeScreen}
                options={{
                  drawerLabel: 'Home',
                  title: 'Overview',
                }}
              />

              <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                  drawerLabel: 'Search',
                  title: 'Overview',
                }}
              />
              <Drawer.Screen
                name="SearchResult"
                component={SearchResult}
                options={{
                  drawerLabel: 'SearchResult',
                  title: 'Overview',
                }}
              />
              

            </Drawer.Navigator>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
