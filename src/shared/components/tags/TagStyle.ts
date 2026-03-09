import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const tagStyles = StyleSheet.create({
    container: { flexDirection: 'row', gap: 10, alignItems: 'center' },
    image: { width: 18, height: 18 },
    imageWrapper: { backgroundColor: colors.grayBg, borderRadius: 6, padding: 4 },
    text: { color: colors.blackFaded }
})