import React from 'react'
import { Platform } from 'react-native'
import { Text, YStack } from 'tamagui'

type Props = {
    children: React.ReactNode
}

const InteractionCard = ({ children }: Props) => {

    return (
        <YStack width={'100%'} elevation={Platform.OS === 'ios' ? 3 : 0} backgroundColor={'#f1eded9e'} padding={30} borderRadius={10}>
            {children}
        </YStack>
    )
}

export default InteractionCard