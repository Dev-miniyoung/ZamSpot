import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements/dist/header';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { unit, getHitSlop } from '@stylesheets';
import { useTranslation } from 'react-i18next';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import _ from 'lodash';
import { apiKey } from '../../apiKey';

const Search = () => {
  const [searchData, setSearchData] = useState(null);
  const [keyword, setKeyword] = useState('');
  const navigation = useNavigation();

  const { i18n } = useTranslation();

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

  return (
    <>
      <Header
        placement="left"
        leftComponent={<RenderHeaderLeft />}
        leftContainerStyle={styles.headerLeftContainer}
        containerStyle={styles.headerContainer}
      />

      <View style={styles.inputContainer}>
        <GooglePlacesAutocomplete
          minLength={2}
          autoFocus={false}
          listViewDisplayed="auto"
          placeholder={i18n.t('search')}
          returnKeyType={'default'}
          fetchDetails
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyA74DAP3R0oCQeqpt1gcfH-HmwhPB7BAUc',
            language: 'en',
          }}
          // requestUrl={{
          //   url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          //   useOnPlatform: 'web',
          // }}
          // currentLocation
          // currentLocationLabel="Current location"
          onFail={error => console.error(error)}
          getDefaultValue={() => ''}
          debounce={20}
          styles={{
            textInputContainer: {
              alignItems: 'center',
              justifyContent: 'center',
            },
            textInput: {
              height: unit(44),
              fontSize: 18,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
        />
      </View>
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
    marginBottom: unit(10),
  },
  headerLeftContainer: {
    justifyContent: 'center',
    width: unit(20),
  },
  inputContainer: {
    // position: 'absolute',
    // top: unit(44),
    // right: unit(0),
    paddingLeft: unit(12),
    paddingRight: unit(12),
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  searchTextInput: {
    width: '100%',
    height: unit(44),
    fontSize: unit(18),
  },
});

export default Search;
