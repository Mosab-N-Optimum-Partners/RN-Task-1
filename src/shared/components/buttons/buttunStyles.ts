import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const sharedButtonStyles = StyleSheet.create({
    baseStyle: { padding: 16, paddingHorizontal: 21, borderRadius: 18 },
})
export const secondaryButtonStyles = StyleSheet.create({
    inactive: { backgroundColor: colors.whiteSoft },
    secondaryText: { color: colors.blackMedium, textAlign: 'center' },
    inactiveText: { color: colors.grayInactive, textAlign: 'center' },
})
export const primaryButtonStyles = StyleSheet.create({
    active: { backgroundColor: colors.blackMedium },
    activeText: { color: colors.whiteSoft, textAlign: 'center' },
})