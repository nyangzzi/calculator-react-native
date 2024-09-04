import { Pressable, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export const ButtonTypes = {
  NUMBER: 'number',
  OPERATOR: 'operator',
};

const ButtonColors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', '#b45309'],
};

const Button = ({ title, onPress, buttonStyle, buttonType }) => {
  return (
    <Pressable
      onPress={onPress}
      style={(pressed) => [
        styles.button,
        { backgroundColor: ButtonColors[buttonType][0] },
        pressed && { backgroundColor: ButtonColors[buttonType][1] },
        buttonStyle,
      ]}
    >
      <Text style={styles.title}>{title}</Text>;
    </Pressable>
  );
};

Button.defaultProps = {
  buttonType: ButtonTypes.NUMBER,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.keys(ButtonTypes)),
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#ffffff',
  },
});

export default Button;
