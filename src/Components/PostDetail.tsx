import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  TouchableNativeFeedback,
  TextInput,
} from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../Constants";
import Video from "react-native-video";
import Lottie from "lottie-react-native";
import PressTapClick from "../Hooks/PressTapClick";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcons from "react-native-vector-icons/Ionicons";

const PostDetail = ({ postItem, likeUserPost }: any) => {
  const [mentionAndVolumeFocus, setMentionAndVolumeFocus] = useState(true);
  const [tapLike, setTapLike] = useState(false);

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setMentionAndVolumeFocus(false);
    }, 3000);

    return () => clearTimeout(subscribe);
  }, [mentionAndVolumeFocus]);

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
              {postItem?.location || ""}
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
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
      >
        {postItem?.media?.map((item: any, index: any) => {
          return (
            <View
              key={index}
              style={styles.imageStyles}
              onTouchStart={() => setMentionAndVolumeFocus(true)}
            >
              <PressTapClick
                onSingleTap={() => likeUserPost(postItem)}
                onDoubleTap={() => setTapLike(true)}
              >
                {item?.type === "photo" ? (
                  <FastImage
                    source={{ uri: item?.imageUrl }}
                    resizeMode={"contain"}
                    style={styles.postPhotoContainer}
                  />
                ) : (
                  <Video
                    source={{ uri: item?.imageUrl }}
                    style={[styles.videoStyles]}
                    playInBackground={false}
                    playWhenInactive={false}
                    resizeMode="contain"
                  />
                )}
                {item?.type === "photo" && item?.mention
                  ? mentionAndVolumeFocus && (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.photoVideo}
                      >
                        <Icon name="user" size={hp(1.9)} color={COLORS.white} />
                      </TouchableOpacity>
                    )
                  : mentionAndVolumeFocus &&
                    item?.mention && (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.photoVideo}
                      ></TouchableOpacity>
                    )}
              </PressTapClick>
            </View>
          );
        })}
      </ScrollView>

      {/* Like Share & Comment Section */}
      <View style={styles.menuBarContainer}>
        <View style={styles.likeShareCommentContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <IonIcons
              name="ios-heart-outline"
              color={COLORS.black}
              size={hp(3.9)}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={{ marginStart: hp(2) }}>
            <IonIcons
              name="chatbubble-outline"
              color={COLORS.black}
              size={hp(3.5)}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={{ marginStart: hp(2) }}>
            <IonIcons
              name="ios-paper-plane-outline"
              color={COLORS.black}
              size={hp(3.5)}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity activeOpacity={0.7} style={{}}>
            <IonIcons
              name="cloud-download-outline"
              color={COLORS.black}
              size={hp(3.5)}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Like Counts */}
      <View style={styles.likesContainer}>
        <Text style={styles.likeText}>24,125 likes</Text>
      </View>

      {/* Descriptions */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          <Text style={styles.publisherNameText}>iamnynyvk</Text> Hello my name
          is nyn vekariya, Hello my name is nyn vekariya Hello my name is nyn
          vekariya Hello my name is nyn vekariya
        </Text>
      </View>

      <View style={styles.commentContainer}>
        <TouchableOpacity>
          <Text style={styles.commentLink}>View all 66 comments</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.writeCommentContainer}>
        <View style={styles.userImageContainer}>
          <FastImage
            source={{
              uri: postItem?.userImageUrl,
            }}
            resizeMode={"cover"}
            style={{ height: hp(4), width: hp(4), borderRadius: hp(2) }}
          />
        </View>
        <View style={{ width: "80%" }}>
          <TextInput
            placeholder="Add a comment..."
            style={styles.commentText}
            placeholderTextColor={COLORS.lightWhite}
          />
        </View>
      </View>

      <View style={styles.postLiveTimeContainer}>
        <Text style={styles.postLiveTime}>21 hours ago</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: hp(94),
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
  postPhotoContainer: {
    height: hp(60),
    width: "100%",
  },
  imageStyles: {
    width: Dimensions.get("screen").width,
    borderBottomWidth: 0.5,
    borderColor: COLORS.border,
  },
  videoStyles: {
    height: "100%",
  },
  photoVideo: {
    position: "absolute",
    bottom: hp(2),
    right: hp(2.5),
    width: hp(2.8),
    height: hp(2.8),
    borderRadius: hp(1.4),
    backgroundColor: "#888a",
    justifyContent: "center",
    alignItems: "center",
  },
  menuBarContainer: {
    height: hp(6),
    flexDirection: "row",
  },
  likeShareCommentContainer: {
    flex: 1,
    flexDirection: "row",
    marginStart: hp(2),
    alignItems: "center",
  },
  saveButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: hp(2),
    alignItems: "center",
  },
  likesContainer: {
    marginHorizontal: hp(2),
  },
  likeText: {
    fontSize: hp(1.6),
    fontFamily: "Nunito-Bold",
  },
  descriptionContainer: {
    marginHorizontal: hp(1.6),
    flexDirection: "row",
  },
  publisherNameText: {
    fontSize: hp(1.6),
    fontFamily: "Nunito-ExtraBold",
  },
  descriptionText: {
    marginStart: hp(0.5),
    fontSize: hp(1.6),
    fontFamily: "Nunito-Medium",
    textAlign: "justify",
  },
  commentContainer: {
    marginHorizontal: hp(2),
    marginTop: hp(0.5),
  },
  commentLink: {
    color: COLORS.lightWhite,
    fontSize: hp(1.6),
    fontFamily: "Nunito-Medium",
  },
  writeCommentContainer: {
    flexDirection: "row",
  },
  userImageContainer: {
    marginTop: hp(1),
    marginHorizontal: hp(1.6),
  },
  commentText: {
    fontFamily: "Nunito-Medium",
    fontSize: hp(1.6),
  },
  postLiveTimeContainer: {
    marginHorizontal: hp(2),
    marginBottom: hp(0.8),
  },
  postLiveTime: {
    fontSize: hp(1.3),
    color: COLORS.lightWhite,
  },
});

export default PostDetail;
