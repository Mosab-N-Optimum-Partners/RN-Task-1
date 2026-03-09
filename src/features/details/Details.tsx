import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
// Data
import { mockPlaces } from '@/data/mockPlacesData';
// Components
import TagsList from './components/tags-list/TagsList';
import HeroImage from './components/hero-image/HeroImage';
import { PrimaryButtun } from '@/src/shared/components/buttons/Buttun';
import Screen from '@/src/shared/components/layout/Screen';
import { detailsStyles } from './detailsStyles';

const { content, tabsContainer, active, inactive, description, footer } = detailsStyles

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation<any>()
  const { id } = route.params as { id: string };
  const place = mockPlaces[ id ]
  const [ activeTab, setActiveTab ] = useState('Overview')

  return (
    <Screen fillScreen={ true }>
      <View style={ content }>
        <HeroImage place={ place } />

        <View style={ tabsContainer }>
          <Pressable onPress={ () => setActiveTab('Overview') }>
            <Text style={ activeTab === 'Overview' ? active : inactive }>Overview</Text>
          </Pressable>
          <Pressable onPress={ () => setActiveTab('Details') }>
            <Text style={ activeTab === 'Details' ? active : inactive }>Details</Text>
          </Pressable>
        </View>

        <TagsList place={ place } />

        <Text style={ description }>{ place?.description }</Text>
      </View>

      <View style={ footer }>
        <PrimaryButtun
          label="Book Now"
          onPress={ () => navigation.navigate("BookingForm", { id }) }
        />
      </View>
    </Screen>
  )
}