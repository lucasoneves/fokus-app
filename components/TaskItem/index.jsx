import { View, Text, Pressable, StyleSheet } from "react-native";
import { IconCheck, IconPencil } from "../Icons";

export default function TaskItem({
  completed,
  text,
  onToggleComplete,
  onPressEdit,
}) {
  return (
    <View style={styles.card}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck completed={completed} />
      </Pressable>
      <Text style={styles.text}>{text}</Text>
      <Pressable onPress={onPressEdit}>
        <IconPencil />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#98a0a8",
    gap: 12,
    paddingHorizontal: 8,
    paddingVertical: 18,
    borderRadius: 8,
  },
  text: {
    flex: 1,
    color: "#021123",
    fontSize: 18,
    fontWeight: "500",
  },
});
