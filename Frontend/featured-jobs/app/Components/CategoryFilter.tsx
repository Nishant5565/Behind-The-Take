import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
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
          key={category.id}
          onPress={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full ${
            selectedCategory === category.id ? "bg-purple-600" : "bg-gray-200"
          }`}
        >
          <Text
            className={`text-sm font-semibold ${
              selectedCategory === category.id ? "text-white" : "text-gray-800"
            }`}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;