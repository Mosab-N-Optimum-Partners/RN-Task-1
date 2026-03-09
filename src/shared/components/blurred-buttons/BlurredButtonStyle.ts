import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const blurredButtonStyles = StyleSheet.create({
    base: { borderRadius: 9999, padding: 8, justifyContent: 'center', alignItems: 'center' },
    android: { backgroundColor: colors.blackBlur }
})