import { StyleSheet, Text, Pressable } from "react-native";

export default function FocusButton({ onPress, title, icon }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      {icon}
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#021123",
    textAlign: "center",
  },
});
