import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { unit, getHitSlop } from '@stylesheets';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';

interface Props {}

const SearchInput: FC<Props> = () => {
  const { i18n } = useTranslation();
  const navigation = useNavigation();

  const handleClickSearch = () => {
    navigation.push('Seacrh');
  };

  const handleClickList = () => {
    navigation.push('List');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleClickSearch}
        hitSlop={getHitSlop(10, 10, 10, 10)}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>{i18n.t('searchInput')}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={handleClickList}
          hitSlop={getHitSlop(10, 10, 10, 10)}>
          <Icon name="menu" size={unit(20)} color="#3d3d3d" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: unit(55),
    left: unit(0),
    width: unit(360),
    height: unit(44),
    paddingRight: unit(16),
    paddingLeft: unit(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: unit(10),
    justifyContent: 'center',
    paddingLeft: unit(20),
    width: unit(270),
    height: '100%',
    shadowColor: '#3d3d3d',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
  inputText: {
    fontSize: unit(16),
    fontWeight: '400',
    color: 'gray',
  },
  iconContainer: {
    width: unit(40),
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: unit(10),
    shadowColor: '#3d3d3d',
    shadowOffset: { width: 2, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 6,
  },
});

export default SearchInput;
