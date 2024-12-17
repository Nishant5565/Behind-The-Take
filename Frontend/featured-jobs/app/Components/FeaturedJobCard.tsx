import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons} from "@expo/vector-icons";

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  featured: boolean;
}

const FeaturedJobCard = ({
  title,
  company,
  location,
  salary,
  featured,
}: Job) => {
  return (
    <View className="p-6 mt-6 rounded-[16px] bg-[#6b18e8] mb-4 shadow-lg ">
      <View className="flex flex-row items-center rounded-ful px-2 py-1 justify-between w-full">
        <View className="flex flex-row items-center gap-4  ">
          <Image
            source={{
              uri: "https://bcassetcdn.com/public/blog/wp-content/uploads/2022/12/08175143/colorful-3d-wave-letter-c-by-ions-brandcrowd.png",
            }}
            className="rounded-full h-16  w-16 mr-2 border-4 border-white bg-or"
          />
          <View>
            <Text
              className="text-xl text-white text-wrap w-40"
              style={{ fontFamily: "Poppins_600SemiBold" }}
            >
              {title}
            </Text>
            <Text
              className="text-sm text-white"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              {location}
            </Text>
          </View>
        </View>
        <View className=" flex flex-row items-center gap-2 py-2 px-4 rounded-full bg-[#ffffff46]">
            <Text
              className="text-white mt-1"
              style={{ fontFamily: "Poppins_600SemiBold" }}
            >
              Featured
            </Text>
            <Icon name="crown" size={22} color="white" />
          </View>
      </View>

      <Text className="text-xl mt-6 text-white"
        style={{ fontFamily: "Poppins_600SemiBold" }}
      >{salary}
      </Text>
      
      <View className=" flex flex-row items-center justify-between">

      <View className=" w-10 flex items-center flex-row gap-2">

      <TouchableOpacity className="  bg-[#ffffff46] flex rounded-full items-center justify-center p-3 w-14 h-14">
        <Ionicons name="bookmarks-outline" size={22} color="white" />
      </TouchableOpacity>
          
      <TouchableOpacity className="  bg-[#ffffff46] flex rounded-full items-center justify-center p-3 w-14 h-14">
        <Ionicons name="share-social-outline" size={22} color="white" />
      </TouchableOpacity>

        </View>

      <TouchableOpacity className="mt-4 bg-white py-3 rounded-full w-40">
        <Text className="text-center text-purple-700"
          style={{ fontFamily: "Poppins_600SemiBold" }}
        >Apply</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
};

export default FeaturedJobCard;
