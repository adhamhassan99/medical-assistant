import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { Button, createTamagui, ScrollView, TamaguiProvider, YStack } from 'tamagui';
import { Send } from '@tamagui/lucide-icons'

import { defaultConfig } from '@tamagui/config/v4' // for quick config install this
import Header from './src/components/Header';
import MoodSelector from './src/components/MoodSelector';
import SleepTimePicker from './src/components/SleepTimePicker';
import OptionalNotes from './src/components/OptionalNotes';
import FeedbackScreen from './src/views/FeedbackScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


export default function App() {
  const config = createTamagui(defaultConfig)

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TamaguiProvider config={config}>
        <SafeAreaProvider>
          <BottomSheetModalProvider>
            <FeedbackScreen />
          </BottomSheetModalProvider>
        </SafeAreaProvider>
      </TamaguiProvider>
    </GestureHandlerRootView>

  );
}

