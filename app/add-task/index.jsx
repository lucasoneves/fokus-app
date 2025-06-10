import { View, Text, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-web";

export default function AddTask() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Tarefa</Text>
      <View>
        <Text style={styles.text}>Em que você está trabalhando?</Text>
        <TextInput />
      </View>
      <View>
        <Pressable>
          <Text style={styles.text}>Apagar</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.text}>Salvar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    gap: 12,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    color: "#fff",
  },
});
