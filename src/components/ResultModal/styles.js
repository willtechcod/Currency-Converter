import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: colors.cardBackground,
    borderRadius: 16,
    padding: 24,
    width: "85%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 24,
  },
  modalFromLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  modalAmount: {
    fontSize: 18,
    color: colors.text,
    marginBottom: 16,
  },
  modalToLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  modalResult: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 4,
  },
  modalCurrencyCode: {
    fontSize: 18,
    color: colors.textSecondary,
    marginBottom: 20,
  },
  modalRate: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 24,
  },
  modalButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginBottom: 12,
  },
  modalButtonOutline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  modalButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalButtonTextOutline: {
    color: colors.primary,
  },
});