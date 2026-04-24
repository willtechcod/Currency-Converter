import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  title: {
    color: colors.text,
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    color: colors.text,
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 320,
    height: 320,
    marginBottom: 20,
  },
  button: {
    width: "60%",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: colors.text,
    fontSize: 18,
  },
});
