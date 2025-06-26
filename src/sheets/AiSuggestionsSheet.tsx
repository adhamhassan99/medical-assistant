import { StyleSheet } from 'react-native'
import React from 'react'
import { BottomSheetModal, BottomSheetModalProps, BottomSheetView } from '@gorhom/bottom-sheet'
import { Text, YStack } from 'tamagui'
import LottieView from "lottie-react-native";
import AIRecommendationPill from '../components/AIRecommendationPill';

type Props = {
    ref?: React.ForwardedRef<BottomSheetModal<any>>
} & Omit<BottomSheetModalProps, 'children'>

const AiSuggestions = [
    { tint: '#0040ff41', iconColor: '#0040ff', suggestion: 'Try meditating for 10 minutes today to improve your mood' }, { tint: '#aa00ff26', iconColor: '#aa00ff', suggestion: 'Consider a consistent bedtime routine for better sleep quality' }, { tint: '#31d91e37', iconColor: '#13a902', suggestion: 'A 15-minute walk can boost your energy levels' }
]

const AiSuggestionsSheet = ({ onChange, ref }: Props) => {
    return (
        <BottomSheetModal
            ref={ref}
            onChange={onChange}
            snapPoints={['90%']}
            enablePanDownToClose
            backgroundStyle={{ borderRadius: 20, elevation: 20 }}
            backdropComponent={() => <YStack position='absolute' backgroundColor={'black'} opacity={0.2} height={'100%'} width={'100%'} />}

        >
            <BottomSheetView style={styles.contentContainer}>
                <LottieView
                    source={require("../../assets/success-anim.json")}
                    style={{ width: "100%", height: "20%" }}
                    autoPlay
                    loop={false}
                    onAnimationFinish={() => { }}
                />

                <Text marginVertical={15} fontWeight={600} fontSize={24}>Check in complete!</Text>
                <Text textAlign='center' fontSize={18}>Your wellness data has been recorded</Text>
                <YStack width={'100%'} flex={1} paddingVertical={30} gap={20}>
                    <Text fontSize={16} fontWeight={600}>AI Recommendations:</Text>
                    <YStack gap={15}>
                        {AiSuggestions.map(item => (
                            <AIRecommendationPill key={item.suggestion} {...item} />
                        ))}
                    </YStack>
                </YStack>
            </BottomSheetView>
        </BottomSheetModal>
    )
}

export default AiSuggestionsSheet
const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        paddingHorizontal: 45
    },
});