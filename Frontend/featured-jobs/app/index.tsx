import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import "../global.css";
import HomeScreen from "./screens/HomeScreen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import Entypo from '@expo/vector-icons/Entypo';

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const data = [{ key: "homeScreen" }];

  const renderItem = ({ item }: { item: { key: string } }) => {
    if (item.key === "homeScreen") {
      return <HomeScreen />;
    }
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-black h-screen">
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={
          <>
            <View className="flex-row justify-between items-center mb-6 mt-6 ml-6 mr-6">
              
              <View className="flex-row justify-between items-center">
                <Image
                  source={{ uri: "https://img.freepik.com/premium-vector/man-professional-business-casual-young-avatar-icon-illustration_1277826-623.jpg?semt=ais_hybrid" }}
                  className="rounded-full h-14 w-14 mr-2"
                />

              </View>

              <View className="border-2 border-[#1e1e1e] py-3 px-4 rounded-full" >
                <TouchableOpacity className=" flex flex-row items-center gap-2">
                <Text
                  className="text-white text-lg"
                  style={{ fontFamily: "Poppins_400Regular" }}
                >
                  Hyderabad
                </Text>
                <Text>
                <Entypo name="chevron-down" size={20} color="white" />
                </Text>
                </TouchableOpacity>
              </View >
              <View>
                <TouchableOpacity>
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color="white"
                  />
                </TouchableOpacity>
              </View>

            </View>

            <View>
              <Text
                className="text-gray-200 ml-6 text-lg "
                style={{ fontFamily: "Poppins_300Light" }}
              >
                Welcome Back
              </Text>
              <Text
                className="text-white ml-6 text-2xl "
                style={{ fontFamily: "Poppins_700Bold" }}
              >
                {" "}
                Your Username
              </Text>
            </View>



            <View className=" rounded-lg flex-row items-center justify-center px-4 mb-6 mt-6">
              <View className="flex-1 flex-row items-center justify-center bg-[#1e1e1e] px-4  rounded-[10px] lg:py-[15px] py-2 ">
                <Feather name="search" size={20} color="white" />
                <TextInput
                  placeholder="Search by role, project, or location"
                  placeholderTextColor="#b1b1b1"
                  className="flex-1 text-white ml-2  py-2 outline-none "
                  style={{ fontFamily: "Poppins_300Light" }}
                />
              </View>
              <TouchableOpacity className="ml-2 rounded-[10px] bg-violet-500 p-4">
                <Feather name="filter" size={20} color="white" />
              </TouchableOpacity>
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}