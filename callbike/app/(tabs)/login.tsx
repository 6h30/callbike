// import React from 'react';
// import App from '@/components/loginScreen';

// import { Provider } from 'react-redux';

// import store from '@/components/loginScreen/store';

// export default function LoginScreen() {
//   return (
//     <Provider store={store}>
//     <App />
//     </Provider>
//   );
// }



// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice'; 
// import HomePage from '../../components/home';
// import App from '../../components/loginScreen';

// const LoginTab = () => {
//   const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkAuthStatus());
//   }, [dispatch]);

//   return (
//     <View style={styles.container}>
//       {isAuthenticated ? <HomePage /> : <App />}
//     </View>
//   );
// }
// export default LoginTab;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



// import React, { useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice'; 
// import HomePage from '../../components/home';
// import App from '../../components/loginScreen';

// interface RootState {
//     auth: {
//       isAuthenticated: boolean;
//     };
// }

// const LoginTab = () => {
//   const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated); // Sử dụng RootState thay vì RootStateOrAny hoặc any
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkAuthStatus());
//   }, [dispatch]);

//   return (
//     <View style={styles.container}>
//       {isAuthenticated ? <HomePage /> : <App />}
//     </View>
//   );
// }
// export default LoginTab;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// import React from 'react';

// import { Provider } from 'react-redux';
// import store from '@/components/loginScreen/store';
// import LoginTab from '@/components/loginScreen';

// export default function LoginScreen() {
//   return (
//     <Provider store={store}>
//     <LoginTab />
//     </Provider>
//   );
// }

//login.tsx
// import React from 'react';
// import LoginTab from '@/components/loginScreen';

// const LoginScreen = () => {
//   return <LoginTab />;
// };

// export default LoginScreen;

// import React from 'react';
// import HomePage from '@/components/home';

// const LoginScreen = () => {
//   return <HomePage navigation={undefined}/>;
// };

// export default LoginScreen;


// import React from 'react';
// import LoginForm from '@/components/loginScreen/Login';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { StyleSheet } from 'react-native';

// export default function LoginScreen() {
//   return (
//     <ThemedView style={styles.titleContainer}>
//       <ThemedText type="title">Welcome!</ThemedText>
//       <LoginForm />
//     </ThemedView>

//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
// });



// import React, { useState } from 'react';
// import LoginForm from '@/components/loginScreen/Login';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { StyleSheet, TouchableOpacity } from 'react-native';

// export default function LoginScreen() {

//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <ThemedView style={styles.container}>
//       {!isLoggedIn && (
//         <>
//           <ThemedView style={styles.titleContainer}>
//             <ThemedText type="title">Welcome!</ThemedText>
//           </ThemedView>
//           <LoginForm onLogin={handleLogin} />
//         </>
//       )}
//       {isLoggedIn && (
//         <ThemedView style={styles.loggedContainer}>
//           <ThemedText type="title">You are logged in!</ThemedText>
//         </ThemedView>
//       )}
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   loggedContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// import React, { useEffect, useState } from 'react';
// import { StyleSheet } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { useDispatch, useSelector } from 'react-redux';
// import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice';
// import LoginForm from '@/components/loginScreen/Login';
// import { RootState, AppDispatch } from '@/components/loginScreen/store';
// import CarSelectionScreen from '@/components/carSelection';

// const LoginScreen: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const dispatch: AppDispatch = useDispatch();
//   const auth = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     dispatch(checkAuthStatus()).then(() => {
//       if (auth.isAuthenticated) {
//         setIsLoggedIn(true);
//       }
//     });
//   }, [dispatch, auth.isAuthenticated]);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <ThemedView style={styles.container}>
//       {!isLoggedIn ? (
//         <>
//           <ThemedView style={styles.titleContainer}>
//             <ThemedText type="title">Welcome!</ThemedText>
//           </ThemedView>
//           <LoginForm onLogin={handleLogin} />
//         </>
//       ) : (
//         <ThemedView style={styles.loggedContainer}>
//           <ThemedText type="title">You are logged in!</ThemedText>
//           <ThemedText type="title">Hay Chọn loại xe!</ThemedText>

//           <CarSelectionScreen />
          
//         </ThemedView>
//       )}
//     </ThemedView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#DCDCDC',
//   },
//   titleContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     width: '100%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//     backgroundColor: 'white',
//   },
//   errorMessageContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   errorMessage: {
//     color: '#ff0000',
//   },
//   button: {
//     width: '100%',
//   },
//   loggedContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });


// export default LoginScreen;



// import React, { useEffect, useState } from 'react';
// import { StyleSheet } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { useDispatch, useSelector } from 'react-redux';
// import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice';
// import LoginForm from '@/components/loginScreen/Login';
// import { RootState, AppDispatch } from '@/components/loginScreen/store';
// import CarSelectionScreen from '@/components/carSelection';

