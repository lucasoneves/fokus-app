import { View, Text } from "react-native";
import TaskItem from "../../components/TaskItem";

export default function Tasks() {
  return (
    <View>
      <Text>Tasks</Text>
      <TaskItem completed text="Estudar React" />
      <TaskItem completed={false} text="Estudar React Native" />
    </View>
  );
}
