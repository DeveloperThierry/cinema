import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { fetchMovies } from "../services/api";
import useFetch from "../services/useFetch";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading: loading,
    error: error,
    refetch: loadMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);

  useEffect(() => {
    const func = async () => {
      if (searchQuery.trim()) {
        await loadMovies();
      } else {
        reset();
      }
    };
    func();
  }, [searchQuery]);
  return (
    <View className="flex-1  ">
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={
          <>
            {!loading && !error ? (
              <View className="mt-10 px-5">
                <Text className="text-center text-gray-500">
                  {searchQuery.trim()
                    ? "No movies found"
                    : "Search for a movie"}
                </Text>
              </View>
            ) : null}
          </>
        }
        ListHeaderComponent={
          <>
            <View>
              <View className="my-5">
                <SearchBar
                  placeholder="Search for a movie"
                  value={searchQuery}
                  onChangeText={(text: string) => setSearchQuery(text)}
                />
              </View>
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#fb8b24"
                className="my-3"
              />
            )}
            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}
            {!loading && !error && (
              <Text className="text-xl font-bold">
                Search Results for{" "}
                <Text className="text-accent">{searchQuery.toUpperCase()}</Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  );
};

export default Search;
