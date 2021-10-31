import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements/dist/header';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { unit, getHitSlop } from '@stylesheets';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

const Search = () => {
  const [searchData, setSearchData] = useState(null);
  const [keyword, setKeyword] = useState('');
  const navigation = useNavigation();

  const { i18n } = useTranslation();

  const handleClickGoBack = () => {
    navigation.goBack(null);
  };

  const handleChangeKeyword = text => {
    setKeyword(text);
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
      <TextInput
        value={keyword}
        onChangeText={handleChangeKeyword}
        placeholder={i18n.t('search')}
        style={styles.searchTextInput}
      />
    );
  };

  return (
    <>
      <Header
        placement="left"
        leftComponent={<RenderHeaderLeft />}
        leftContainerStyle={styles.headerLeftContainer}
        centerComponent={<RenderHeaderCenter />}
        containerStyle={styles.headerContainer}
      />
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  searchTextInput: {
    width: '100%',
    height: unit(44),
    fontSize: unit(18),
  },
});

export default Search;
