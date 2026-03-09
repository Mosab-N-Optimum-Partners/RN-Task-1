import React from 'react'
import { View } from 'react-native'
import clock from "@/assets/clock.png"
import cloud from "@/assets/cloud.png"
import star from "@/assets/star.png"
import Tag from '@/src/shared/components/tags/Tag'
import { tagsListStyles } from './tagsListStyle'
const { container } = tagsListStyles
export default function TagsList({ place }: any) {
    const tags = [
        { id: '1', logo: clock, label: `${ place.tripDuration } Hours` },
        { id: '2', logo: cloud, label: `${ place.temperature }°F` },
        { id: '3', logo: star, label: `${ place.rate }` },
    ]
    return (
        <View style={ container }>
            { tags.map(({ id, logo, label }) => (
                <Tag key={ id } imageSrc={ logo } label={ label } />
            )) }
        </View>
    )
}
