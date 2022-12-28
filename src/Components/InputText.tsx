import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../Constants';

interface IPropsTypes {
  placeHolderText: string;
  refs: any;
  isSecure: boolean;
  handleValues(v: string): void;
  isAutoFocus?: boolean;
  isNextFocus?: any;
  keyType?: any;
  textContainer?: any;
  values?: string;
  maxLength?: number;
  hasError?: string;
}

const InputText = ({
  placeHolderText,
  refs,
  isSecure,
  handleValues,
  isAutoFocus,
  isNextFocus,
  keyType,
  textContainer,
  maxLength,
  hasError,
  values,
}: IPropsTypes) => {
  return (
    <View style={textContainer}>
      <TextInput
        ref={refs}
        style={[
          styles.textInputStyles,
          {borderColor: hasError ? COLORS.RedOrange : COLORS.border},
        ]}
        placeholder={placeHolderText}
        secureTextEntry={isSecure}
        onChangeText={v => handleValues(v)}
        autoFocus={isAutoFocus}
        value={values}
        keyboardType={keyType}
        maxLength={maxLength}
        onSubmitEditing={() => {
          isNextFocus?.current?.focus();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyles: {
    borderWidth: 1,
    marginHorizontal: hp(2),
    borderRadius: hp(1),
    paddingHorizontal: hp(2),
    fontFamily: 'Nunito-Medium',
    fontSize: hp(1.8),
  },
});

export default InputText;
