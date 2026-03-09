import { colors } from "@/src/theme/colors";
import { StyleSheet } from "react-native";

export const screenStyles = StyleSheet.create({
    screen: {
        paddingTop: 28,
        paddingHorizontal: 28,
        gap: 32,
        backgroundColor: colors.white,
    },
    fill: {
        justifyContent: 'space-between'
    },
    safe: { flex: 1, backgroundColor: colors.white }
})