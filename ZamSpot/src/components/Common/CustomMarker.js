import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { unit } from '@stylesheets';
import _ from 'lodash';

const CustomMarker = ({
  coordinate,
  title,
  pinColor,
  description = '',
  customImage = '',
}) => {
  return (
    <>
      <Marker
        coordinate={{
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
        }}
        title={title}
        description={description}
        pinColor={pinColor}
        image={customImage}>
        {_.isNumber(customImage) && (
          <Image source={customImage} style={styles.markerImage} />
        )}
      </Marker>
    </>
  );
};

const styles = StyleSheet.create({
  markerImage: {
    width: unit(30),
    height: unit(30),
  },
});

export default CustomMarker;
