import { View, Text, StyleSheet } from "react-native";
import TaskItem from "../../components/TaskItem";
import FocusButton from "../../components/FocusButton";
import { router } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext";
import { FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Tasks() {
  const { tasks, deleteTask } = useTaskContext();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {/* {tasks.map((t) => {
        return (
          <TaskItem key={t.id} completed={t.completed} text={t.description} />
        );
      })} */}
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskItem
                completed={item.completed}
                text={item.description}
                onPressDelete={() => deleteTask(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            ListHeaderComponent={
              <Text style={styles.title}>Lista de tarefas</Text>
            }
            ListFooterComponent={
              <View style={{ marginTop: 16 }}>
                <FocusButton
                  title="Adicionar tarefa"
                  onPress={() => router.navigate("/add-task")}
                />
              </View>
            }
          />
        ) : (
          <View>
            <Text
              style={{
                color: "#fff",
                marginBlock: 22,
                fontSize: 22,
                textAlign: "center",
              }}
            >
              Sem tarefas
            </Text>
            <FocusButton
              title="Adicionar tarefa"
              onPress={() => router.navigate("/add-task")}
            />
          </View>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
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
    marginBottom: 16,
  },
});
