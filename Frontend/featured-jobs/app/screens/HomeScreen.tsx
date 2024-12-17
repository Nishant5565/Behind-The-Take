import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import CategoryFilter from "../Components/CategoryFilter";
import FeaturedJobCard from "../Components/FeaturedJobCard";
import { fetchCategories, fetchJobs } from "../services/api";

const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories([{ id: "all", name: "All" }, ...data]);
      console.log(data);
    };

    const loadJobs = async () => {
      setLoading(true);
      const data = await fetchJobs(selectedCategory);
      setJobs(data);
      setLoading(false);
      console.log(data);
    };

    loadCategories();
    loadJobs();
  }, [selectedCategory]);

  return (
    <View className="flex-1 bg-gray-100">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#7C3AED" className="mt-4" />
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <FeaturedJobCard
              title={item.title}
              company={item.company}
              location={item.location}
              salary={item.salary}
              featured={item.featured}
            />
          )}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      )}
    </View>
  );
};

export default HomeScreen;
