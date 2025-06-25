import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Button, ScrollView, YStack } from 'tamagui'
import MoodSelector from '../components/MoodSelector'
import SleepTimePicker from '../components/SleepTimePicker'
import OptionalNotes from '../components/OptionalNotes'
import { Send } from '@tamagui/lucide-icons'
import Header from '../components/Header'

type Props = {}

const FeedbackScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Header />





            <ScrollView flex={1} showsVerticalScrollIndicator={false} width={'100%'} >
                <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === 'ios' ? 200 : 0} behavior={Platform.OS === 'ios' ? 'position' : undefined} style={{ width: '100%', flex: 1 }}>

                    <YStack paddingHorizontal={20} gap={20} width={'100%'}>
                        <MoodSelector />
                        <SleepTimePicker />
                        <OptionalNotes />
                    </YStack>
                    <Button width={'90%'} icon={Send} backgroundColor={'#0280f6'} color={'#ffffff'} fontWeight={'bold'} size={'$4'}>
                        Submit
                    </Button>
                </KeyboardAvoidingView>

            </ScrollView>





        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
});
export default FeedbackScreen