import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import Icons from "react-native-vector-icons/Ionicons";
import IconsAnt from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { COLORS, images } from "../Constants";

interface IHeaderProps {
  from?: string;
  headNavigation?: any;
}

const Header = ({ from, headNavigation }: IHeaderProps) => {
  const [visibleArrow, setVisibleArrow] = useState(false);
  const [dropDownVisible, setDropDownVisible] = useState(false);

  const closeDrawer = () => setDropDownVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWithMenuContainer}>
        {from == "Home" ? (
          <View style={styles.innerContainer}>
            {/* Instagram Logo */}
            <TouchableOpacity
              activeOpacity={1}
              style={styles.imageContainer}
              onPress={() => {
                setVisibleArrow(true);
                setDropDownVisible(true);
              }}
            >
              <FastImage
                source={images.logo}
                resizeMode="contain"
                style={styles.logo}
              />
            </TouchableOpacity>

            {/* Drop down : menu */}
            {visibleArrow && (
              <Menu
                visible={dropDownVisible}
                onDismiss={closeDrawer}
                style={styles.menuStyles}
                anchorPosition={"bottom"}
                statusBarHeight={hp(-1)}
                keyboardShouldPersistTaps="always"
                contentStyle={styles.menuContent}
                anchor={
                  <TouchableOpacity
                    style={styles.dropDownContainer}
                    activeOpacity={0.5}
                  >
                    <Icons
                      name="ios-chevron-down"
                      color={COLORS.black}
                      size={hp(2)}
                    />
                  </TouchableOpacity>
                }
              >
                <Menu.Item
                  leadingIcon="account-multiple-outline"
                  onPress={() => {
                    setDropDownVisible(false);
                    headNavigation("Profile");
                  }}
                  title="Following"
                />
                <Menu.Item
                  leadingIcon="star"
                  onPress={() => {
                    setDropDownVisible(false);
                    headNavigation("Profile");
                  }}
                  title="Favorites"
                />
              </Menu>
            )}
          </View>
        ) : (
          // header Title
          <View
            style={[
              styles.innerContainer,
              {
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <Text style={styles.headerTitleText}>{from}</Text>
          </View>
        )}

        {from == "Home" ? (
          <View style={[styles.innerContainer, { justifyContent: "flex-end" }]}>
            {/* Post & message Navigation */}
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.addPostContainer}
              onPress={() => headNavigation("Story")}
            >
              <IconsAnt
                name="plussquareo"
                color={COLORS.black}
                size={hp(3.5)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => headNavigation("DirectMessage")}
              style={[
                styles.messageContainer,
                {
                  marginHorizontal: hp(2),
                },
              ]}
            >
              <FontAwesome5
                name="facebook-messenger"
                color={COLORS.black}
                size={hp(3.5)}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.innerContainer} />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(7),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoWithMenuContainer: {
    flexDirection: "row",
    flex: 1,
  },
  imageContainer: {
    marginStart: hp(2),
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
  },
  logo: {
    width: hp(16),
    marginStart: hp(1),
    flex: 1,
  },
  dropDownContainer: {
    justifyContent: "center",
    flex: 1,
  },
  addPostContainer: {
    justifyContent: "center",
  },
  messageContainer: {
    justifyContent: "center",
  },
  menuStyles: {
    padding: 0,
    margin: 0,
  },
  menuContent: {
    backgroundColor: COLORS.white,
    margin: 0,
    padding: 0,
  },
  headerTitleText: {
    color: COLORS.black,
    fontSize: hp(2.8),
    fontFamily: "Nunito-Bold",
  },
});

export default Header;
