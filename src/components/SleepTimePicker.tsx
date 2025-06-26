import React from 'react'
import { Text, XStack, YStack } from 'tamagui'
import InteractionCard from './InteractionCard'
import SimpleSlider from './Slider'
import * as Haptics from 'expo-haptics';

type Props = {
    sleepAmount: number[]
    setSleepAmount: (sleepAmount: number[]) => void
}

const SleepTimePicker = ({ sleepAmount = [5], setSleepAmount }: Props) => {
    const handleSleepChange = (sleep: number[]) => {
        setSleepAmount(sleep)
        Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
        )
    }
    return (
        <InteractionCard>
            <YStack gap={25}>
                <Text fontSize={20} fontWeight={'bold'}>Sleep Hours Last Night</Text>
                <SimpleSlider min={1} max={12} step={1} defaultValue={sleepAmount} value={sleepAmount} onValueChange={handleSleepChange} />
                <XStack justifyContent='space-between' alignItems='center'>
                    <Text fontSize={15}>1h</Text>
                    <XStack gap={5} alignItems='center'>
                        <Text fontSize={30} fontWeight={'600'} color={'#0280f6'}>{sleepAmount}</Text>
                        <Text fontSize={20} fontWeight={500}>hours</Text>
                    </XStack>
                    <Text fontSize={15}>12h</Text>
                </XStack>
            </YStack>
        </InteractionCard>

    )
}

export default SleepTimePicker