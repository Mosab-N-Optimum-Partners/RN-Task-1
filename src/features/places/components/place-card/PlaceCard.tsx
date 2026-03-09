import React from 'react'
import { Image, ImageSourcePropType, Pressable, View } from 'react-native'
import BlurredButton from '../../../../shared/components/blurred-buttons/BlurredButton'
import BarCardContent from '../bar-card-content/BarCardContent'
import PlaceImageBar from '../place-image-bar/PlaceImageBar'
import useResponsive from '../../../../shared/hooks/useResponsive'
import { useNavigation } from '@react-navigation/native'
import { placeCardStyles } from './placeCardStyle'
interface PlaceCardProps {
    id: string
    src: ImageSourcePropType
    placeName: string
    city: string
    country: string
    rate: number
}
const { card, heartButton, shadow } = placeCardStyles

export default function PlaceCard({ id, src, placeName, city, country, rate }: PlaceCardProps) {
    const navigation = useNavigation<any>()
    const { wp, hp } = useResponsive()
    return (
        <Pressable onPress={ () => navigation.navigate('Details', { id }) }>
            <View style={ shadow }>
                <View style={ card }>
                    <BlurredButton color={ 'white' } iconName='heart-outline' styles={ heartButton } />
                    <Image style={ { width: wp(63), height: hp(44) } } source={ src } />
                    <PlaceImageBar>
                        <BarCardContent placeName={ placeName } city={ city } country={ country } rate={ rate } />
                    </PlaceImageBar>
                </View>
            </View>
        </Pressable>
    )
}