import { router } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import FocusButton from "../components/FocusButton";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
        alt="Fokus - Productivity App"
        width={158}
        height={40}
      />
      <Text style={styles.text}>
        Otimize sua{"\n"} produtividade,{"\n"}
        <Text style={styles.bold}>mergulhe no que{"\n"} importa</Text>
      </Text>
      <Image
        style={styles.image}
        source={require("../assets/images/home.png")}
        alt="Fokus - Productivity App"
        resizeMode="contain"
        width={636}
        height={533}
      />
      <FocusButton
        title={"Quero iniciar!"}
        onPress={() => router.navigate("/pomodoro")}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    maxHeight: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "#fff",
  },
  bold: {
    fontWeight: "bold",
  },
});
