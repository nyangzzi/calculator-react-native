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
  const [formula, setFormula] = useState([]);

  const { width } = useWindowDimensions();

  const formatComma = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const onPressNum = (num) => {
    if (formula.at(-1) === Operators.EQUAL) {
      setFormula([]);
      setResult(num);
    } else setResult((prev) => prev * 10 + num);
  };

  const calcNum = () => {
    let calcResult = 0;
    [...formula, result].forEach((value, index) => {
      if (!isNaN(value)) {
        if (index === 0 || formula[index - 1] === Operators.PLUS)
          calcResult += value;
        else calcResult -= value;
      }
    });
    return calcResult;
  };

  const onPressOperator = (operator) => {
    switch (operator) {
      case Operators.CLEAR:
        setFormula([]);
        setResult(0);
        break;
      case Operators.EQUAL:
        {
          setFormula([...formula, result, operator]);
          setResult(calcNum());
        }
        break;
      default:
        setFormula([...formula, result, operator]);
        setResult(0);
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={[styles.resultContainer, { flex: 1 }]}>
        {/* 결과 */}
        <Text style={styles.formulaText}>
          {formula.map((value) => formatComma(value))}
        </Text>
        <Text style={styles.resultText}>{formatComma(result)}</Text>
      </View>
      <View style={[styles.buttonContainer, { height: width }]}>
        {/* 버튼 */}
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {Array.from({ length: 9 }).map((_, index) => (
              <Button
                title={index + 1}
                onPress={() => onPressNum(index + 1)}
                buttonStyle={{ width: '33.1%', height: '33.1%' }}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              title="0"
              onPress={() => onPressNum(0)}
              buttonStyle={{ flex: 2 }}
            />
            <Button
              title={Operators.EQUAL}
              onPress={() => {
                onPressOperator(Operators.EQUAL);
              }}
              buttonType={ButtonTypes.OPERATOR}
              buttonStyle={{ flex: 1 }}
            />
          </View>
        </View>

        <View style={styles.operator}>
          <Button
            title={Operators.CLEAR}
            onPress={() => {
              onPressOperator(Operators.CLEAR);
            }}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ flex: 1 }}
          />
          <Button
            title={Operators.MINUS}
            onPress={() => {
              onPressOperator(Operators.MINUS);
            }}
            buttonType={ButtonTypes.OPERATOR}
            buttonStyle={{ flex: 1 }}
          />
          <Button
            title={Operators.PLUS}
            onPress={() => {
              onPressOperator(Operators.PLUS);
            }}
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
  formulaText: {
    fontSize: 30,
    color: 'gray',
    paddingEnd: 20,
    paddingStart: 20,
    paddingTop: 20,
  },
  resultText: {
    fontSize: 60,
    color: '#ffffff',
    paddingEnd: 20,
    paddingStart: 20,
    paddingBottom: 20,
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
