import { StyleSheet } from "react-native";

export const heroImageStyles = StyleSheet.create({
    container: {
        position: 'relative',
        borderRadius: 28,
        overflow: 'hidden'
    },
    bookmarkButton: {
        position: 'absolute',
        top: 16,
        right: 21,
        zIndex: 2
    },
    backButton: {
        position: 'absolute',
        top: 16,
        left: 21,
        zIndex: 2
    }
})