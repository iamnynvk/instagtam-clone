import { FlashList } from "@shopify/flash-list";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { COLORS } from "../Constants";

const PostDetail = ({ postItem }: any) => {
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
            style={styles.linearGradientStyle}
          >
            <View style={styles.borderStyles}>
              <FastImage
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKuYwI7He6acEy8vkX41An6XRau7QGJJ4Hw&usqp=CAU",
                }}
                resizeMode={"cover"}
                style={styles.imageStyles}
              />
            </View>
          </LinearGradient>
        </View>
        <View></View>
        <View></View>
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
  imageStyles: {
    height: hp(5),
    width: hp(5),
    borderRadius: hp(2.5),
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
});

export default PostDetail;
