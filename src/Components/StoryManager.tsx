import { FlashList } from "@shopify/flash-list";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import StoriesDetail from "./StoriesDetail";

const STORY_DATA = [
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk vekariya",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },

  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
];

const StoryManager = () => {
  const clickOnStory = (storyItem: any) => {
    console.log("Story ---->", storyItem);
  };

  return (
    <SafeAreaView style={styles.storyManagerContainer}>
      <FlashList
        data={STORY_DATA}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <StoriesDetail stories={item} clickOnStoriesItem={clickOnStory} />
        )}
        estimatedItemSize={100}
        horizontal={true}
        keyExtractor={(item, index: any) => index}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  storyManagerContainer: {
    flex: 1,
    height: hp(15),
  },
});

export default StoryManager;
