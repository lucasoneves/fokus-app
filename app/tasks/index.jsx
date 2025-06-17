import { View, Text, StyleSheet } from "react-native";
import TaskItem from "../../components/TaskItem";
import FocusButton from "../../components/FocusButton";
import { router } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext";

export default function Tasks() {
  const { tasks } = useTaskContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de tarefas</Text>
      {tasks.map((t) => {
        return (
          <TaskItem key={t.id} completed={t.completed} text={t.description} />
        );
      })}
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
