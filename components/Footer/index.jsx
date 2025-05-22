import { StyleSheet, View, Text } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.
      </Text>
      <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    width: "100%",
    gap: 4,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontSize: 16,
  },
});
