import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const DetailsCarContentStyles = StyleSheet.create({
    white: { color: colors.white },
    gray: { color: colors.grayText },
    countryText: { color: colors.grayText, alignItems: 'flex-end', flexDirection: 'row' },
    metadata: { flexDirection: 'row', justifyContent: 'space-between' },
    priceContainer: { flexDirection: 'column', justifyContent: 'center' },
    priceLabel: { color: colors.grayText, fontSize: 12, textAlign: 'right' },
    priceStyle: { color: colors.grayText, fontSize: 20, textAlign: 'center' },
})