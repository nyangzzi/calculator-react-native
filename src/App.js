import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Button, { ButtonTypes } from './components/Button';

const Operators = {
  CLEAR: 'C',
  MINUS: '-',
  PLUS: '+',
  EQUAL: '=',
};

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
          <View style={styles.number}>
            {Array.from({ length: 9 }).map((_, index) => (
              <Button
                title={index + 1}
                onPress={() => {}}
                buttonStyle={{ width: '33.1%', height: '33.1%' }}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button title="0" onPress={() => {}} buttonStyle={{ flex: 2 }} />
            <Button
              title={Operators.EQUAL}
              onPress={() => {}}
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ flex: 1 }}
            />
          </View>
        </View>

        <View style={styles.operator}>
          <Button
            title={Operators.CLEAR}
            onPress={() => {}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ flex: 1 }}
          />
          <Button
            title={Operators.MINUS}
            onPress={() => {}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ flex: 1 }}
          />
          <Button
            title={Operators.PLUS}
            onPress={() => {}}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ flex: 2 }}
          />
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
    gap: 1,
    backgroundColor: '#000000',
  },
  resultText: {
    fontSize: 60,
    color: '#ffffff',
    padding: 20,
  },
  leftPad: { flex: 3, gap: 1 },
  number: {
    flex: 3,
    flexDirection: 'row',
    gap: 1,
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    flex: 1,
    gap: 1,
  },
  operator: {
    flex: 1,
    gap: 1,
  },
});
