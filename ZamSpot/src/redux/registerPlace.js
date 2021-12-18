import _ from 'lodash';

export const registerPlace = {
  name: '베트남이랑',
  category: '베트남',
  desc: '점심 세트가 가성비 있고, 좋아요!',
  place: { latitude: '37.498278391167815', longitude: '127.02615637332201' },
};

export const setRegisterPlace = (name, category, desc, place) => {
  return {
    type: 'SET_REGISTER_PLACE',
    registerPlace: { name, category, desc, place },
  };
};

export const initRegisterPlace = list => {
  return {
    type: 'INIT_REGISTER_PLACE',
    registerPlaceList: list,
  };
};

export const registerPlaceReducer = (state = registerPlace, action) => {
  switch (action.type) {
    case 'SET_REGISTER_PLACE':
      return [...state, action.registerPlace];
    case 'INIT_REGISTER_PLACE':
      return [...state, action.registerPlaceList];
    default:
      return [state];
  }
};
