// osrm
// import React, { useEffect, useState } from 'react';
// import MapView, { Polyline } from 'react-native-maps';
// import { View, ActivityIndicator, StyleSheet } from 'react-native';
// import axios from 'axios';

// const Directions = ({ destination, origin, onReady }) => {
//   const [route, setRoute] = useState(null);

//   useEffect(() => {
//     const fetchDirections = async () => {
//       const url = `http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`;

//       try {
//         const response = await axios.get(url);
//         const routeData = response.data.routes[0];
//         const coordinates = routeData.geometry.coordinates.map(([longitude, latitude]) => ({
//           latitude,
//           longitude,
//         }));
//         setRoute(coordinates);
//         if (onReady) {
//           onReady(routeData);
//         }
//       } catch (error) {
//         console.error('Error fetching directions:', error);
//       }
//     };

//     fetchDirections();
//   }, [origin, destination, onReady]);

//   if (!route) {
//     return (
//       <View style={styles.loading}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <Polyline
//       coordinates={route}
//       strokeWidth={3}
//       strokeColor="#222"
//     />
//   );
// };

// const styles = StyleSheet.create({
//   loading: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [{ translateX: -50 }, { translateY: -50 }],
//   },
// });

// export default Directions;


import React, { useEffect, useState } from 'react';
import { Polyline } from 'react-native-maps';
import MapView from 'react-native-maps';

const Directions = ({ destination, origin }) => {
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const getDirections = async () => {
      try {
        const response = await fetch(`http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=geojson`);
        const json = await response.json();
        const points = json.routes[0].geometry.coordinates.map(point => ({
          latitude: point[1],
          longitude: point[0],
        }));
        setCoordinates(points);
      } catch (error) {
        console.error(error);
      }
    };

    getDirections();
  }, [destination, origin]);

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: (origin.latitude + destination.latitude) / 2,
        longitude: (origin.longitude + destination.longitude) / 2,
        latitudeDelta: Math.abs(origin.latitude - destination.latitude) + 0.1,
        longitudeDelta: Math.abs(origin.longitude - destination.longitude) + 0.1,
      }}
    >
      <Polyline
        coordinates={coordinates}
        strokeWidth={3}
        strokeColor="#222"
      />
    </MapView>
  );
};

export default Directions;
