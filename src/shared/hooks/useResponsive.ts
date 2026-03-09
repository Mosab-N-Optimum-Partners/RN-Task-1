import React from 'react'
import { useWindowDimensions } from 'react-native'

export default function useResponsive() {
    const { width, height } = useWindowDimensions()
    return {
        width,
        height,
        isSmall: width < 380,
        isMedium: width >= 380 && width < 414,
        isLarge: width > 414,
        isTablet: width > 768,
        wp: (percent: number) => width * (percent / 100),
        hp: (percent: number) => height * (percent / 100)
    }
}
