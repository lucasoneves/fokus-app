import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.mainImage}
          source={require("./pomodoro.png")}
          resizeMode="contain"
        />
      </View>
      <View style={styles.actions} />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  wrapperImage: {
    width: "80%",
    margin: "auto",
  },
  mainImage: {
    maxWidth: "100%",
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#144480",
  },
};
