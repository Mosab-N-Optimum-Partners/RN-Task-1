import PlaceImageBar from '@/src/features/places/components/place-image-bar/PlaceImageBar'
import BlurredButton from '@/src/shared/components/blurred-buttons/BlurredButton'
import useResponsive from '@/src/shared/hooks/useResponsive'
import React from 'react'
import { Image, View } from 'react-native'
import DetailsBarContent from '../datails-bar-content/DetailsBarContent'
import { useNavigation } from '@react-navigation/native'
import { Place } from '@/data/mockPlacesData'

interface HeroImageProps {
    place: Place
    bookMark?: boolean
}

import { heroImageStyles } from './heroImageStyle'
const { container, bookmarkButton, backButton } = heroImageStyles

export default function HeroImage({ place, bookMark = true }: HeroImageProps) {
    const { wp, hp } = useResponsive()
    const navigator = useNavigation<any>()
    return (
        <View style={ container }>
            { bookMark && (
                <BlurredButton color={ 'white' } iconName='bookmark-outline' styles={ bookmarkButton } />
            ) }
            <BlurredButton onPress={ () => navigator.goBack() } color={ 'white' } iconName='chevron-back' styles={ backButton } />
            <Image style={ { width: "100%", height: hp(60) } } source={ place.image } />
            <PlaceImageBar>
                <DetailsBarContent placeName={ place.placeName } country={ place.country } price={ place.price } />
            </PlaceImageBar>
        </View>
    )
}