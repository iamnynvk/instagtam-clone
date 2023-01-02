import { FlashList } from "@shopify/flash-list";
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
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const PostDetail = ({ postItem }: any) => {
  console.log("postItem --->", postItem);
  return (
    <SafeAreaView style={styles.container}>
      {/* Post-Header Component */}
      <View style={styles.headerContainer}>
        {/* User Image */}
        <View>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#e041d1", "#f79b08", "#dc2330"]}
            style={[styles.linearGradientStyle, {}]}
          >
            {postItem?.isStory ? (
              <View style={styles.borderStyles}>
                <FastImage
                  source={{
                    uri: postItem?.userImageUrl,
                  }}
                  resizeMode={"cover"}
                  style={{ height: hp(4), width: hp(4), borderRadius: hp(2) }}
                />
              </View>
            ) : (
              <FastImage
                source={{
                  uri: postItem?.userImageUrl,
                }}
                resizeMode={"cover"}
                style={{
                  height: hp(4.5),
                  width: hp(4.5),
                  borderRadius: hp(2.25),
                }}
              />
            )}
          </LinearGradient>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.userNameText}>{postItem?.userName}</Text>
          <Text style={styles.functionalityText}>{postItem?.location}</Text>
        </View>
        <View style={styles.photoMenuContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icons name="dots-vertical" size={hp(2.8)} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp(1),
  },
  headerContainer: {
    flexDirection: "row",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.border,
    padding: hp(1),
  },
  borderStyles: {
    borderColor: "#fff",
    borderWidth: 4,
    borderRadius: hp(2.1),
    width: hp(4.2),
    height: hp(4.2),
    justifyContent: "center",
    alignItems: "center",
  },
  linearGradientStyle: {
    borderRadius: hp(2.25),
    width: hp(4.5),
    height: hp(4.5),
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    marginStart: hp(1),
    flex: 1,
  },
  photoMenuContainer: {
    flex: 0.1,
    justifyContent: "center",
  },
  userNameText: {
    fontFamily: "Nunito-Bold",
    fontSize: hp(1.8),
    padding: 0,
    margin: 0,
  },
  functionalityText: {
    padding: 0,
    margin: 0,
    fontFamily: "Nunito-Medium",
    fontSize: hp(1.5),
  },
});

export default PostDetail;
