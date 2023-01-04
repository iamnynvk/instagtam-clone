import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { COLORS, images } from "../../Constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";
import InputText from "../../Components/InputText";
import Icons from "react-native-vector-icons/Ionicons";
import { ActivityIndicator } from "react-native-paper";
import { Validation } from "../../Hooks/InputValidation";
import { signInWithEmailPassword } from "../../Utils/Firebase";
import { storeData } from "../../Utils/Preferences";

interface ILoginInputs {
  emailValue: string;
  passwordValue: string;
}

const SignIn = (props: any) => {
  const emailUsernamePhoneRef = useRef();
  const passwordRef = useRef();
  const [loginInput, setLoginInput] = useState<ILoginInputs>({
    emailValue: "",
    passwordValue: "",
  });
  const [loginError, setLoginError] = useState({
    emailError: "",
    passwordError: "",
  });
  const [disable, setIsDisable] = useState<boolean>(true);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailValue = (value: string): any => {
    setLoginInput({
      ...loginInput,
      emailValue: value,
    });
  };

  const handlePasswordValue = (value: string): any => {
    setLoginInput({
      ...loginInput,
      passwordValue: value,
    });
  };

  // Button visible/disable logic
  useEffect(() => {
    if (loginInput?.emailValue && loginInput?.passwordValue) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
      setLoginError({
        ...loginError,
        emailError: "",
        passwordError: "",
      });
    }
  }, [loginInput?.emailValue, loginInput?.passwordValue]);

  // LoginHandler
  const loginHandler = async () => {
    setLoginError({
      emailError: "",
      passwordError: "",
    });

    setLoading(true);
    const error = Validation(loginInput);

    if (error?.email || error?.password) {
      setLoading(false);
      setLoginError({
        emailError: error?.email,
        passwordError: error?.password,
      });
    } else {
      try {
        const resultData: any = await signInWithEmailPassword(
          loginInput?.emailValue,
          loginInput?.passwordValue
        );
        if (resultData?.user) {
          await storeData(resultData, "userSignIn");
          props?.navigation.reset({
            index: 0,
            routes: [{ name: "Dashboard" }],
          });
        }
        setLoading(false);
      } catch (err: any) {
        if (err?.code === "auth/user-not-found") {
          Alert.alert("Warning!", err.message.split("] ")[1], [
            {
              text: "ok",
              onPress: () => setLoading(false),
            },
          ]);
        }
        if (err?.code === "auth/wrong-password") {
          Alert.alert("Warning!", err.message.split("] ")[1], [
            {
              text: "ok",
              onPress: () => setLoading(false),
            },
          ]);
        }
      }
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {/* Image container */}
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.imageStyles}
            source={images.logo}
            resizeMode={"contain"}
          />
        </View>

        {/* Text input container */}
        <View style={styles.textInputContainer}>
          <InputText
            refs={emailUsernamePhoneRef}
            placeHolderText="Phone number, username or email"
            isSecure={false}
            values={loginInput?.emailValue}
            handleValues={(v: string) => handleEmailValue(v)}
            isAutoFocus={true}
            isNextFocus={passwordRef}
            hasError={loginError?.emailError}
            keyType="email-address"
          />
          {/* Clear text inputs */}
          {loginInput?.emailValue && (
            <TouchableOpacity
              style={styles.clearTextInput}
              onPress={() =>
                setLoginInput({
                  ...loginInput,
                  emailValue: "",
                })
              }
            >
              <Icons name="close-outline" color={COLORS.black} size={hp(2.8)} />
            </TouchableOpacity>
          )}
          {loginError?.emailError && (
            <Text style={styles.errorText}>{loginError?.emailError}</Text>
          )}

          <InputText
            refs={passwordRef}
            textContainer={{ marginTop: hp(2) }}
            placeHolderText="Password"
            isSecure={hidePassword}
            handleValues={(v: string) => handlePasswordValue(v)}
            isNextFocus={passwordRef}
            hasError={loginError?.passwordError}
            keyType="default"
          />
          {/* Hide password icon */}
          {loginInput?.passwordValue && (
            <TouchableOpacity
              style={[
                styles.hidePasswordIcon,
                {
                  top: loginError?.passwordError
                    ? hp(12)
                    : loginError?.emailError
                    ? hp(12)
                    : hp(8.8),
                },
              ]}
              onPress={() => setHidePassword(!hidePassword)}
            >
              {hidePassword ? (
                <Icons name="eye-outline" color="#318bfb" size={hp(2.5)} />
              ) : (
                <Icons name="eye-off-outline" size={hp(2.5)} color="#333" />
              )}
            </TouchableOpacity>
          )}

          {loginError?.passwordError && (
            <Text style={styles.errorText}>{loginError?.passwordError}</Text>
          )}
        </View>

        {/* Show password & Forgot password container */}
        <View style={styles.forgotContainer}>
          <View style={styles.forgotTextContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Login button container */}
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={disable || loading}
          onPress={loginHandler}
          style={[styles.loginButtonContainer, { opacity: disable ? 0.5 : 1 }]}
        >
          {loading ? (
            <ActivityIndicator size="small" color={COLORS.white} />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        {/* OR Container */}
        <View style={styles.orContainer}>
          <View
            style={[
              styles.lineContainer,
              { marginStart: hp(3), marginEnd: hp(2) },
            ]}
          />
          <View style={styles.orContent}>
            <Text style={[styles.hidePassword, { color: "#919191" }]}>OR</Text>
          </View>
          <View
            style={[
              styles.lineContainer,
              { marginEnd: hp(3), marginStart: hp(2) },
            ]}
          />
        </View>

        {/* Login with facebook */}
        <TouchableOpacity activeOpacity={0.7} style={styles.facebookContainer}>
          <Icons name="logo-facebook" size={hp(2.5)} color={COLORS.facebook} />
          <Text style={[styles.forgotText, { color: COLORS.facebook }]}>
            {"  "}Log In With Facebook
          </Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.notAccountText}>Don't have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props?.navigation?.replace("SignUpStepOne")}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    marginTop: hp(10),
  },
  imageStyles: {
    height: hp(8),
    width: "100%",
  },
  textInputContainer: {
    marginTop: hp(8),
  },
  forgotContainer: {
    marginTop: hp(1),
    flexDirection: "row",
    marginHorizontal: hp(2),
    padding: hp(0.5),
    justifyContent: "flex-end",
  },
  hidePassword: {
    fontFamily: "Nunito-Medium",
    fontSize: hp(1.8),
  },
  forgotTextContainer: {
    alignSelf: "center",
  },
  forgotText: {
    color: COLORS.facebook,
    fontFamily: "Nunito-Bold",
    fontSize: hp(1.8),
  },
  loginButtonContainer: {
    marginTop: hp(4),
    height: hp(7),
    marginHorizontal: hp(3),
    borderRadius: hp(1),
    backgroundColor: COLORS.facebook,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: hp(2),
    fontFamily: "Nunito-ExtraBold",
  },
  orContainer: {
    flexDirection: "row",
    marginTop: hp(6),
    flex: 1,
  },
  lineContainer: {
    flex: 2,
    borderWidth: 0.3,
    backgroundColor: COLORS.gray,
    borderColor: COLORS.gray,
    height: 0,
    alignSelf: "center",
  },
  orContent: {
    flex: 0.5,
    alignItems: "center",
  },
  facebookContainer: {
    alignItems: "center",
    marginTop: hp(5),
    flexDirection: "row",
    alignSelf: "center",
  },
  bottomContainer: {
    borderTopWidth: 0.8,
    width: "100%",
    flex: 1,
    marginTop: hp(20),
    borderColor: COLORS.gray,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: hp(6),
  },
  notAccountText: {
    fontFamily: "Nunito-Regular",
    fontSize: hp(1.8),
  },
  signUpText: {
    color: COLORS.facebook,
    fontFamily: "Nunito-Bold",
  },
  clearTextInput: {
    position: "absolute",
    right: hp(2.2),
    top: hp(1),
    alignItems: "center",
    padding: 8,
  },
  hidePasswordIcon: {
    position: "absolute",
    right: hp(2.2),
    alignItems: "center",
    padding: 12,
  },
  errorText: {
    marginHorizontal: hp(2.3),
    marginTop: hp(1),
    color: COLORS.RedOrange,
    fontFamily: "Nunito-Medium",
    fontSize: hp(1.8),
  },
});

export default SignIn;
