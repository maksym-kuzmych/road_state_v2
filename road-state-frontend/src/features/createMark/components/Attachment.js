import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {ActionSheet} from 'native-base';
import Slider from '../components/Slider';
import ImagePicker from 'react-native-image-crop-picker';
import {strings} from '../../resources/resources'

const width = Dimensions.get('window').width;
export default class Attachment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      imageCounter: 1,
    };
  }

  onSelectedImage = image => {
    let newDataImg = this.state.fileList;
    let counter = this.state.imageCounter;
    const source = {uri: image.path};
    let item = {
      id: counter,
      url: source,
      content: image.data,
    };
    newDataImg.push(item);
    this.setState({
      fileList: newDataImg,
      imageCounter: counter + 1,
    });
  };

  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: width,
      includeBase64: true,
    }).then(image => {
      this.onSelectedImage(image);
    });
  };

  choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      compressImageMaxWidth: width,
      includeBase64: true,
    }).then(image => {
      this.onSelectedImage(image);
    });
  };

  onClickAddImage = () => {
    const BUTTONS = [
      strings.actionPanel.takeFromCamera,
      strings.actionPanel.takeFromGalery,
      strings.actionPanel.cancel,
    ];
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: 2,
        title: strings.actionPanel.title,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            this.takePhotoFromCamera();
            break;
          case 1:
            this.choosePhotoFromLibrary();
            break;
          default:
            break;
        }
      },
    );
  };

  render() {
    let {fileList} = this.state;
    
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>{strings.newMark.lblPhoto}: </Text>
        <View style={styles.attachmentsContainer}>
          {fileList.length ? <Slider images={fileList} /> : null}
          <TouchableOpacity
            onPress={this.onClickAddImage}
            style={styles.btnAddPhotos}>
            <Text style={styles.btnText}>{strings.newMark.btnAddPhoto}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: '95%', marginTop: 10},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  attachmentsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAddPhotos: {
    backgroundColor: '#0080ff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
    width: '100%',
  },
  btnText: {
    color: '#fff',
    fontSize: 15,
  },
  itemImage: {
    backgroundColor: '#2F455C',
    height: 150,
    width: width - 60,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  itemViewImage: {
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
});
