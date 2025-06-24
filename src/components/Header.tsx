import { StyleSheet } from 'react-native'
import React from 'react'
import { H3, H4, H5, H6, Text, XStack, YStack } from 'tamagui'

type Props = {}

const Header = (props: Props) => {
    return (
        <YStack>
            <XStack width='100%' justifyContent='space-between' alignItems='center' paddingHorizontal={20} paddingVertical={10} backgroundColor='white' borderBottomWidth={2} borderBottomColor={'lightgray'} >
                <H6>HealthTrack</H6>
                <Text>icon</Text>
            </XStack>

            <YStack gap={12} paddingHorizontal={20} paddingVertical={30}>
                <H5 fontWeight={'bold'}>How are you feeling today?</H5>
                <Text fontSize={18} fontWeight={'500'}>Let's track your wellness journey</Text>
            </YStack>
        </YStack>

    )
}

export default Header

const styles = StyleSheet.create({})