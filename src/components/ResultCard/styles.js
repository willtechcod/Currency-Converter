import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardBackground,
        borderRadius: 16,
        padding: 24,
    },
    label: {
        fontSize: 18,
        color: colors.textSecondary,
        marginBottom: 8,
        fontWeight: "bold",
    },
    amount: {
        fontSize: 24,
        fontWeight: "bold",
        color: colors.text,
        marginBottom: 14,
    },
    rate: {
        color: colors.textSecondary,
        fontSize: 14,
    }
})