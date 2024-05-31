// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Button, Text } from 'react-native-elements';
// import { useDispatch } from 'react-redux';
// import { performLogout } from '../loginScreen/actions/authSlice';
// import { useRouter } from 'expo-router';

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleLogout = () => {
//     dispatch(performLogout());
//     router.replace('/login'); // Điều hướng đến trang login sau khi logout
//   };

//   return (
//     <View style={styles.container}>
//       <Text h1>Home</Text>
//       <Button title="Logout" onPress={handleLogout} buttonStyle={styles.button} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   button: {
//     marginTop: 20,
//     width: '100%',
//   },
// });

// export default HomePage;


// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { useRouter } from 'expo-router';

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   // Hàm xử lý khi nhấn nút login
//   const handleLogin = () => {
//     // Chuyển hướng đến trang đăng nhập
//     router.push('/login');
//   };

//   // Hàm xử lý khi nhấn nút xem hướng dẫn
//   const handleViewGuide = () => {
//     // Hiển thị hướng dẫn (có thể thay đổi logic cho phù hợp)
//     alert('View guide is clicked!');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to Homepage</Text>
//       {/* Nút login */}
//       <Button title="Login" onPress={handleLogin} />
      
//       {/* Nút xem hướng dẫn */}
//       <Button title="View Guide" onPress={handleViewGuide} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
// });

// export default HomePage;



import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { performLogout } from '../loginScreen/actions/authSlice';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

const HomePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(performLogout());
    router.replace('/login'); 
  };

  return (
    <View style={styles.container}>
      <ThemedText>Home</ThemedText>
      <Button title="Login" onPress={handleLogout} buttonStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginTop: 20,
    width: '100%',
  },
});

export default HomePage;




