import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { useRef, useState } from "react";
import FocusButton from "@/components/FocusButton";
import ActionButton from "@/components/ActionButton";
import Timer from "@/components/Timer";

import { IconPlay, IconPause } from "@/components/Icons";
import { Link } from "expo-router";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require("../assets/images/pomodoro.png"),
    display: "Foco",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("../assets/images/short.png"),
    display: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("../assets/images/long.png"),
    display: "Pausa longa",
  },
];

export default function Pomodoro() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const timerRef = useRef(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (newTimerType) => {
    clear();
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }
    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((oldState) => {
        if (oldState === 0) {
          clear();
          return timerType.initialValue;
        }
        return oldState - 1;
      });
    }, 1000);
    timerRef.current = id;
  };

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
            <ActionButton
              key={p.id}
              onPress={() => toggleTimerType(p)}
              active={timerType.id === p.id}
              display={p.display}
            />
          ))}
        </View>

        <Timer totalSeconds={seconds} />
        <FocusButton
          onPress={() => toggleTimer()}
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
        />
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

const styles = StyleSheet.create({
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
});
