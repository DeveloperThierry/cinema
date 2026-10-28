import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
}
const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className="flex-row items-center bgdark-200 rounded-full px-5 py-4">
      <Ionicons name="search" size={24} />
      <TextInput
        onPress={onPress}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchBar;
