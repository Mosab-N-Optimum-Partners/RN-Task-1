import React from 'react'
import { Text, View } from 'react-native'
import { barCardContentStyle } from './BarCardContentStyle'
import Icon from '../../../../shared/components/icons/Icon';
const { container, gray, white, metadata, priceLabel, priceContainer, title, locationContainer, locationText, rateContainer } = barCardContentStyle;
interface BarCardContentProps {
    placeName: string
    city: string
    country: string
    rate: number
}
export default function BarCardContent({ placeName, city, country, rate }: BarCardContentProps) {
    const name = placeName.split(" ")[ 0 ]
    return (
        <View style={ container }>
            <Text>
                <Text numberOfLines={ 1 } ellipsizeMode="tail" style={ [ white, title ] }>{ name }, </Text>
                <Text style={ [ gray, title ] }>{ city }</Text>
            </Text>
            <View style={ priceContainer }>
                <Text style={ priceLabel }>Price</Text>
                <View style={ metadata }>
                    <View style={ locationContainer }>
                        <Icon name='location-outline' size={ 20 } />
                        <Text numberOfLines={ 1 } ellipsizeMode="tail" style={ locationText }>
                            { country }, { city }
                        </Text>
                    </View>
                    <View style={ rateContainer }>
                        <Icon name='star-outline' size={ 20 } />
                        <Text style={ gray }>{ rate }</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}