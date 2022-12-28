import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {images} from '../Constants';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Instagram Logo */}
      <View style={styles.logowithMenuContainer}>
        <FastImage
          source={images.logo}
          resizeMode="cover"
          style={styles.imageContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logowithMenuContainer: {
    flexDirection: 'row',
    borderWidth: 1,
  },
  imageContainer: {
    width: '50%',
  },
});

export default Header;
