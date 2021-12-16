export const registerPlace = {
  name: '',
  category: '',
  rating: '',
  place: {},
};

export const setRegisterPlace = (name, category, rating, place) => {
  return {
    type: 'SET_REGISTER_PLACE',
    registerPlace: { name, category, rating, place },
  };
};

export const registerPlaceReducer = (state = registerPlace, action) => {
  switch (action.type) {
    case 'SET_REGISTER_PLACE':
      return [...state, action.registerPlace];
    default:
      return [state];
  }
};
