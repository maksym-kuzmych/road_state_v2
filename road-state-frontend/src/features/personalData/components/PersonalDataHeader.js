import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {ActionSheet} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import {IMAGE as Icon} from '../../../common/constants/image';
import {IMAGE} from '../../../common/constants/testPhotos';

const width = Dimensions.get('window').width;
export default class PersonalDataContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        url: IMAGE.DEFAULT_PROFILE,
      },
    };
  }

  onSelectedImage = image => {
    const source = {uri: image.path};
    let item = {
      url: source,
      content: image.data,
    };
    this.setState({
      image: item,
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
      'Take Photo From Camera',
      'Choose Photo From Library',
      'Cancel',
    ];
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: 2,
        title: 'Select a photo',
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
    const {image} = this.state;
    return (
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={image.url} />
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={this.onClickAddImage}>
          <Image
            style={styles.photoIcon}
            source={Icon.ICON_PHOTO}
            tintColor="#7D7D7D"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '35%',
    backgroundColor: '#59b2af',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 35,
    position: 'absolute',
    right: 20,
    top: 150,
    borderColor: '#7D7D7D',
    borderWidth: 0.5,
    zIndex: 5,
  },
  photoIcon: {
    width: 35,
    height: 35,
  },
});
