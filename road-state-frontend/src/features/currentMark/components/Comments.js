import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Body} from 'native-base';
import {IMAGE as Photo} from '../../../common/constants/testPhotos';
import {IMAGE} from '../../../common/constants/image';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputComment: '',
    };
  }

  render() {
    const {inputComment} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Comments: <Text style={styles.commentsNumber}>20</Text>
        </Text>
        <View style={styles.inputContainer}>
          <View style={styles.photoContainer}>
            <Image style={styles.photo} source={Photo.ROAD_1} />
          </View>
          <TextInput
            style={styles.text}
            placeholder="Leave a comment"
            onChangeText={text => this.setState({inputComment: text})}
            value={inputComment}
            maxLength={40}
          />
          {inputComment !== '' ? (
            <View style={styles.sendIconContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.sendIcon}
                  source={IMAGE.ICON_SEND_COMMENT}
                  tintColor="#40bad5"
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
        <View style={styles.commentsSection}>
          <View style={styles.commentContainer}>
            <View style={styles.photoContainer}>
              <Image style={styles.photo} source={Photo.ROAD_2} />
            </View>
            <Body style={styles.textBodyContainer}>
              <Text style={styles.primaryText}>
                Author Name <Text style={styles.dot}>⬤</Text> Comment Creation
                Date
              </Text>
              <Text style={styles.secondaryText}>
                Comment Body Comment Body Comment Body Comment Body Comment Body
                Comment Body
              </Text>
            </Body>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {width: '100%', marginTop: 10},
  commentsNumber: {
    color: '#7D7D7D',
  },
  photoContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  photo: {
    height: 33,
    width: 33,
    borderRadius: 20,
  },
  sendIconContainer: {
    position: 'absolute',
    right: 10,
  },
  sendIcon: {
    height: 30,
    width: 30,
  },
  dot: {
    fontSize: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderColor: '#7D7D7D',
    borderBottomWidth: 1,
  },
  text: {
    marginTop: 5,
    textAlignVertical: 'top',
    color: '#000',
    fontSize: 15,
  },
  commentsSection: {
    height: '100%',
  },
  commentContainer: {
    marginTop: 10,
    paddingBottom: 10,
    borderColor: '#7D7D7D',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textBodyContainer: {
    // paddingBottom: 5,
    // borderBottomColor: '#7D7D7D',
    // borderBottomWidth: 1.5,
  },
  primaryText: {
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
  secondaryText: {
    fontStyle: 'italic',
    color: '#000',
    textAlign: 'left',
    alignSelf: 'stretch',
  },
});
