import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CheckBox from '@react-native-community/checkbox';
import Icons from 'react-native-vector-icons/Ionicons';
import {Validation} from '../../Hooks/InputValidation';

const SignUpStepTwo = (props: any) => {
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  useEffect(() => {
    if (password) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
      setPasswordError('');
    }
  }, [password]);

  const rememberData = () => {
    setChecked(!checked);
    (global as any).checked = !checked;
  };

  const stepTwoHandler = () => {
    const error = Validation({passwordValue: password});
    if (error?.password) {
      setPasswordError(error?.password);
    } else {
      props?.navigation?.replace('WelcomeToInsta', {
        userName: props?.route?.params?.userName,
        password: password,
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Create a password</Text>
        <Text style={styles.childText}>
          For security, your password must be 6 characters or more
        </Text>
      </View>
      <TextInput
        style={[
          styles.textInputContent,
          {borderColor: passwordError ? COLORS.RedOrange : COLORS.border},
        ]}
        placeholder="Password"
        keyboardType="default"
        secureTextEntry={hidePassword}
        onChangeText={v => setPassword(v)}
      />
      {/* Hide password icon */}
      {password && (
        <TouchableOpacity
          style={styles.hidePasswordIcon}
          onPress={() => setHidePassword(!hidePassword)}>
          {hidePassword ? (
            <Icons name="eye-outline" color="#318bfb" size={hp(2.5)} />
          ) : (
            <Icons name="eye-off-outline" size={hp(2.5)} color="#333" />
          )}
        </TouchableOpacity>
      )}

      {passwordError && (
        <Text style={styles.passwordErrorText}>{passwordError}</Text>
      )}

      <View style={styles.checkBoxContainer}>
        <CheckBox
          testID="check-01"
          tintColors={{true: COLORS.facebook, false: 'none'}}
          onValueChange={rememberData}
          value={checked}
        />
        <Text style={styles.rememberText}>Remember password</Text>
      </View>
      <View style={[styles.nextContainer, {opacity: isDisable ? 0.5 : 1}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={isDisable}
          style={styles.nextButton}
          onPress={stepTwoHandler}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const WelcomeToInsta = (props: any) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Text style={styles.headingText}>Welcome to Instagram,</Text>
      <Text style={styles.headingText}>@{props?.route?.params?.userName}</Text>
      <Text style={styles.description}>
        We'll add the email and phone number to @
        {props?.route?.params?.userName}. You can update this info anytime in
        setting, or enter new info now
      </Text>

      <View style={[styles.nextContainer, {width: '80%'}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.nextButton}
          onPress={() =>
            props?.navigation?.navigate('CompleteSignUp', {
              userName: props?.route?.params?.userName,
              password: props?.route?.params?.password,
            })
          }>
          <Text style={styles.nextText}>Complete sign up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.normalTxt}>
          We'll add private info to iamnynv. See
        </Text>
        <TouchableOpacity>
          <Text style={styles.links}> Terms</Text>
        </TouchableOpacity>
        <Text style={styles.normalTxt}>, </Text>
        <TouchableOpacity>
          <Text style={styles.links}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.normalTxt}> and </Text>
        <TouchableOpacity>
          <Text style={styles.links}>Cookies Policy</Text>
        </TouchableOpacity>
        <Text style={styles.normalTxt}>.</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headingContainer: {
    marginTop: hp(5),
    alignItems: 'center',
  },
  headingText: {
    color: COLORS.black,
    fontSize: hp(3.3),
    fontFamily: 'Nunito-Medium',
  },
  childText: {
    marginTop: hp(1.8),
    color: COLORS.lightWhite,
    fontFamily: 'Nunito-Medium',
    marginHorizontal: hp(5),
    textAlign: 'center',
  },
  textInputContent: {
    borderWidth: 1,
    marginTop: hp(3),
    marginHorizontal: hp(5),
    borderRadius: hp(1),
    paddingStart: hp(2),
    paddingEnd: hp(2),
    paddingVertical: hp(1.5),
    fontFamily: 'Nunito-Medium',
  },
  nextContainer: {
    marginTop: hp(3),
    marginHorizontal: hp(5),
    borderRadius: hp(1),
    backgroundColor: COLORS.facebook,
    alignItems: 'center',
  },
  nextButton: {
    width: '100%',
    paddingHorizontal: hp(12),
    paddingVertical: hp(1.5),
  },
  nextText: {
    color: COLORS.white,
    fontFamily: 'Nunito-Medium',
    alignSelf: 'center',
  },
  checkBoxContainer: {
    marginHorizontal: hp(4),
    marginTop: hp(1),
    padding: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontFamily: 'Nunito-Medium',
    fontSize: hp(1.8),
  },
  description: {
    marginHorizontal: hp(4),
    marginTop: hp(2),
    textAlign: 'center',
    fontSize: hp(1.8),
    flexDirection: 'row',
    fontFamily: 'Nunito-Medium',
  },
  bottomContainer: {
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: hp(2),
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  normalTxt: {
    textAlign: 'center',
    fontSize: hp(1.8),
    fontFamily: 'Nunito-Medium',
  },
  links: {
    textAlign: 'center',
    fontSize: hp(1.8),
    fontFamily: 'Nunito-Bold',
    color: COLORS.facebook,
  },
  hidePasswordIcon: {
    position: 'absolute',
    right: hp(5.5),
    top: hp(20.21),
    alignItems: 'center',
    padding: 12,
  },
  passwordErrorText: {
    marginHorizontal: hp(5),
    marginTop: hp(1),
    color: COLORS.RedOrange,
    fontFamily: 'Nunito-Medium',
    fontSize: hp(1.8),
  },
});

export default SignUpStepTwo;
