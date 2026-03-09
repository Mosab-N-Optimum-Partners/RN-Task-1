import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const detailsStyles = StyleSheet.create({
    content: { gap: 20 },
    tabsContainer: { flexDirection: 'row', gap: 32, alignItems: 'center' },
    active: { color: colors.textPrimary, fontSize: 22, fontWeight: '600' },
    inactive: { color: colors.textFaded, fontSize: 18 },
    description: { color: colors.textPrimary, fontSize: 14, lineHeight: 22 },
    footer: { marginTop: 'auto' }
})