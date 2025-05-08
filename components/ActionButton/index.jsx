import { Pressable, Text, StyleSheet } from "react-native";

export default function ActionButton({ active, onPress, display }) {
  return (
    <Pressable
      onPress={onPress}
      style={active ? styles.contextTextButtonActive : null}
    >
      <Text style={styles.contextTextButton}>{display}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contextTextButton: {
    color: "#fff",
    padding: 8,
    fontSize: 12.5,
  },
  contextTextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
});
