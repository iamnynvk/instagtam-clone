import React from "react";
import { FlashList } from "@shopify/flash-list";
import { SafeAreaView, StyleSheet } from "react-native";
import PostDetail from "./PostDetail";

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
      <FlashList
        data={POST_DATA}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostDetail postItem={item} />}
        estimatedItemSize={100}
        keyExtractor={(item, index: any) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PostManager;
