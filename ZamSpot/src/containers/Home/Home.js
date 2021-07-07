import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;

const LATITUDE_DELTA = 0.01;
const LOGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Home = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.49954770759741,
          longitude: 127.02579856902875,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LOGITUDE_DELTA,
        }}>
        <Marker
          coordinate={{
            latitude: 37.49954770759741,
            longitude: 127.02579856902875,
          }}
          title="this is a marker"
          description="this is a marker example"
          pinColor="black"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Home;
