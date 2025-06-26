import { StyleSheet } from 'react-native'
import React from 'react'
import { H3, H4, H5, H6, Image, Text, XStack, YStack } from 'tamagui'
import { User2 } from '@tamagui/lucide-icons'

type Props = {}

const Header = (props: Props) => {
    return (
        <YStack>
            <XStack width='100%' justifyContent='space-between' alignItems='center' paddingHorizontal={20} paddingVertical={10} backgroundColor='white' borderBottomWidth={2} borderBottomColor={'lightgray'} >
                <XStack alignItems='center' gap={5}>
                    <Image source={{ uri: require('../../assets/health.jpg'), height: 30, width: 30 }} />
                    <H6 fontWeight={600}>HealthTrack</H6>
                </XStack>

                <YStack borderWidth={1} padding={5} alignItems='center' justifyContent='center' borderRadius={50} borderColor={'gray'}>
                    <User2 />
                </YStack>
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