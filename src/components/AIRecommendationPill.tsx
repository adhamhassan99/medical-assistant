import { Send } from '@tamagui/lucide-icons'
import React from 'react'
import { OpaqueColorValue } from 'react-native'
import { GetThemeValueForKey, Text, XStack, YStack } from 'tamagui'

type Props = {
    tint?: "unset" | GetThemeValueForKey<"backgroundColor"> | OpaqueColorValue | undefined,
    iconColor: GetThemeValueForKey<"color">,
    suggestion: string
}

const AIRecommendationPill = ({ tint, suggestion, iconColor }: Props) => {
    return (
        <XStack backgroundColor={tint} padding={20} borderRadius={15}>
            <XStack width={'100%'} gap={15} alignItems='center'>
                <Send color={iconColor} />
                <Text color={'black'} paddingEnd={30} fontWeight={'600'} lineHeight={20} flex={1} textWrap='pretty'>{suggestion}</Text>
            </XStack>
        </XStack>
    )
}

export default AIRecommendationPill