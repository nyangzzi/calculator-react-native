import { StyleSheet, Text, View } from 'react-native';
import { Button, ButtonTypes } from './components/Button';
import { useState } from 'react';

export default function App() {
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        {/* 결과 */}
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>{/* 버튼 */}</View>
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
  },
  resultText: {
    fontSize: 60,
    fontWeight: 70,
    color: '#ffffff',
    padding: 30,
  },
});
