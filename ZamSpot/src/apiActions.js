import axios from 'axios';
import apiKey from './apiKey';

const api = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place',
});

export const searchAddress = term => {
  const response = api.post(`/autocomplete/json?key=${apiKey}&input=${term}`);
  return response;
};
