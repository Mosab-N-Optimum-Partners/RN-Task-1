import React from 'react'
import { Text, View } from 'react-native'
import { DetailsCarContentStyles } from './DetailsBarcContentStyle'
import Icon from '@/src/shared/components/icons/Icon'

interface DetailsBarContentProps {
    placeName: string
    country: string
    price: number
}
const { countryText, gray, white, metadata, priceContainer, priceLabel, priceStyle } = DetailsCarContentStyles
export default function DetailsBarContent({ placeName, country, price }: DetailsBarContentProps) {
    return (
        <View>
            <Text style={ white }>{ placeName }</Text>
            <View style={ metadata }>
                <View style={ countryText }>
                    <Icon name='location-outline' size={ 20 } /><Text style={ gray }>{ country }</Text>
                </View>
                <View style={ priceContainer }>
                    <Text style={ priceLabel }>Price</Text>
                    <Text style={ priceStyle }>${ price }</Text>
                </View>
            </View>
        </View>
    )
}
