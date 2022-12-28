import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Icons from "react-native-vector-icons/Ionicons";
import IconsAnt from "react-native-vector-icons/AntDesign";
import { COLORS, images } from "../Constants";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Instagram Logo */}
      <View style={styles.logowithMenuContainer}>
        {/* <View style={styles.logoContainer}>
          <FastImage
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <TouchableOpacity
            style={styles.dropDownContainer}
            activeOpacity={0.5}
          >
            <Icons name="ios-chevron-down" color={COLORS.black} size={hp(2)} />
          </TouchableOpacity>
        </View>
        <View style={[styles.logoContainer, { width: hp(16), height: hp(7) }]}>
          <TouchableOpacity
            style={styles.dropDownContainer}
            activeOpacity={0.5}
          >
            <IconsAnt name="plussquareo" color={COLORS.black} size={hp(2)} />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logowithMenuContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
  },
  logo: {
    width: hp(16),
    height: hp(7),
  },
  dropDownContainer: {
    alignSelf: "center",
  },
});

export default Header;
