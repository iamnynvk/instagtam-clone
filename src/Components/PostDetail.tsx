import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  PanResponder,
} from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../Constants";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Video from "react-native-video";

const PostDetail = ({ postItem }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Post-Header Container */}
      <View style={styles.headerContainer}>
        {/* User Image */}
        <View>
          {/* Navigate to other profile */}
          <TouchableOpacity activeOpacity={0.5}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={
                postItem?.userImageUrl
                  ? ["#e041d1", "#f79b08", "#dc2330"]
                  : ["#fff", "#fff", "#fff"]
              }
              style={[
                styles.linearGradientStyle,
                {
                  borderRadius: postItem?.isStory ? hp(2.25) : hp(2.1),
                  width: postItem?.isStory ? hp(4.5) : hp(4.2),
                  height: postItem?.isStory ? hp(4.5) : hp(4.2),
                },
              ]}
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
                    uri:
                      postItem?.userImageUrl ||
                      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg?20200418092106",
                  }}
                  resizeMode={"cover"}
                  style={{
                    height: hp(4.2),
                    width: hp(4.2),
                    borderRadius: hp(2.1),
                  }}
                />
              )}
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          {/* Navigate to other profile */}
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.userNameText}>
              {postItem?.userName || "Instagram User"}
            </Text>
          </TouchableOpacity>

          {/* Navigate to location panel */}
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.functionalityText}>
              {postItem?.location || "Location"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.photoMenuContainer}>
          <TouchableOpacity activeOpacity={0.5}>
            <Icons name="dots-vertical" size={hp(2.8)} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Post Photo&Video Container */}
      <ScrollView
        horizontal
        style={styles.postContainer}
        scrollEnabled
        pagingEnabled
      >
        {postItem?.media?.map((item: any, index: any) => {
          return (
            <View key={index} style={styles.imageStyles}>
              {item?.type === "photo" ? (
                <FastImage
                  source={{ uri: item?.imageUrl }}
                  resizeMode={"contain"}
                  style={styles.postPhotoContainer}
                />
              ) : (
                <Video
                  source={{ uri: item?.imageUrl }}
                  style={styles.videoStyles}
                  playInBackground={false}
                  playWhenInactive={false}
                />
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
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
  postContainer: {
    height: hp(60),
  },
  postPhotoContainer: {
    height: hp(60),
    width: "100%",
  },
  imageStyles: {
    width: Dimensions.get("screen").width,
    height: "100%",
  },
  videoStyles: {
    height: hp(60),
  },
});

export default PostDetail;
