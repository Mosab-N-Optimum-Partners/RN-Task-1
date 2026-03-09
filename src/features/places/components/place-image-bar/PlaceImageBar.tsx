import React from 'react'
import { BlurView } from 'expo-blur';
import { placeCardBarStyles } from './PlaceImageBarStyle';
import { Platform, StyleProp, View, ViewStyle } from 'react-native';
const { blur } = placeCardBarStyles

interface PlaceImageBarProps {
    children: React.ReactNode
    styles?: StyleProp<ViewStyle>
}
export default function PlaceImageBar({ children, styles = {} }: PlaceImageBarProps) {

    return (
        <>
            { Platform.OS === 'android'
                ? <View style={ [ blur, { backgroundColor: '#000000b2' } ] }>{ children }</View>
                : <BlurView intensity={ 40 } tint='dark' style={ [ blur, styles ] }>{ children }</BlurView>
            }
        </>
    )
}
