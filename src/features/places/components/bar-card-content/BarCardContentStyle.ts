import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const barCardContentStyle = StyleSheet.create({
    white: { color: colors.white },
    title: { fontSize: 14 },
    gray: { color: colors.grayText, fontSize: 10 },
    metadata: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    priceLabel: { fontSize: 12, opacity: 0 },
    priceContainer: { flexDirection: 'column' },
    container: { maxWidth: '100%' },
    locationContainer: { flexDirection: 'row', gap: 4, alignItems: 'center', flex: 1, marginRight: 8 },
    locationText: { color: colors.grayText, fontSize: 10, flexShrink: 1 },
    rateContainer: { flexDirection: 'row', gap: 4, justifyContent: 'flex-end', alignItems: 'center' },
})