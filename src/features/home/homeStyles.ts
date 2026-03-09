import { StyleSheet } from "react-native";
import { colors } from '@/src/theme/colors'

export const homeStyles = StyleSheet.create({
    header: { flexDirection: 'row', width: "100%", justifyContent: 'space-between', paddingHorizontal: 20 },
    headerTitle: { fontSize: 28, color: colors.black, fontWeight: "600" },
    headerSubtitle: { fontSize: 16, color: colors.textSecondary },
    profileImage: { borderRadius: 999 },
    searchContainer: {
        width: "100%", borderRadius: 12,
        borderLeftColor: colors.grayLight, borderRightColor: colors.grayLight,
        borderBlockColor: colors.grayLight,
        borderBottomWidth: 2, borderTopWidth: 2, borderRightWidth: 2, borderLeftWidth: 2,
        flexDirection: 'row', paddingVertical: 6
    },
    searchInput: { fontWeight: '600', paddingLeft: 24, width: "80%" },
    filterButton: { borderLeftColor: colors.grayLight, borderLeftWidth: 2, flexGrow: 1, alignItems: 'center', justifyContent: 'center' },
    sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    sectionTitle: { color: colors.textPrimary, fontSize: 20, fontWeight: '600' },
    sectionAction: { color: colors.textFaded, fontSize: 18 },
    sortContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    listContent: { padding: 16, gap: 12 },
})