import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { screenStyles } from './screenStyle'
import { ScrollView } from 'react-native'
import useResponsive from '../../hooks/useResponsive'
const { screen, fill, safe } = screenStyles
interface ScreenProps {
    children: React.ReactNode
    fillScreen?: boolean
}
export default function Screen({ children, fillScreen = false }: ScreenProps) {
    const { hp } = useResponsive()
    return (
        <SafeAreaView style={ safe }>
            <ScrollView contentContainerStyle={ [ screen, { minHeight: hp(100) }, fillScreen && fill ] }>
                { children }
            </ScrollView>
        </SafeAreaView>
    )
}
