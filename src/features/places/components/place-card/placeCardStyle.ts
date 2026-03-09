import { colors } from "@/src/theme/colors";
import { StyleSheet } from "react-native";

export const placeCardStyles = StyleSheet.create({
    card: {
        position: 'relative',
        borderRadius: 28,
        overflow: 'hidden'
    },
    heartButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 2
    },
    shadow: {
        borderRadius: 28,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 12,
        backgroundColor: colors.white,
    }
})