/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <View className="w-full h-full justify-center items-center">
        <Text
          className="font-semibold text-lg"
          style={{ color: isDarkMode ? Colors.white : Colors.black }}
        >
          Hello this is Bajetto!
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default App;
