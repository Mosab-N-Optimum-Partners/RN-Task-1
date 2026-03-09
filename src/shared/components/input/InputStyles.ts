import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const inputStyles = StyleSheet.create({
    container: { gap: 6 },
    label: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
    input: { width: "100%", borderRadius: 12, borderWidth: 2, borderColor: colors.grayLight, paddingHorizontal: 16, paddingVertical: 12 },
    inputError: { borderColor: colors.error },
    errorText: { fontSize: 12, color: colors.error }
})