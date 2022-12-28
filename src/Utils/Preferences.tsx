import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value: object, key: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log('Store user singing data error in asyncstorage', e);
  }
};

export const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log('Getting error for asyncstorage', e);
  }
};
