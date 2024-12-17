import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

interface Category {
  id: number;
  name: string;
}

interface Props {
  categories: Category[];
  selectedCategory: number;
  onCategoryChange: (categoryId: number) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }:Props) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle ={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        
      }}
      
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full ${
            selectedCategory === category?.id ? "bg-purple-600" : "bg-gray-200"
          }`}
        >
          <Text
          style={{ fontFamily: "Poppins_400Regular" }}
             className={`text-sm font-semibold ${
              selectedCategory === category.id ? "text-white" : "text-gray-800"
            }`
          }
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;