import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { ScrollView } from 'tamagui'


import Header from '../components/Header'
import FeedbackForm from '../forms/FeedbackForm'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AiSuggestionsSheet from '../sheets/AiSuggestionsSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

type Props = {}

const FeedbackScreen = (props: Props) => {
    const { top } = useSafeAreaInsets();

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);


    const handleSheetClose = useCallback(() => {

        bottomSheetModalRef.current?.close()
    }, []);

    return (
        <View style={[styles.container, { paddingTop: top }]}>
            <Header />

            <ScrollView flex={1} showsVerticalScrollIndicator={false} width={'100%'} keyboardDismissMode='interactive'>
                <KeyboardAvoidingView keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} behavior={Platform.OS === 'ios' ? 'position' : undefined} style={{ width: '100%', flex: 1 }}>
                    <FeedbackForm onSuccess={handlePresentModalPress} />
                </KeyboardAvoidingView>

            </ScrollView>

            <AiSuggestionsSheet ref={bottomSheetModalRef} handleSheetClose={handleSheetClose} onChange={(i) => { }} />
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