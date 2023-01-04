import React from "react";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView, StyleSheet, View } from "react-native";
import PostDetail from "./PostDetail";
import { ActivityIndicator } from "react-native-paper";
import { COLORS } from "../Constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const POST_DATA = [
  {
    isVerify: false,
    isStory: true,
    userName: "iamnynvk",
    userImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    location: "Surat, gujarat",
    share: "sharing link gen",
    hide: false,
    media: [
      {
        type: "photo",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
        mention: ["@nayan"],
      },
      {
        type: "video",
        imageUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mention: ["@nayan"],
      },
    ],
    likeCount: 230,
    description: "Hello",
    hashtags: ["#hello"],
    sponsered: false,
    music: [],
    isSave: false,
  },
  {
    isVerify: false,
    isStory: false,
    userName: "naayanvekariya",
    userImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    location: "Surat, gujarat",
    share: "sharing link gen",
    hide: false,
    media: [
      {
        type: "video",
        imageUrl:
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        mention: ["@nayan"],
      },
      {
        type: "photo",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
        mention: ["@nayan"],
      },
    ],
    likeCount: 230,
    description: "Hello",

    hashtags: ["#hello"],
    sponsered: false,
    music: [],
    isSave: false,
  },
];

const PostManager = () => {
  return (
    <SafeAreaView style={styles.container}>
      {!POST_DATA ? (
        <FlashList
          data={POST_DATA}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <PostDetail postItem={item} />}
          estimatedItemSize={100}
          keyExtractor={(item, index: any) => index}
        />
      ) : (
        <ActivityIndicator
          size={"small"}
          color={COLORS.black}
          style={{ padding: hp(10) }}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostManager;
