import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../../Constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import InputText from '../../../Components/InputText';
import Icons from 'react-native-vector-icons/Ionicons';
import {
  createUserWithEmailPassword,
  storeDataIntoDatabase,
} from '../../../Utils/Firebase';
import {Validation} from '../../../Hooks/InputValidation';
import {storeData} from '../../../Utils/Preferences';

const CompleteSignUp = (props: any) => {
  const emailRef = useRef();
  const phoneRef = useRef();
  const [profileValue, setProfileValue] = useState({
    emailValue: '',
    phoneValue: '',
  });
  const [profileError, setProfileError] = useState({
    emailError: '',
    phoneError: '',
  });
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (profileValue?.emailValue && profileValue?.phoneValue) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
      setProfileError({
        ...profileError,
        emailError: '',
        phoneError: '',
      });
    }
  }, [profileValue?.emailValue && profileValue?.phoneValue]);

  const signUpHandler = async () => {
    setProfileError({
      emailError: '',
      phoneError: '',
    });

    setLoading(true);
    const error = Validation(profileValue);

    if (error?.email || error?.phoneValue) {
      setLoading(false);
      setProfileError({
        emailError: error?.email,
        phoneError: error?.phoneValue,
      });
    } else {
      try {
        const resultResponse: any = await createUserWithEmailPassword(
          profileValue?.emailValue,
          props?.route?.params?.password,
        );
        if (resultResponse?.user) {
          const userData = {
            ...{
              ...resultResponse?.additionalUserInfo,
              ...resultResponse?.user?._user,
              password: props?.route?.params?.password,
            },
            providerData: [
              {
                ...resultResponse?.user._user.providerData[0],
                phoneNumber: profileValue?.phoneValue,
                displayName: props?.route?.params?.userName,
              },
            ],
            phoneNumber: profileValue?.phoneValue,
            displayName: props?.route?.params?.userName,
          };

          await storeDataIntoDatabase(
            'users',
            resultResponse?.user?._user?.uid,
            userData,
          );

          global.checked && (await storeData(userData, 'userSignUp'));
          Alert.alert('Success!', 'Registration successfully ', [
            {
              text: 'ok',
              onPress: () =>
                props?.navigation.reset({
                  index: 0,
                  routes: [{name: 'Landing'}],
                }),
            },
          ]);
        }

        setLoading(false);
      } catch (err: any) {
        if (err?.code === 'auth/email-already-in-use') {
          Alert.alert('Warning!', err.message.split('] ')[1], [
            {
              text: 'ok',
              onPress: () => setLoading(false),
            },
          ]);
        }
        if (err?.code === 'auth/invalid-email') {
          Alert.alert('Warning!', err.message.split('] ')[1], [
            {
              text: 'ok',
              onPress: () => setLoading(false),
            },
          ]);
        }
      }
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Complete your profile</Text>
        <Text style={styles.childText}>
          Please provide your email-address. We'll send verification link in
          your mail.
        </Text>
      </View>

      <InputText
        placeHolderText="Email address"
        refs={emailRef}
        isSecure={false}
        isAutoFocus={true}
        hasError={profileError?.emailError}
        values={profileValue?.emailValue}
        keyType={'email-address'}
        handleValues={v => setProfileValue({...profileValue, emailValue: v})}
        textContainer={{marginTop: hp(5)}}
        isNextFocus={phoneRef}
      />
      {/* Clear text input */}
      {profileValue?.emailValue && (
        <TouchableOpacity
          style={styles.clearTextInput}
          onPress={() =>
            setProfileValue({
              ...profileValue,
              emailValue: '',
            })
          }>
          <Icons name="close-outline" color={COLORS.black} size={hp(2.8)} />
        </TouchableOpacity>
      )}
      {profileError?.emailError && (
        <Text style={styles.errorText}>{profileError?.emailError}</Text>
      )}

      <Text style={[styles.childText, {marginTop: hp(5)}]}>
        We'll send verification code in your mobile number.
      </Text>

      <InputText
        placeHolderText="Phone number"
        refs={phoneRef}
        isSecure={false}
        values={profileValue?.phoneValue}
        keyType={'number-pad'}
        hasError={profileError?.phoneError}
        handleValues={v => setProfileValue({...profileValue, phoneValue: v})}
        textContainer={{marginTop: hp(2)}}
        maxLength={10}
      />
      {/* Clear Phone text input */}
      {profileValue?.phoneValue && (
        <TouchableOpacity
          style={[
            styles.clearPhoneInput,
            {top: profileError?.emailError ? hp(44.5) : hp(40.9)},
          ]}
          onPress={() =>
            setProfileValue({
              ...profileValue,
              phoneValue: '',
            })
          }>
          <Icons name="close-outline" color={COLORS.black} size={hp(2.8)} />
        </TouchableOpacity>
      )}
      {profileError?.phoneError && (
        <Text style={styles.errorText}>{profileError?.phoneError}</Text>
      )}

      <View style={[styles.nextContainer, {opacity: isDisable ? 0.5 : 1}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.nextButton}
          disabled={isDisable || loading}
          onPress={signUpHandler}>
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.white} />
          ) : (
            <Text style={styles.nextText}>Submit</Text>
          )}
        </TouchableOpacity>
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
  nextContainer: {
    marginTop: hp(8),
    marginHorizontal: hp(2),
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
  clearTextInput: {
    position: 'absolute',
    right: hp(2.2),
    top: hp(22.4),
    alignItems: 'center',
    padding: 8,
  },
  clearPhoneInput: {
    position: 'absolute',
    right: hp(2.2),
    alignItems: 'center',
    padding: 8,
  },
  errorText: {
    marginHorizontal: hp(2),
    marginTop: hp(1),
    color: COLORS?.RedOrange,
    fontFamily: 'Nunito-Medium',
    fontSize: hp(1.8),
  },
});

export default CompleteSignUp;
