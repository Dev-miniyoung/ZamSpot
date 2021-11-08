import React, { useRef, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SearchInput, CategoryTab } from '@components/Home';
import { requestTrackingPermission } from 'react-native-tracking-transparency';

import { unit } from '@stylesheets';
import _ from 'lodash';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;

const LATITUDE_DELTA = 0.01;
const LOGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const defaultLatitude = 37.49954770759741;
const defaultLogntitude = 127.02579856902875;

const Home = () => {
  const [mapWidth, setMapWidth] = useState('99%');

  const mapRef = useRef(null);

  const updateMapWidth = () => {
    setMapWidth('100%');
  };

  // const animateToCoordinate = (lat, long) => {
  //   mapRef?.animateToRegion(
  //     {
  //       latitude: lat,
  //       longitude: long,
  //     },
  //     1000,
  //   );
  // };

  const trackingStatus = async () => {
    const response = await requestTrackingPermission();
  };
  if (trackingStatus() === 'authorized' || trackingStatus() === 'unavailable') {
    return null;
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={[styles.map, { width: mapWidth }]}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: defaultLatitude,
          longitude: defaultLogntitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LOGITUDE_DELTA,
        }}
        showsMyLocationButton
        showsUserLocation
        onMapReady={updateMapWidth}>
        {/* <Marker
          coordinate={{
            latitude: 37.49954770759741,
            longitude: 127.02579856902875,
          }}
          title={i18n.t('zamface')}
          description=""
          pinColor="black">
          {_.isNumber(images.zamfaceLogo) && (
            <Image source={images.zamfaceLogo} style={styles.iconLogo} />
          )}
        </Marker> */}
      </MapView>
      <View style={styles.searchView}>
        <SearchInput />
      </View>
      <View style={styles.categoryView}>
        <CategoryTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  map: {
    flex: 1,
    height: '100%',
  },
  iconLogo: {
    width: unit(30),
    height: unit(30),
  },
  searchView: {
    position: 'absolute',
    top: unit(55),
    left: unit(0),
  },
  categoryView: {
    position: 'absolute',
    top: unit(120),
    left: unit(0),
  },
});

export default Home;
