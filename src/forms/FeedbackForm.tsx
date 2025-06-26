import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, Sheet, YStack } from 'tamagui'
import MoodSelector from '../components/MoodSelector'
import SleepTimePicker from '../components/SleepTimePicker'
import OptionalNotes from '../components/OptionalNotes'
import { Send } from '@tamagui/lucide-icons'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {
    onSuccess: () => void
}

type FormData = {
    mood: string
    sleepTime: number[]
    notes: string
}

const FeedbackForm = ({ onSuccess }: Props) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({
        defaultValues: {
            sleepTime: [8],
        },
    })
    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data)
        onSuccess()
    }
    const { bottom } = useSafeAreaInsets();

    const [modalOpen, setModalOpen] = useState(false)

    return (

        <YStack paddingBottom={bottom} paddingHorizontal={20} gap={20} width={'100%'}>
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