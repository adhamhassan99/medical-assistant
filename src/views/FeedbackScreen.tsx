import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { ScrollView } from 'tamagui'


import Header from '../components/Header'
import FeedbackForm from '../forms/FeedbackForm'

type Props = {}

const FeedbackScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Header />

            <ScrollView flex={1} showsVerticalScrollIndicator={false} width={'100%'} keyboardDismissMode='interactive'>
                <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 0} behavior={Platform.OS === 'ios' ? 'position' : undefined} style={{ width: '100%', flex: 1 }}>
                    <FeedbackForm />
                </KeyboardAvoidingView>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
export default FeedbackScreen