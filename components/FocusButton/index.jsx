import { StyleSheet, Text, Pressable } from "react-native";

export default function FocusButton() {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>Start</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
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
});
