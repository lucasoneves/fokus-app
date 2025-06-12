import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import { IconSave, IconTrash } from "../../components/Icons";
import useTaskContext from "../../components/context/useTaskContext";
import { useState } from "react";
import { router } from "expo-router";

export default function AddTask() {
  const { addTasks } = useTaskContext();

  const [description, setDescription] = useState();

  const submitTask = () => {
    if (!description) return;
    addTasks(description);
    setDescription("");
    router.navigate("/tasks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefa</Text>
      <View style={styles.formWrapper}>
        <View>
          <Text style={[styles.text, styles.titleTask]}>
            Em que você está trabalhando?
          </Text>
          <TextInput
            style={styles.input}
            numberOfLines={12}
            multiline
            textAlignVertical="top"
            value={description}
            onChangeText={setDescription}
          />
        </View>
        <View style={styles.actions}>
          <Pressable style={styles.button}>
            <IconTrash />
            <Text style={styles.textButton}>Apagar</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={submitTask}>
            <IconSave />
            <Text style={styles.textButton}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 30,
    padding: 24,
  },

  formWrapper: {
    backgroundColor: "#98a0a8",
    borderRadius: 12,
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleTask: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    color: "#021123",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 30,
    fontSize: 18,
    flexWrap: "wrap",
    height: 150,
    padding: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#021123",
    padding: 12,
    borderRadius: 12,
    fontSize: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
