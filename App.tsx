import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, createTamagui, ScrollView, TamaguiProvider, YStack } from 'tamagui';
import { Send } from '@tamagui/lucide-icons'

import { defaultConfig } from '@tamagui/config/v4' // for quick config install this
import Header from './src/components/Header';
import MoodSelector from './src/components/MoodSelector';
import SleepTimePicker from './src/components/SleepTimePicker';
import OptionalNotes from './src/components/OptionalNotes';


export default function App() {
  const config = createTamagui(defaultConfig)

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <Header />
          <KeyboardAvoidingView behavior='height' style={{ flex: 1, width: '100%' }} >

            <ScrollView showsVerticalScrollIndicator={false} width={'100%'} marginBottom={20}>

              <YStack paddingHorizontal={20} gap={20} width={'100%'}>
                <MoodSelector />
                <SleepTimePicker />
                <OptionalNotes />
              </YStack>
            </ScrollView>
          </KeyboardAvoidingView>

          <Button width={'90%'} icon={Send} backgroundColor={'#0280f6'} color={'#ffffff'} fontWeight={'bold'} size={'$4'}>
            Submit
          </Button>
        </View>
      </SafeAreaView>

    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
