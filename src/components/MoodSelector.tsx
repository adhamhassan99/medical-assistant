import React from 'react'
import { Text, XStack, YStack } from 'tamagui'
import InteractionCard from './InteractionCard'
import MoodButton from './MoodButton'
import { Pressable } from 'react-native'

type Props = {
    mood?: string
    setMood: (mood: string) => void
}

const moods = {
    'Very Sad': '😢',
    'Sad': '😔',
    'Neutral': '😐',
    'Happy': '😊',
    'Very Happy': '😁'
}

const MoodSelector = ({ mood, setMood }: Props) => {
    return (
        <InteractionCard>
            <YStack gap={20}>
                <Text fontSize={20} fontWeight={'bold'}>Your Mood</Text>
                <XStack justifyContent='space-between' alignItems='center'>
                    {Object.entries(moods).map(([key, value]) => (
                        <Pressable key={key} onPress={() => setMood(key)}>

                            <MoodButton isActive={key === mood} mood={value} />

                        </Pressable>

                    ))}

                </XStack>
                <Text color={mood ? "black" : "gray"} alignSelf='center'>{mood ? mood : "Select your mood"}</Text>
            </YStack>
        </InteractionCard>

    )
}

export default MoodSelector