import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { unit } from '@stylesheets';

const categoryTabList = [
  'allCategory',
  'weaternFood',
  'chineseFood',
  'koreanFood',
  'etcFood',
];

const CategoryTab = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={categoryTabList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        horizontal
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: unit(44),
    paddingRight: unit(18),
    paddingLeft: unit(18),
  },
});

export default CategoryTab;
