import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const bookingFormStyles = StyleSheet.create({
    content: { gap: 20 },
    input: {
        width: "100%",
        borderRadius: 12,
        borderLeftColor: colors.grayLight,
        borderRightColor: colors.grayLight,
        borderBlockColor: colors.grayLight,
        borderBottomWidth: 2, borderTopWidth: 2,
        borderRightWidth: 2, borderLeftWidth: 2,
        paddingHorizontal: 16, paddingVertical: 12,
    },
    submitButton: { backgroundColor: colors.blackMedium, padding: 16, borderRadius: 12, alignItems: 'center' },
    submitText: { color: colors.white, fontWeight: '600' },
    overlay: { flex: 1, backgroundColor: colors.blackOverlay, justifyContent: 'flex-end' },
    modalContainer: { backgroundColor: colors.white, borderRadius: 24, padding: 24, gap: 16 },
    modalTitle: { fontSize: 22, fontWeight: '600' },
    modalRow: { gap: 8 },
    modalLabel: { color: colors.grayLabel },
    modalValue: { fontWeight: '600' },
})