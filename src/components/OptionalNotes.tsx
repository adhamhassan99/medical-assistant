import React from 'react'
import InteractionCard from './InteractionCard'
import { Text, TextArea, YStack } from 'tamagui'

type Props = {}

const OptionalNotes = (props: Props) => {
    return (
        <InteractionCard>
            <YStack gap={25}>
                <Text fontSize={20} fontWeight={'bold'}>Notes</Text>
                <TextArea backgroundColor={'#ffffff'} placeholder='How are you feeling today?' height={100} />
            </YStack>
        </InteractionCard>
    )
}

export default OptionalNotes