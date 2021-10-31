import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const List = () => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default List;
