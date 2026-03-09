import { mockPlaces } from '@/data/mockPlacesData'
import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { KeyboardAvoidingView, Modal, Platform, Pressable, ScrollView, Text, View } from 'react-native'
import Screen from '@/src/shared/components/layout/Screen'
import HeroImage from '../details/components/hero-image/HeroImage'
import Input from '@/src/shared/components/input/Input'
import { bookingFormStyles } from './bookingFormStyle'
import { PrimaryButtun, SecondaryButtun } from '@/src/shared/components/buttons/Buttun'

const {
    content, submitButton, submitText,
    overlay, modalContainer, modalTitle, modalRow,
    modalLabel, modalValue
} = bookingFormStyles

const validateName = (val: string) => val.trim().length < 2 ? 'Name must be at least 2 characters' : ''
const validateEmail = (val: string) => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ? 'Invalid email address' : ''
const validatePassword = (val: string) => val.length < 6 ? 'Password must be at least 6 characters' : ''

export default function BookingForm() {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errors, setErrors ] = useState({ name: '', email: '', password: '' })
    const [ modalVisible, setModalVisible ] = useState(false)
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { id } = route.params as { id: string }
    const place = mockPlaces[ id ]

    const handleSubmit = () => {
        const newErrors = {
            name: validateName(name),
            email: validateEmail(email),
            password: validatePassword(password),
        }
        setErrors(newErrors)

        const hasErrors = Object.values(newErrors).some(error => error !== '')
        if (!hasErrors) setModalVisible(true)
    }
    const handleConfirm = () => {
        navigation.navigate('HomeTabs')
        setModalVisible(false)
    }
    return (
        <Screen fillScreen={ true }>
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
                style={ { flex: 1 } }
            >
                <ScrollView contentContainerStyle={ { paddingBottom: 50 } } showsVerticalScrollIndicator={ false }>
                    <View style={ content }>
                        <HeroImage bookMark={ false } place={ place } />

                        <Input
                            label="Name"
                            value={ name }
                            onChangeText={ setName }
                            placeholder='Name'
                            error={ errors.name }
                        />
                        <Input
                            label="Email"
                            value={ email }
                            onChangeText={ setEmail }
                            placeholder='Email'
                            error={ errors.email }
                        />
                        <Input
                            label="Password"
                            value={ password }
                            onChangeText={ setPassword }
                            placeholder='Password'
                            secureTextEntry={ true }
                            error={ errors.password }
                        />

                        <Pressable onPress={ handleSubmit } style={ submitButton }>
                            <Text style={ submitText }>Submit</Text>
                        </Pressable>
                    </View>

                    <Modal visible={ modalVisible } transparent={ true } animationType="slide">
                        <View style={ overlay }>
                            <View style={ modalContainer }>
                                <Text style={ modalTitle }>Booking Summary</Text>
                                <View style={ modalRow }>
                                    <Text style={ modalLabel }>Place</Text>
                                    <Text style={ modalValue }>{ place?.placeName }</Text>
                                </View>
                                <View style={ modalRow }>
                                    <Text style={ modalLabel }>Name</Text>
                                    <Text style={ modalValue }>{ name }</Text>
                                </View>
                                <View style={ modalRow }>
                                    <Text style={ modalLabel }>Email</Text>
                                    <Text style={ modalValue }>{ email }</Text>
                                </View>
                                <View style={ modalRow }>
                                    <Text style={ modalLabel }>Price</Text>
                                    <Text style={ modalValue }>${ place?.price }</Text>
                                </View>
                                <PrimaryButtun label={ 'Confirm' } onPress={ () => handleConfirm() } />
                                <SecondaryButtun label={ 'Cancel' } onPress={ () => setModalVisible(false) } />
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </KeyboardAvoidingView>
        </Screen>
    )
}