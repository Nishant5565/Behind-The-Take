import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import CategoryFilter from "../Components/CategoryFilter";
import FeaturedJobCard from "../Components/FeaturedJobCard";
import { fetchCategories, fetchJobs } from "../services/api";
import { Poppins_700Bold } from "@expo-google-fonts/poppins";

const { width } = Dimensions.get("window"); // Screen width for pagination

const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      data.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
      setCategories([...data]);
    };

    const loadJobs = async () => {
      setLoading(true);
      const data = await fetchJobs(selectedCategory);
      setJobs(data);
      setLoading(false);
    };

    loadCategories();
    loadJobs();
  }, [selectedCategory]);

  return (
    <View className="flex-1 bg-black">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#7C3AED" className="mt-4" />
      ) : (
        <View>
          <Text
            className="text-2xl mt-6 pl-6 text-white"
            style={{ fontFamily: "Poppins_700Bold" }}
          >
            Featured Jobs
          </Text>

          <FlatList
            data={jobs}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ width: width, paddingHorizontal: 16, display: item.featured ? "flex" : "none" }}>
                {
                  item.featured && (
                    <FeaturedJobCard
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  salary={item.salary}
                  featured={item.featured}
                />
                  )
                }
              </View>
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          />

          <View className="flex-row justify-center mt-4">
            {jobs.map((_, index) => (
              <View
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  index === currentIndex ? "bg-white" : "bg-gray-500"
                }
                
                `}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
