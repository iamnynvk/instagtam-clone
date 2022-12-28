import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../Constants';
import Icons from 'react-native-vector-icons/Ionicons';
import {Validation} from '../../Hooks/InputValidation';

const SignUpStepOne = (props: any) => {
  const [userName, setUserName] = useState<string>('');
  const [validationError, setValidationError] = useState<string>('');
  const [isDisable, setIsDisable] = useState<boolean>(true);

  useEffect(() => {
    if (userName) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
      setValidationError('');
    }
  }, [userName]);

  const nextStepHandler = () => {
    const error = Validation({userName: userName});
    if (error?.userName) {
      setValidationError(error?.userName);
    } else {
      props?.navigation?.navigate('SignUpStepTwo', {
        userName: userName.toLocaleLowerCase(),
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Choose username</Text>
        <Text style={styles.childText}>You can always changes it later.</Text>
      </View>

      <TextInput
        style={[
          styles.textInputContent,
          {borderColor: validationError ? COLORS.RedOrange : COLORS.border},
        ]}
        placeholder="Username"
        onChangeText={v => setUserName(v)}
        value={userName}
        maxLength={20}
      />
      {/* Clear text input */}
      {userName && (
        <TouchableOpacity
          style={styles.clearTextInput}
          onPress={() => {
            setUserName('');
            setValidationError('');
          }}>
          <Icons name="close-outline" color={COLORS.black} size={hp(2.8)} />
        </TouchableOpacity>
      )}
      {validationError && (
        <Text style={styles.errorText}>{validationError}</Text>
      )}

      <View style={[styles.nextContainer, {opacity: isDisable ? 0.5 : 1}]}>
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={isDisable}
          style={styles.nextButton}
          onPress={nextStepHandler}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  clearTextInput: {
    position: 'absolute',
    right: hp(5.5),
    top: hp(18),
    alignItems: 'center',
    padding: 8,
  },
  errorText: {
    marginHorizontal: hp(5),
    marginTop: hp(1),
    color: COLORS.RedOrange,
    fontSize: hp(1.8),
    fontFamily: 'Nunito-Medium',
  },
});

export default SignUpStepOne;
