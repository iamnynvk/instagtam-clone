import { FlashList } from "@shopify/flash-list";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";

const STORY_DATA = [
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
  {
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
    name: "iamnynvk",
  },
];

const StoryManager = () => {
  const StoriesView = ({ stories }: any) => {
    return (
      <SafeAreaView style={styles.storiesViewContainer}>
        <View style={styles.imageContainer}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: hp(5),
              width: hp(10),
              height: hp(10),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FastImage
              source={{ uri: stories.imageUri }}
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.storyManagerContainer}>
      <FlashList
        data={STORY_DATA}
        renderItem={({ item }) => <StoriesView stories={item} />}
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
  storiesViewContainer: {
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    flex: 1,
    marginHorizontal: hp(1),
    marginTop: hp(1),
    borderWidth: 1,
  },
  imageStyle: {
    height: hp(9),
    width: hp(9),
    borderRadius: hp(4.5),
  },
});

export default StoryManager;
