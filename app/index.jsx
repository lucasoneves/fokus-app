import { Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Fokus App</Text>
    </View>
  );
}

const style = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
};
