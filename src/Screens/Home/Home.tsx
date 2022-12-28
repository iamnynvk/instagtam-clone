import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../Components/Header';
import {COLORS} from '../../Constants';
import {setUserDetail} from '../../Slices/UserSlice';

const Home = (props: any) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default Home;
