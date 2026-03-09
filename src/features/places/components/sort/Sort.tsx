import React from 'react'
import { PrimaryButtun, SecondaryButtun } from '@/src/shared/components/buttons/Buttun'

export default function Sort({ onPress, label, isActive }: any) {
    return (
        (isActive
            ? <PrimaryButtun label={ label } onPress={ onPress } />
            : <SecondaryButtun label={ label } onPress={ onPress } isActive={ false } />)
    )
}
