import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {IMAGE} from '../../../common/constants/image';
import {strings} from '../../resources/resources';

let dynamicContainerStyle = style => {
  return {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: style.borderBottomColor,
    height: 40,
    marginBottom: style.marginBottom,
  };
};

export default function PasswordToggleInput({textStyle, placeholderColor}) {
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  return (
    <View style={dynamicContainerStyle(textStyle)}>
      <TextInput
        style={[styles.textinput, textStyle]}
        secureTextEntry={secureTextEntry}
        placeholder={strings.registration.passwordPlaceholder}
        placeholderTextColor={placeholderColor}
      />
      <TouchableOpacity
        onPress={() =>
          secureTextEntry ? setSecureTextEntry(false) : setSecureTextEntry(true)
        }>
        <Image
          source={secureTextEntry ? IMAGE.ICON_EYEHIDE : IMAGE.ICON_EYE}
          style={styles.icon}
          tintColor="#f8f8f8"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    flex: 1,
    alignSelf: 'stretch',
  },
  icon: {
    padding: 10,
    margin: 5,
    height: 24,
    width: 24,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
