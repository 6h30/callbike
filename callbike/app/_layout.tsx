// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { Provider } from 'react-redux';
// import store from '../components/loginScreen/store'

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <Provider store={store}>
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack>
//           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//           <Stack.Screen name="+not-found" />
//         </Stack>
//       </ThemeProvider>
//     </Provider>
//   );
// }

// RootLayout.js
// import React, { useEffect } from 'react';
// import { Provider, useDispatch } from 'react-redux';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import store from '../components/loginScreen/store';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Ngăn màn hình splash tự động ẩn trước khi việc tải tài nguyên hoàn thành.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <Provider store={store}>
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack>
//           <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//           <Stack.Screen name="not-found" />
//         </Stack>
//       </ThemeProvider>
//     </Provider>
//   );
// }


// RootLayout.tsx
// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';

// import { useColorScheme } from '@/hooks/useColorScheme';

// import { Provider } from 'react-redux';
// import store from '@/components/loginScreen/store'

// SplashScreen.preventAutoHideAsync();

// interface RootState {
//   auth: {
//     isAuthenticated: boolean;
//   };
// }

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <Provider store={store}>
//       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//         <Stack>
//           {!isAuthenticated ? (
//             <Stack.Screen name="login" options={{ headerShown: false }} />
//           ) : (
//             <>
//               <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//               <Stack.Screen name="not-found" />
//             </>
//           )}
//         </Stack>
//       </ThemeProvider>
//     </Provider>
//   );
// }


import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import store from '@/components/loginScreen/store';

import { useColorScheme } from '@/hooks/useColorScheme';


// Ngăn màn hình splash tự động ẩn trước khi việc tải tài nguyên hoàn thành.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="ride" options={{ headerShown: false }} /> */}
          <Stack.Screen name="mapcarSelection" options={{ headerShown: false }} />
          <Stack.Screen name="not-found" />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}