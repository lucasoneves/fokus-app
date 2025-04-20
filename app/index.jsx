import { Text, View, Image, Pressable } from "react-native";

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
      <View style={styles.actions}>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
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
    gap: 32,
  },
  timer: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#B872FF",
    padding: 12,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#021123",
    textAlign: "center",
  },
  footer: {
    width: "100%",
    gap: 4,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 16,
  },
};
