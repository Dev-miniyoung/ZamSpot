import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { SearchInput, CategoryTab } from '@components/Home';
import { requestTrackingPermission } from 'react-native-tracking-transparency';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { unit } from '@stylesheets';
import _ from 'lodash';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch } from 'react-redux';

import { initRegisterPlace } from '../../redux/registerPlace';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;

const LATITUDE_DELTA = 0.01;
const LOGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const defaultLatitude = 37.49954770759741;
const defaultLongtitude = 127.02579856902875;

const Home = () => {
  const [mapWidth, setMapWidth] = useState('99%');
  const [loading, setLoading] = useState(true);
  const placeList = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    initRegisterPlaceList();
  }, []);

  const mapRef = useRef(null);

  const updateMapWidth = () => {
    setMapWidth('100%');
  };

  const handleClickItemAnimateToCoordinate = (lat, long) => {
    mapRef.current?.animateToRegion(
      {
        latitude: Number(lat),
        longitude: Number(long),
        longitudeDelta: LOGITUDE_DELTA,
        latitudeDelta: LATITUDE_DELTA,
      },
      1000,
    );
  };

  const initRegisterPlaceList = async () => {
    try {
      const response = await AsyncStorage.getItem('placeList');

      if (!_.isNil(response)) {
        dispatch(initRegisterPlace(JSON.parse(response)));
      }
    } catch (e) {
      console.log(`asyncStorage Error : `, e);
    } finally {
      setLoading(false);
    }
  };

  const trackingStatus = async () => {
    const response = await requestTrackingPermission();
  };

  if (trackingStatus() === 'authorized' || trackingStatus() === 'unavailable') {
    return null;
  }

  if (loading)
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
      </View>
    );

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={[styles.map, { width: mapWidth }]}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: defaultLatitude,
          longitude: defaultLongtitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LOGITUDE_DELTA,
        }}
        showsMyLocationButton
        showsUserLocation
        onMapReady={updateMapWidth}>
        {placeList.registerPlace.map(item => {
          return (
            <Marker
              coordinate={{
                latitude: item.place.latitude,
                longitude: item.place.longitude,
              }}
              title={item.name}
              description={item.desc}
              pinColor="black">
              <Icon name="food-bank" size={unit(44)} color="#4fc4ff" />
            </Marker>
          );
        })}
      </MapView>
      <View style={styles.searchView}>
        <SearchInput />
      </View>
      <View style={styles.categoryView}>
        <CategoryTab
          list={placeList}
          onClickItem={handleClickItemAnimateToCoordinate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
