import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { Header } from 'react-native-elements';
import { unit, getHitSlop } from '@stylesheets';
import { useTranslation } from 'react-i18next';

import _ from 'lodash';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;

const LATITUDE_DELTA = 0.01;
const LOGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const defaultLatitude = 37.49954770759741;
const defaultLogntitude = 127.02579856902875;

const Place = () => {
  const [isActive, setActive] = useState(false);
  const [mapWidth, setMapWidth] = useState('99%');

  const mapRef = useRef(null);
  const { i18n } = useTranslation();
  const navigation = useNavigation();

  const updateMapWidth = () => {
    setMapWidth('100%');
  };

  const handleClickGoBack = () => {
    navigation.goBack(null);
  };

  const RenderHeaderLeft = () => {
    return (
      <TouchableOpacity
        onPress={handleClickGoBack}
        hitSlop={getHitSlop(10, 10, 10, 10)}>
        <View>
          <Icon name="arrow-back-ios" size={unit(20)} color="#3d3d3d" />
        </View>
      </TouchableOpacity>
    );
  };

  const RenderHeaderCenter = () => {
    return (
      <View style={styles.centerTitle}>
        <Text style={styles.titleText}>{i18n.t('searchPlaceTitle')}</Text>
      </View>
    );
  };

  const RenderHeaderRight = ({ activeSatus }) => {
    return (
      <TouchableOpacity
        onPress={handleClickGoBack}
        hitSlop={getHitSlop(10, 10, 10, 10)}>
        <View style={styles.rightHeader}>
          <Text
            style={[
              styles.titleText,
              { color: activeSatus ? 'skyblue' : 'gray' },
            ]}>
            {i18n.t('submit')}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Header
        placement="left"
        leftComponent={<RenderHeaderLeft />}
        centerComponent={<RenderHeaderCenter />}
        rightComponent={<RenderHeaderRight activeSatus={isActive} />}
        leftContainerStyle={styles.headerLeftContainer}
        containerStyle={styles.headerContainer}
      />
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={[styles.map, { width: mapWidth }]}
          provider={_.isEqual(Platform.OS, 'ios') ? '' : PROVIDER_GOOGLE}
          initialRegion={{
            latitude: defaultLatitude,
            longitude: defaultLogntitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LOGITUDE_DELTA,
          }}
          showsMyLocationButton
          showsUserLocation
          onMapReady={updateMapWidth}
        />
        <View style={styles.pinContainer}>
          <IconFont name="map-pin" size={unit(40)} color="red" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
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
  headerContainer: {
    backgroundColor: '#fff',
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: unit(1),
    paddingLeft: unit(20),
  },
  headerLeftContainer: {
    justifyContent: 'center',
    width: unit(20),
  },
  centerTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: unit(16),
  },
  rightHeader: {
    marginRight: unit(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinContainer: {
    position: 'absolute',
    top: screen.height / 3,
    left: screen.width / 2.2,
  },
});

export default Place;
