import React from 'react';
import {StyleSheet, View, Modal, Animated, Easing} from 'react-native';
import {IMAGE} from '../../common/constants/image';

export default class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spinAnim: new Animated.Value(0)};
  }

  componentDidMount() {
    const {spinAnim} = this.state;
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }

  render() {
    const {spinAnim} = this.state;
    const spin = spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });

    return (
      <Modal transparent={true} visible={true}>
        <View style={styles.container}>
          <View style={styles.mainView}>
            <Animated.Image
              style={[styles.icon, {transform: [{rotate: spin}]}]}
              source={IMAGE.ICON_SPINNER}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000aa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    position: 'absolute',
    top: '40%',
    backgroundColor: '#bbe1fa',
    height: 100,
    width: 100,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7D7D7D',
  },
  icon: {
    height: 50,
    width: 50,
  },
});
