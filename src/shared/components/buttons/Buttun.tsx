import React from 'react'
import { Pressable, Text } from 'react-native'
import { secondaryButtonStyles, primaryButtonStyles, sharedButtonStyles } from './buttunStyles'
// styles
const { baseStyle } = sharedButtonStyles
const { active, activeText } = primaryButtonStyles
const { inactive, inactiveText, secondaryText } = secondaryButtonStyles
interface PrimaryButtonProps {
    label: string
    onPress: () => void
}

interface SecondaryButtonProps {
    label: string
    onPress: () => void
    isActive?: boolean
}
export function PrimaryButtun({ label, onPress }: PrimaryButtonProps) {
    return (
        <Pressable style={ [ active, baseStyle ] } onPress={ onPress }>
            <Text style={ activeText }>
                { label }
            </Text>
        </Pressable>
    )
}

export function SecondaryButtun({ label, onPress, isActive = true }: SecondaryButtonProps) {
    return (
        <Pressable style={ [ inactive, baseStyle ] } onPress={ onPress }>
            <Text style={ isActive ? secondaryText : inactiveText }>
                { label }
            </Text>
        </Pressable>
    )
}