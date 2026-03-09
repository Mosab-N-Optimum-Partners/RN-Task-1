// React
import { FlatList, TextInput, Text, Image, Pressable, View } from 'react-native';
import { useEffect, useState } from 'react';
// data
import { mockPlaces, placeIds } from '@/data/mockPlacesData';
// Assets
import profile from "@/assets/Profile.png"
// Components
import Screen from '@/src/shared/components/layout/Screen';
import Sort from '@/src/features/places/components/sort/Sort';
import PlaceCard from '@/src/features/places/components/place-card/PlaceCard';
import Icon from '@/src/shared/components/icons/Icon';
import useResponsive from '@/src/shared/hooks/useResponsive';
import { homeStyles } from '@/src/features/home/homeStyles';

const FILTERS = [ 'Most Viewed', 'Nearby', 'Latest' ];
const {
  header, headerTitle, headerSubtitle, profileImage,
  searchContainer, searchInput, filterButton,
  sectionHeader, sectionTitle, sectionAction,
  sortContainer, listContent
} = homeStyles

export function Home() {
  const [ selected, setSelected ] = useState('Most Viewed');
  const [ search, setSearch ] = useState("")
  const [ debouncedSearch, setDebouncedSearch ] = useState("")
  const [ filteredIds, setFilteredIds ] = useState(placeIds)
  const { hp } = useResponsive()

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 500)
    return () => clearTimeout(timer)
  }, [ search ])

  useEffect(() => {
    const result = placeIds.filter(id =>
      mockPlaces[ id ].placeName.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    setFilteredIds(result)
  }, [ debouncedSearch ])

  return (
    <Screen>
      {/* Header */ }
      <View style={ header }>
        <View>
          <Text style={ headerTitle }>Hi, Kaitlyn👋</Text>
          <Text style={ headerSubtitle }>Explore the world</Text>
        </View>
        <Image style={ profileImage } source={ profile } />
      </View>

      {/* Search */ }
      <View style={ searchContainer }>
        <TextInput
          value={ search }
          onChangeText={ setSearch }
          placeholder='Search Places'
          placeholderTextColor={ '#888888' }
          style={ searchInput }
        />
        <Pressable style={ filterButton }>
          <Icon name='options-outline' size={ 20 } />
        </Pressable>
      </View>

      {/* Section Header */ }
      <View style={ sectionHeader }>
        <Text style={ sectionTitle }>Popular Places</Text>
        <Text style={ sectionAction }>View all</Text>
      </View>

      {/* Filters */ }
      <View style={ sortContainer }>
        { FILTERS.map((filter) => (
          <Sort
            key={ filter }
            isActive={ selected === filter }
            label={ filter }
            onPress={ () => setSelected(filter) }
          />
        )) }
      </View>

      {/* List */ }
      <FlatList
        data={ filteredIds }
        contentContainerStyle={ listContent }
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
        keyExtractor={ (id) => id }
        ListEmptyComponent={ <Text>No items</Text> }
        style={ { maxHeight: hp(50) } }
        renderItem={ ({ item: id }) => (
          <PlaceCard
            id={ id }
            src={ mockPlaces[ id ].image }
            placeName={ mockPlaces[ id ].placeName }
            country={ mockPlaces[ id ].country }
            city={ mockPlaces[ id ].city }
            rate={ mockPlaces[ id ].rate }
          />
        ) }
      />
    </Screen>
  );
}