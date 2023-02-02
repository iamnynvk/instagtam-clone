import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../Constants";

const StoriesDetail = ({ stories, clickOnStoriesItem }: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => clickOnStoriesItem(stories)}
    >
      <SafeAreaView style={styles.storiesViewContainer}>
        <View style={styles.imageContainer}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#e041d1", "#f79b08", "#dc2330"]}
            style={styles.linearGradientStyle}
          >
            <View style={styles.borderStyles}>
              <FastImage
                source={{ uri: stories.imageUri }}
                resizeMode="cover"
                style={styles.imageStyle}
              />
            </View>
          </LinearGradient>
          <View style={styles.userNameContainer}>
            <Text
              style={styles.userNameStyle}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {stories?.name}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

export default StoriesDetail;

const styles = StyleSheet.create({
  storiesViewContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: hp(0.1),
    marginTop: hp(1),
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    height: hp(8.5),
    width: hp(8.5),
    borderRadius: hp(4.25),
  },
  userNameContainer: {
    alignItems: "center",
    width: hp(11),
  },
  userNameStyle: {
    color: COLORS.black,
    fontFamily: "Nunito-Medium",
  },
  linearGradientStyle: {
    borderRadius: hp(4.75),
    width: hp(9.5),
    height: hp(9.5),
    justifyContent: "center",
    alignItems: "center",
  },
  borderStyles: {
    borderColor: "#fff",
    borderWidth: 4,
    borderRadius: hp(4.5),
    width: hp(9),
    height: hp(9),
    justifyContent: "center",
    alignItems: "center",
  },
});
