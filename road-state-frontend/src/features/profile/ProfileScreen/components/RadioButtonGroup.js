import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {IMAGE} from '../../../../common/constants/image';

const rbColor = '#423c6d';

export default class RadioButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    const checkedValue = this.getCheckedValue();
    this.state = {
      data: ['Русский', 'English'],
      checked: checkedValue,
    };
  }

  getCheckedValue = () => {
    const {locale} = this.props;
    if (locale === 'ru') return 0;
    else return 1;
  };

  handleSetChecked = Id => {
    const {hideModal, updateLanguage} = this.props;
    updateLanguage(Id);
    this.setState({
      checked: Id,
    });
    hideModal(false);
  };

  render() {
    const {data, checked} = this.state;

    return (
      <View style={styles.container}>
        {data.map((data, Id) => {
          return (
            <View key={Id}>
              {checked === Id ? (
                <TouchableOpacity style={styles.button}>
                  <Image
                    style={styles.icon}
                    source={IMAGE.ICON_RADIO_CHECKED}
                    tintColor={rbColor}
                  />
                  <Text style={styles.text}>{data}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.handleSetChecked(Id)}>
                  <Image
                    style={styles.icon}
                    source={IMAGE.ICON_RADIO_UNCHECKED}
                    tintColor={rbColor}
                  />
                  <Text style={styles.text}>{data}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
    );
  }
}
// export default function RadioButtonGroup({hideModal, updateLanguage}) {
//   let [data, setData] = useState(['Русский', 'English']);
//   let [checked, setChecked] = useState(1);

//   const handleSetChecked = Id => {
//     updateLanguage(Id);
//     setChecked(Id);
//   };

//   return (
//     <View style={styles.container}>
//       {data.map((data, Id) => {
//         return (
//           <View key={Id}>
//             {checked === Id ? (
//               <TouchableOpacity style={styles.button}>
//                 <Image
//                   style={styles.icon}
//                   source={IMAGE.ICON_RADIO_CHECKED}
//                   tintColor={rbColor}
//                 />
//                 <Text style={styles.text}>{data}</Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => handleSetChecked(Id)}>
//                 <Image
//                   style={styles.icon}
//                   source={IMAGE.ICON_RADIO_UNCHECKED}
//                   tintColor={rbColor}
//                 />
//                 <Text style={styles.text}>{data}</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         );
//       })}
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    height: '50%',
    paddingTop: 23,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 17,
    paddingBottom: 15,
  },
  icon: {
    height: 25,
    width: 25,
  },
  text: {
    marginLeft: 15,
    fontSize: 15,
  },
});
