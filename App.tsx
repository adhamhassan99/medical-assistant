import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, createTamagui, ScrollView, TamaguiProvider, YStack } from 'tamagui';
import { Send } from '@tamagui/lucide-icons'

import { defaultConfig } from '@tamagui/config/v4' // for quick config install this
import Header from './src/components/Header';
import MoodSelector from './src/components/MoodSelector';
import SleepTimePicker from './src/components/SleepTimePicker';
import OptionalNotes from './src/components/OptionalNotes';
import FeedbackScreen from './src/views/FeedbackScreen';


export default function App() {
  const config = createTamagui(defaultConfig)

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <FeedbackScreen />
      </SafeAreaView>

    </TamaguiProvider>
  );
}

