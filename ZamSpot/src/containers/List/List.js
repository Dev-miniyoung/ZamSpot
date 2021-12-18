import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { unit, getHitSlop } from '@stylesheets';
import { useTranslation } from 'react-i18next';

import _ from 'lodash';
import BlankView from '../../components/Common/BlankView';

const List = () => {
  const { i18n } = useTranslation();
  const navigation = useNavigation();
  const placeList = useSelector(state => state);

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
        <Text style={styles.titleText}>{i18n.t('listTitle')}</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <View style={styles.itemContainer}>
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
      </>
    );
  };

  if (_.isNil(placeList?.registerPlace) || _.isEmpty(placeList?.registerPlace))
    return null;

  return (
    <>
      <Header
        placement="left"
        leftComponent={<RenderHeaderLeft />}
        centerComponent={<RenderHeaderCenter />}
        leftContainerStyle={styles.headerLeftContainer}
        containerStyle={styles.headerContainer}
      />
      <FlatList
        data={placeList.registerPlace}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={<BlankView size={unit(8)} />}
        ListFooterComponent={<BlankView size={unit(40)} />}
        showsVerticalScrollIndicator={false}
        style={{}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  itemContainer: {
    width: '100%',
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
    marginBottom: unit(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: unit(16),
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

export default List;
