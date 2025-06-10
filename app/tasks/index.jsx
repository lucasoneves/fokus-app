import { View, Text, StyleSheet } from "react-native";
import TaskItem from "../../components/TaskItem";
import FocusButton from "../../components/FocusButton";
import { router } from "expo-router";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <TaskItem completed text="Estudar React" />
      <TaskItem completed={false} text="Estudar React Native" />
      <FocusButton
        title="Adicionar tarefa"
        onPress={() => router.navigate("/add-task")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    gap: 12,
    padding: 24,
    backgroundColor: "#021123",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
