import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/pomodoro"}>
        <Text>Pomodoro</Text>
      </Link>
    </View>
  );
}
