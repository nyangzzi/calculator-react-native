import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { Button, ButtonTypes } from './components/Button';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [result, setResult] = useState(0);

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.resultContainer}>
        {/* 결과 */}
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* 버튼 */}
        <view style={styles.leftPad}>
          <view style={styles.number}></view>
          <view style={styles.bottom}></view>
        </view>

        <view style={styles.operator}></view>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  resultContainer: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'felx-end',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  resultText: {
    fontSize: 60,
    fontWeight: 70,
    color: '#ffffff',
    padding: 30,
  },
  leftPad: {},
  number: {},
  bottom: {
    flexDirection: 'row',
  },
  operator: {},
});
