import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [result, setResult] = useState(0);

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={[styles.resultContainer, { flex: 1 }]}>
        {/* 결과 */}
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={[styles.buttonContainer, { height: width }]}>
        {/* 버튼 */}
        <View style={styles.leftPad}>
          <View style={styles.number}></View>
          <View style={styles.spacer} />
          <View style={styles.bottom}>
            <View style={styles.spacer} />
          </View>
        </View>

        <View style={styles.spacer} />

        <View style={styles.operator}>
          <View style={styles.spacer} />
        </View>
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  resultText: {
    fontSize: 60,
    color: '#ffffff',
    padding: 20,
  },
  leftPad: { flex: 3 },
  number: {
    flex: 3,
    backgroundColor: 'blue',
  },
  bottom: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'orange',
  },
  operator: {
    flex: 1,
    backgroundColor: 'red',
  },
  spacer: {
    width: 1,
    height: 1,
    alignItems: 'stretch',
  },
});
