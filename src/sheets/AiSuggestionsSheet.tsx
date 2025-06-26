import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { BottomSheetModal, BottomSheetModalProps, BottomSheetView } from '@gorhom/bottom-sheet'
import { YStack } from 'tamagui'

type Props = {
    ref?: React.ForwardedRef<BottomSheetModal<any>>
} & Omit<BottomSheetModalProps, 'children'>

const AiSuggestionsSheet = ({ onChange, ref }: Props) => {
    return (
        <BottomSheetModal

            ref={ref}
            onChange={onChange}
            snapPoints={['90%']}


        >
            <BottomSheetView style={styles.contentContainer}>
                <Text>Awesome 🎉</Text>
            </BottomSheetView>
        </BottomSheetModal>
    )
}

export default AiSuggestionsSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        height: '100%'
    },
});