// const LoginScreen: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const dispatch: AppDispatch = useDispatch();
//   const auth = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     dispatch(checkAuthStatus()).then(() => {
//       if (auth.isAuthenticated) {
//         setIsLoggedIn(true);
//       }
//     });
//   }, [dispatch, auth.isAuthenticated]);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <ThemedView style={styles.container}>
//       {!isLoggedIn ? (
//         <>
//           <ThemedView style={styles.titleContainer}>
//             <ThemedText type="title" style={styles.title}>Welcome!</ThemedText>
//           </ThemedView>
//           <LoginForm onLogin={handleLogin} />
//         </>
//       ) : (
//         <ThemedView style={styles.loggedContainer}>
//           <ThemedText type="title" style={styles.title}>You are logged in!</ThemedText>
//           <ThemedText type="title" style={styles.title}>Hay Chọn loại xe!</ThemedText>

//           <CarSelectionScreen />

//         </ThemedView>
//       )}
//     </ThemedView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   titleContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   loggedContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default LoginScreen;




// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { useDispatch, useSelector } from 'react-redux';
// import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice';
// import LoginForm from '@/components/loginScreen/Login';
// import { RootState, AppDispatch } from '@/components/loginScreen/store';
// import CarSelectionScreen from '@/components/carSelection';

// const LoginScreen: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const dispatch: AppDispatch = useDispatch();
//   const auth = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     dispatch(checkAuthStatus()).then(() => {
//       if (auth.isAuthenticated) {
//         setIsLoggedIn(true);
//       }
//     });
//   }, [dispatch, auth.isAuthenticated]);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <View style={styles.container}>
//       {!isLoggedIn ? (
//         <LoginFormContainer onLogin={handleLogin} />
//       ) : (
//         <LoggedInContent />
//       )}
//     </View>
//   );
// };

// const LoginFormContainer: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
//   return (
//     <ThemedView style={styles.formContainer}>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title" style={styles.title}>Welcome!</ThemedText>
//       </ThemedView>
//       <LoginForm onLogin={onLogin} />
//     </ThemedView>
//   );
// };

// const LoggedInContent: React.FC = () => {
//   return (
//     <ThemedView style={styles.loggedContainer}>

//       <CarSelectionScreen />
      
//     </ThemedView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   formContainer: {
//     width: '100%',
//     maxWidth: 400,
//   },
//   titleContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//     marginTop: 30,
//   },
//   loggedContainer: {
//     // width: '100%',
//     // maxWidth: 800,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },

// });

// export default LoginScreen;
 



// import React, { useEffect, useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { useDispatch, useSelector } from 'react-redux';
// import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice';
// import LoginForm from '@/components/loginScreen/Login';
// import { RootState, AppDispatch } from '@/components/loginScreen/store';
// import CarSelectionScreen from '@/components/carSelection';

// const LoginScreen: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const dispatch: AppDispatch = useDispatch();
//   const auth = useSelector((state: RootState) => state.auth);

//   useEffect(() => {
//     dispatch(checkAuthStatus()).then(() => {
//       if (auth.isAuthenticated) {
//         setIsLoggedIn(true);
//       }
//     });
//   }, [dispatch, auth.isAuthenticated]);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <View style={styles.container}>
//       {!isLoggedIn ? (
//         <LoginFormContainer onLogin={handleLogin} />
//       ) : (
//         <LoggedInContent />
//       )}
//     </View>
//   );
// };

// const LoginFormContainer: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
//   return (
//     <ThemedView style={styles.formContainer}>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title" style={styles.title}>Welcome!</ThemedText>
//       </ThemedView>
//       <LoginForm onLogin={onLogin} />
//     </ThemedView>
//   );
// };

// const LoggedInContent: React.FC = () => {
//   return (
//     <ThemedView style={styles.loggedContainer}>

//       <CarSelectionScreen />
      
//     </ThemedView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//   },
//   formContainer: {
//     width: '100%',
//     maxWidth: 400,
//   },
//   titleContainer: {
//     alignItems: 'center',
//     marginBottom: 30,
//     marginTop: 30,
//   },
//   loggedContainer: {
//     // width: '100%',
//     // maxWidth: 800,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },

// });

// export default LoginScreen;


import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthStatus } from '@/components/loginScreen/actions/authSlice';
import LoginForm from '@/components/loginScreen/Login';
import { RootState, AppDispatch } from '@/components/loginScreen/store';
import { useRouter } from 'expo-router';

const LoginScreen: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    dispatch(checkAuthStatus()).then(() => {
      if (auth.isAuthenticated) {
        router.push('/mapcarSelection'); 
      }
    });
  }, [dispatch, auth.isAuthenticated, router]);

  const handleLogin = () => {
    router.push('/mapcarSelection'); 
  };

  return (
    <View style={styles.container}>
      <LoginFormContainer onLogin={handleLogin} />
    </View>
  );
};

const LoginFormContainer: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  return (
    <ThemedView style={styles.formContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Welcome!</ThemedText>
      </ThemedView>
      <LoginForm onLogin={onLogin} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
