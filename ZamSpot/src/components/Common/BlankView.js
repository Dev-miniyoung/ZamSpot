import React from 'react';
import { StyleSheet, View } from 'react-native';
import { unit } from '@stylesheets';

const BlankView = ({ size, horizontal }) => {
  const style = horizontal ? styles.horizontal : styles.vertical;
  const blank = horizontal ? { width: unit(size) } : { height: unit(size) };

  return <View style={[style, blank]} />;
};

const styles = StyleSheet.create({
  horizontal: {
    height: '100%',
  },
  width: {
    width: '100%',
  },
});

export default BlankView;
