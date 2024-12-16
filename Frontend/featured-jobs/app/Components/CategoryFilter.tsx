import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

interface Props {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<Props> = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex-row px-4 space-x-4 py-2"
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category}
          onPress={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category ? "bg-purple-600" : "bg-purple-400"
          }`}
        >
          <Text className="text-white">{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;
