import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import { Header, Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFont from 'react-native-vector-icons/FontAwesome';
import { unit, getHitSlop } from '@stylesheets';
import { useTranslation } from 'react-i18next';

import BlankView from '@components/Common/BlankView';
import _ from 'lodash';

const Search = () => {
  const [isActive, setActive] = useState(false);
  const [registerName, setRegisterName] = useState('');
  const [registerCategory, setRegisterCategory] = useState('');
  const [registerRating, setRegisterRating] = useState('');

  const navigation = useNavigation();

  const { i18n } = useTranslation();
  console.log('registerName :>> ', registerName);
  const handleChangeTextInfo = (type, text) => {
    switch (type) {
      case 'name':
        setRegisterName(text);
        break;
      case 'category':
        setRegisterCategory(text);
        break;
      case 'rating':
        setRegisterRating(text);
        break;
      default:
        return;
    }
  };

  const handleClickGoBack = () => {
    navigation.goBack(null);
  };

  const handleClickRegisterPlace = () => {
    navigation.push('Place');
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
        <Text style={styles.titleText}>{i18n.t('searchTitle')}</Text>
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
    <View style={styles.viewContainer}>
      <Header
        placement="left"
        leftComponent={<RenderHeaderLeft />}
        centerComponent={<RenderHeaderCenter />}
        rightComponent={<RenderHeaderRight activeSatus={isActive} />}
        leftContainerStyle={styles.headerLeftContainer}
        containerStyle={styles.headerContainer}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        enabled
        keyboardVerticalOffset={unit(10)}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <BlankView size={unit(10)} />
            <View style={styles.textContainer}>
              <Input
                placeholder="식당 이름"
                onChangeText={text => handleChangeTextInfo('name', text)}
              />
            </View>
            <BlankView size={unit(10)} />
            <View style={styles.textContainer}>
              <Input
                placeholder="카테고리(ex. 분식, 카페 등)"
                onChangeText={text => handleChangeTextInfo('category', text)}
              />
            </View>
            <BlankView size={unit(10)} />
            <View style={styles.textContainer}>
              <Input
                placeholder="만족도"
                onChangeText={text => handleChangeTextInfo('rating', text)}
              />
            </View>
            <BlankView size={unit(10)} />
            <TouchableOpacity onPress={handleClickRegisterPlace}>
              <View style={[styles.textContainer]}>
                <BlankView size={unit(10)} horizontal />
                <View style={styles.spotContainer}>
                  <Text style={styles.text}>위치 등록 </Text>
                  <IconFont name="angle-right" size={unit(20)} color="gray" />
                </View>
                <BlankView size={unit(10)} horizontal />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingRight: unit(12),
    paddingLeft: unit(12),
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
  textContainer: {
    height: unit(40),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: unit(17),
    paddingBottom: unit(18),
    color: 'gray',
  },
  spotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default Search;
