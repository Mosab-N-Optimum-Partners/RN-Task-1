import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { inputStyles } from './InputStyles'
import { colors } from '@/src/theme/colors'

const { container, label, input, inputError, errorText } = inputStyles
interface InputProps {
    value: string
    onChangeText: (text: string) => void
    placeholder: string
    secureTextEntry?: boolean
    error?: string
    label?: string
}

export default function Input({ value, onChangeText, placeholder, secureTextEntry = false, error, label: labelText }: InputProps) {
    return (
        <View style={ container }>
            { labelText && <Text style={ label }>{ labelText }</Text> }
            <TextInput
                value={ value }
                onChangeText={ onChangeText }
                placeholder={ placeholder }
                secureTextEntry={ secureTextEntry }
                placeholderTextColor={ colors.grayLabel }
                style={ [ input, error ? inputError : null ] }
            />
            { error && <Text style={ errorText }>{ error }</Text> }
        </View>
    )
}