import React from 'react'
import { Text, XStack, YStack } from 'tamagui'
import InteractionCard from './InteractionCard'

type Props = {
    mood?: string
    setMood?: (mood: string) => void
}

const MoodSelector = ({ mood, setMood }: Props) => {
    return (
        <InteractionCard>
            <YStack gap={25}>
                <Text fontSize={20} fontWeight={'bold'}>Your Mood</Text>
                <XStack justifyContent='space-between' alignItems='center'>
                    <Text fontSize={25}>😢</Text>
                    <Text fontSize={25}>😔</Text>
                    <Text fontSize={25}>😐</Text>
                    <Text fontSize={25}>😊</Text>
                    <Text fontSize={25}>😁</Text>
                </XStack>
                <Text color={mood ? "black" : "gray"} alignSelf='center'>{mood ? "chosen mood" : "Select your mood"}</Text>
            </YStack>
        </InteractionCard>

    )
}

export default MoodSelector