import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { fetchMovies } from "../../services/api";
import useFetch from "../../services/useFetch";
const Home = () => {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));
  return (
    <View className="flex-1 justify-center items-center p-4">
      {moviesLoading ? (
        <ActivityIndicator size="large" className="mt-10 self-center" />
      ) : moviesError ? (
        <Text>Error: {moviesError?.message}</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }: { item: Movie }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 10,
          }}
          // contentContainerStyle={{padding:4}}
          ListHeaderComponent={
            <View>
              <SearchBar
                onPress={() => router.push("/search")}
                placeholder="Search for a movie"
              />
              <Text className="text-lg font-bold mt-5 mb-3">Latest Movies</Text>
            </View>
          }
        />
      )}
    </View>
  );
};

export default Home;
