import { View, Text, Pressable, StyleSheet } from "react-native";
import { IconCheck, IconPencil, IconTrash } from "../Icons";

export default function TaskItem({
  completed,
  text,
  onToggleComplete,
  onPressEdit,
  onPressDelete,
}) {
  return (
    <View style={styles.card}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>
      <Text style={[styles.text, completed && styles.textCompleted]}>
        {text}
      </Text>
      <Pressable onPress={onPressEdit}>
        <IconPencil />
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <IconTrash size={20} fill={"#021123"} />
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
  textCompleted: {
    textDecorationLine: "line-through",
  },
});
