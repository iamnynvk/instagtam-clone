import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../../Constants";

// Components
import Header from "../../Components/Header";
import StoryManager from "../../Components/StoryManager";

const Home = (props: any) => {
  const HeaderNavigation = (screenName: string) => {
    props?.navigation?.navigate(screenName);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header from="Home" headNavigation={HeaderNavigation} />
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <StoryManager />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flex: 1,
  },
});

export default Home;
