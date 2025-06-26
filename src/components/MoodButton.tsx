import React from 'react'
import { Text, YStack } from 'tamagui'

type Props = {
    mood: string
    isActive: boolean
}

const MoodButton = ({ isActive, mood }: Props) => {
    return (
        <YStack backgroundColor={isActive ? '#0280f6' : undefined} padding={5} borderRadius={200} scale={isActive ? 1.5 : 1}>
            <Text fontSize={25}>{mood}</Text>

        </YStack>
    )
}

export default MoodButton