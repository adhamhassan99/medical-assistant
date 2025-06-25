import React from 'react'
import InteractionCard from './InteractionCard'
import { Text, TextArea, YStack } from 'tamagui'

type Props = {
    notes?: string
    setNotes: (notes: string) => void
}

const OptionalNotes = ({ setNotes, notes }: Props) => {
    return (
        <InteractionCard>
            <YStack gap={25}>
                <Text fontSize={20} fontWeight={'bold'}>Notes</Text>
                <TextArea defaultValue={notes} value={notes} onChangeText={setNotes} backgroundColor={'#ffffff'} placeholder='How are you feeling today?' height={100} />
            </YStack>
        </InteractionCard>
    )
}

export default OptionalNotes