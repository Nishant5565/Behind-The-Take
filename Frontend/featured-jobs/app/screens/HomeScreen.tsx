import React, { useEffect, useState, useCallback } from "react";
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
import {formatDistanceToNow, set} from "date-fns"


const { width } = Dimensions.get("window"); // Screen width for pagination

const HomeScreen: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [updateat, setUpdateat] = useState<any>(null);
  const [categoryLoading, setCategoryLoading] = useState(true);
  

  const handleScroll = (event: any) => {
    
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };
  
  const getLatestUpdatedAt = (jobs: any[]) => {
      const dates = jobs
          .map((job) => new Date(job.updatedAt))
          .filter(date => !isNaN(date.getTime())); // Filter out invalid dates
  
      if (dates.length === 0) {
          setUpdateat(null);
          return;
      }
  
      const latestDate = new Date(Math.max.apply(null, dates.map(date => date.getTime())));
      const formattedDate = formatDistanceToNow(latestDate, { addSuffix: true });
      setUpdateat(formattedDate);
  };
  const loadCategories = async () => {
    setCategoryLoading(true);
    const data = await fetchCategories();
    data.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
    setCategories([...data]);
    setCategoryLoading(false);
  };

  useEffect(() => {

    loadCategories();

    getLatestUpdatedAt(jobs);
  }, []); 

  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true);
      const data = await fetchJobs(selectedCategory);
      setJobs(data);
      setLoading(false);
    };

    loadJobs();
    getLatestUpdatedAt(jobs);
  }, [selectedCategory]);

  const handleCategoryChange = useCallback((categoryId: number) => {
    setSelectedCategory(categoryId);
  }, []);

  return (
    <View className="flex-1 bg-black">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        loading={categoryLoading}
      />

      <View>
      <View className="flex-row justify-around mt-6 items-center">

      <Text
          className="text-2xl text-white"
          style={{ fontFamily: "Poppins_700Bold" }}>
          Featured Jobs
        </Text>

        <Text
          className="text-sm  text-gray-400"
          style={{ fontFamily: "Poppins_400Regular" }}
        >  { `Last updated ${updateat}`}
        </Text>
      
      </View>

        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                width: width,
                paddingHorizontal: 16,
                display: item.featured ? "flex" : "none",
              }}
            >
              {item.featured && (
                <FeaturedJobCard
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  salary={item.salary}
                  featured={item.featured}
                  loading={loading}
                />
              )}
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
              }`}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;