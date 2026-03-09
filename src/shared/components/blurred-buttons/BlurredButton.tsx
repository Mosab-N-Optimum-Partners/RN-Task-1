import { BlurView } from 'expo-blur'
import React from 'react'
import {  Platform, Pressable, StyleProp, ViewStyle } from 'react-native'
import Icon, { IoniconName } from '../icons/Icon'
import { blurredButtonStyles } from './BlurredButtonStyle'
const { base, android } = blurredButtonStyles;
interface BlurredButtonProps {
    iconName: IoniconName
    color?: string
    styles?: StyleProp<ViewStyle>
    onPress?: () => void
}
export default function BlurredButton({ color, iconName, styles, onPress}: BlurredButtonProps) {
    if (Platform.OS === 'android')
    {
        return (

            <Pressable onPress={ onPress } style={ [ base, styles, android ] }>
                <Icon name={ iconName } color={ color } />
            </Pressable>
        )
    }
    return (

        <BlurView tint='dark' style={ [ base, styles ] }>
            <Pressable onPress={ onPress }>
                <Icon name={ iconName } color={ color } />
            </Pressable>
        </BlurView>
    )
}
