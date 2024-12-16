import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  featured: boolean;
}

const FeaturedJobCard: React.FC<Job> = ({ title, company, location, salary, featured }) => {
  return (
    <View className="p-4 rounded-lg bg-gradient-to-r from-purple-500 to-purple-700 mb-4">
      <Text className="text-lg font-bold text-white">{title}</Text>
      <Text className="text-sm text-white">{company}</Text>
      <Text className="text-sm text-white">{location}</Text>
      <Text className="text-sm font-semibold text-white">{salary}</Text>
      {featured && (
        <View className="mt-2 px-2 py-1 rounded bg-yellow-300">
          <Text className="text-yellow-900">Featured</Text>
        </View>
      )}
      <TouchableOpacity className="mt-4 bg-white py-2 rounded">
        <Text className="text-center text-purple-700">Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeaturedJobCard;
