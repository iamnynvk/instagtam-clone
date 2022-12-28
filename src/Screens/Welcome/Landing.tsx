import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS, images} from '../../Constants';

const Landing = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.imageStyles}
          source={images.logo}
          resizeMode={'contain'}
        />
      </View>

      <View style={styles.signUpContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signUpButton}
          onPress={() => props?.navigation?.navigate('SignUpStepOne')}>
          <Text style={styles.singUpText}>Create New Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logInContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signUpButton}
          onPress={() => props?.navigation?.navigate('SignIn')}>
          <Text style={styles.logInText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '100%',
  },
  imageStyles: {
    height: hp(8),
    width: '100%',
  },
  signUpContainer: {
    marginTop: hp(6),
    borderRadius: hp(1),
    backgroundColor: COLORS.facebook,
  },
  signUpButton: {
    width: '100%',
    paddingHorizontal: hp(12),
    paddingVertical: hp(1.5),
  },
  singUpText: {
    color: COLORS.white,
    fontFamily: 'Nunito-Medium',
  },
  logInButton: {
    width: '100%',
  },
  logInContainer: {
    borderRadius: hp(1),
    marginTop: hp(2),
  },
  logInText: {
    color: COLORS.facebook,
    fontFamily: 'Nunito-Medium',
  },
});

export default Landing;
