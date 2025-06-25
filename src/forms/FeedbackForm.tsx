import { View, Text } from 'react-native'
import React from 'react'
import { Button, YStack } from 'tamagui'
import MoodSelector from '../components/MoodSelector'
import SleepTimePicker from '../components/SleepTimePicker'
import OptionalNotes from '../components/OptionalNotes'
import { Send } from '@tamagui/lucide-icons'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

type Props = {}

type FormData = {
    mood: string
    sleepTime: number[]
    notes: string
}

const FeedbackForm = (props: Props) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({
        defaultValues: {
            sleepTime: [5],
        },
    })
    const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)
    return (

        <YStack paddingHorizontal={20} gap={20} width={'100%'}>
            <Controller
                rules={{ required: true }}
                control={control}
                name='mood'
                render={({ field }) => <MoodSelector {...field} mood={field.value} setMood={(value) => field.onChange(value)} />}
            />
            <Controller
                control={control}
                name='sleepTime'
                render={({ field }) => <SleepTimePicker {...field} sleepAmount={field.value} setSleepAmount={(value) => field.onChange(value)} />}
            />
            <Controller
                control={control}
                name='notes'
                render={({ field }) => <OptionalNotes {...field} setNotes={field.onChange} notes={field.value} />}
            />
            <Button alignSelf='center' marginTop={20} width={'100%'} icon={Send} backgroundColor={'#0280f6'} color={'#ffffff'} fontWeight={'bold'} size={'$4'} onPress={handleSubmit(onSubmit)} disabled={!isValid} opacity={!isValid ? 0.5 : 1}>
                Submit
            </Button>
        </YStack>
    )
}

export default FeedbackForm