import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { unit } from '@stylesheets';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BlankView from '../Common/BlankView';
import _ from 'lodash';

const CategoryTab = ({ list, onClickItem }) => {
  console.log(`list@@2`, list);
  const renderItem = ({ item }) => {
    console.log(`item`, item);
    return (
      <TouchableOpacity
        onPress={() => onClickItem(item.place.latitude, item.place.longitude)}>
        <View style={styles.container}>
          <Icon name="food-bank" size={unit(44)} color="#4fc4ff" />
          <BlankView size={unit(10)} horizontal />
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <BlankView size={unit(2)} />
            <Text style={styles.category}>{item.category}</Text>
            <BlankView size={unit(2)} />
            <Text style={styles.desc} numberOfLines={1}>
              {item.desc}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (_.isNil(list?.registerPlace) || _.isEmpty(list?.registerPlace))
    return null;
  console.log(`list?.registerPlace`, list?.registerPlace);
  return (
    <>
      <FlatList
        data={list.registerPlace.slice(0, 5)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={<BlankView size={unit(12)} horizontal />}
        ListFooterComponent={<BlankView size={unit(12)} horizontal />}
        ItemSeparatorComponent={() => <BlankView size={unit(12)} horizontal />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: unit(10),
    paddingBottom: unit(10),
    paddingRight: unit(18),
    paddingLeft: unit(18),
    backgroundColor: '#fff',
    borderRadius: unit(10),
    shadowColor: '#3d3d3d',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: unit(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: unit(15),
    fontWeight: '500',
  },
  category: {
    fontSize: unit(14),
  },
  desc: {
    fontSize: unit(14),
    color: '#a1a1a1',
  },
});

export default CategoryTab;
