import { Text, View, Image, Pressable } from "react-native";
import { useState } from "react";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require("./pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require("./short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require("./long.png"),
    display: "Pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperImage}>
        <Image
          style={styles.mainImage}
          source={timerType.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((p) => (
            <Pressable
              onPress={() => setTimerType(p)}
              key={p.id}
              style={
                timerType.id === p.id ? styles.contextTextButtonActive : null
              }
            >
              <Text style={styles.contextTextButton}>{p.display}</Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", {
            minute: "2-digit",
            second: "2-digit",
          })}
        </Text>
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
  context: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around",
    alignItems: "center",
  },
  contextTextButton: {
    color: "#fff",
    padding: 8,
    fontSize: 12.5,
  },
  contextTextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
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
