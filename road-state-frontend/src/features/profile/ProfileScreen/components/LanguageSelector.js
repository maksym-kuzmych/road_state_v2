import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import RadioButtonGroup from '../components/RadioButtonGroup';
import {strings} from '../../../resources/resources';

export default class LanguageSelector extends React.Component {
  handleLanguageUpdate = languageId => {
    const {getLocale} = this.props;
    if (languageId === 1) {
      getLocale('en');
      this.setState({});
    } else {
      getLocale('ru');
      this.setState({});
    }
  };

  render() {
    const {hideModal, locale} = this.props;

    return (
      <Modal transparent={true} visible={true}>
        <View style={styles.container}>
          <View style={styles.mainView}>
            <Text style={styles.header}>{strings.languageSelector.applicationLanguage}</Text>
            <RadioButtonGroup
              hideModal={hideModal}
              locale={locale}
              updateLanguage={languageId =>
                this.handleLanguageUpdate(languageId)
              }
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => hideModal(false)}>
              <Text style={styles.btnText}>{strings.languageSelector.btnCancel}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

// export default function LanguageSelector({hideModal}) {
//   const [locale, setLocale] = useState({});

//   const handleLanguageUpdate = (languageId) => {
//     if (languageId === 1) {
//       strings.setLanguage('en');
//       setLocale({});
//     } else {
//       strings.setLanguage('ru');
//       setLocale({});
//     }
//   };

//   return (
//     <Modal transparent={true} visible={true}>
//       <View style={styles.container}>
//         <View style={styles.mainView}>
//           <Text style={styles.header}>{strings.lang}</Text>
//           <RadioButtonGroup hideModal={hideModal} updateLanguage={(languageId) => handleLanguageUpdate(languageId)}/>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => hideModal(false)}>
//             <Text style={styles.btnText}>Cancel</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    position: 'absolute',
    top: 175,
    backgroundColor: '#fff',
    height: 180,
    width: 300,
    borderRadius: 3,
  },
  header: {
    padding: 10,
    fontSize: 19,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  btnText: {
    fontSize: 16,
    color: '#267175',
    textTransform: 'uppercase',
  },
});
