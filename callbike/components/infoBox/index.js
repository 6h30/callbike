
// import React from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { useSelector } from 'react-redux';


// const InfoBox = () => {
//   const { routeDuration, routeDistance, destination, pickupLocation } = useSelector(state => state.map);
//   const { selectedCarType } = useSelector(state => state.car);

//   const calculatePrice = (distance) => {
//     const baseFee = 10000;
//     const additionalFee = 4000;
//     const totalDistance = parseFloat(distance);
//     const totalPrice = totalDistance <= 1 ? baseFee : baseFee + (totalDistance - 1) * additionalFee;
//     return totalPrice.toFixed(0);
//   };

//   const totalPrice = routeDistance ? calculatePrice(routeDistance) : null;

//   if (routeDuration === null || routeDistance === null || !destination.formattedAddress) {
//     return null; // Không hiển thị nếu không có thông tin
//   }

//   const mockFetchDriverInfo = async () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({
//           drivers: [
//             {
//               id: 1,
//               name: "Nguyen Van A",
//               carType: "Sedan",
//               licensePlate: "29A-12345",
//               phoneNumber: "0123456789",
//               currentLocation: {
//                 latitude: 21.028511,
//                 longitude: 105.804817
//               }
//             },
//             {
//               id: 2,
//               name: "Tran Van B",
//               carType: "SUV",
//               licensePlate: "30B-54321",
//               phoneNumber: "0987654321",
//               currentLocation: {
//                 latitude: 21.028511,
//                 longitude: 105.804817
//               }
//             }
//           ]
//         });
//       }, 1000); // Giả lập thời gian chờ của API
//     });
//   };

//   const handleFindDriver = async () => {
//     try {
//       const data = await mockFetchDriverInfo();
//       setDriverInfo(data);
//       router.push('/findDriver', { driverInfo: data }); // Chuyển hướng đến trang 'FindDriver' cùng với thông tin tài xế
//     } catch (error) {
//       Alert.alert('Error', error.message);
//     }
//   };

//   return (
//     <View style={styles.infoBox}>
//       <Text style={styles.infoText}>Điểm đón: {pickupLocation.formattedAddress}</Text>
//       <Text style={styles.infoText}>Điểm đến: {destination.formattedAddress}</Text>
//       <Text style={styles.infoText}>Khoảng cách: {routeDistance} km</Text>
//       <Text style={styles.infoText}>Loại xe: {selectedCarType}</Text>
//       <Text style={styles.infoText}>Thời gian dự kiến: {routeDuration} phút</Text>
//       <Text style={styles.infoText}>Giá cước: {totalPrice} VND</Text>
//       <Button title="Tìm tài xế" onPress={(handleFindDriver) => {}} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   infoBox: {
//     padding: 20,
//     backgroundColor: '#F5F5F5',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2, // For Android shadow
//     margin: 10,
//   },
//   infoText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   button: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#2196F3',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default InfoBox;



import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useRouter } from 'expo-router';

const InfoBox = () => {
  const { routeDuration, routeDistance, destination, pickupLocation } = useSelector(state => state.map);
  const { selectedCarType } = useSelector(state => state.car);
  const router = useRouter();

  const calculatePrice = (distance) => {
    const baseFee = 10000;
    const additionalFee = 4000;
    const totalDistance = parseFloat(distance);
    const totalPrice = totalDistance <= 1 ? baseFee : baseFee + (totalDistance - 1) * additionalFee;
    return totalPrice.toFixed(0);
  };

  const totalPrice = routeDistance ? calculatePrice(routeDistance) : null;

  if (routeDuration === null || routeDistance === null || !destination.formattedAddress) {
    return null; // Không hiển thị nếu không có thông tin
  }

  const handleFindDriver = () => {
    router.push({
      pathname: '/findDriver',
      params: {
        pickupLocation: JSON.stringify(pickupLocation),
        destination: JSON.stringify(destination)
      }
    });
  };

  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoText}>Điểm đón: {pickupLocation.formattedAddress}</Text>
      <Text style={styles.infoText}>Điểm đến: {destination.formattedAddress}</Text>
      <Text style={styles.infoText}>Khoảng cách: {routeDistance} km</Text>
      <Text style={styles.infoText}>Loại xe: {selectedCarType}</Text>
      <Text style={styles.infoText}>Thời gian dự kiến: {routeDuration} phút</Text>
      <Text style={styles.infoText}>Giá cước: {totalPrice} VND</Text>
      <Button title="Tìm tài xế" onPress={handleFindDriver} />
    </View>
  );
};

const styles = StyleSheet.create({
  infoBox: {
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // For Android shadow
    margin: 10,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InfoBox;

