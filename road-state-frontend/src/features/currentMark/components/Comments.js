import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Body} from 'native-base';
import {IMAGE as Photo} from '../../../common/constants/testPhotos';
import {IMAGE} from '../../../common/constants/image';
import {strings} from '../../resources/resources';

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputComment: '',
      addComment: false,
      addedComment: '',
    };
  }

  render() {
    const {inputComment, addComment, addedComment} = this.state;
    const {isLogedIn} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {strings.currentMark.lblComments}:{' '}
          <Text style={styles.commentsNumber}>1</Text>
        </Text>
        {isLogedIn === true && (
          <View style={styles.inputContainer}>
            <View style={styles.photoContainer}>
              <Image style={styles.photo} source={Photo.DEFAULT_PROFILE} />
            </View>
            <TextInput
              style={styles.text}
              placeholder={strings.currentMark.leaveCommentPlaceholder}
              onChangeText={text => this.setState({inputComment: text})}
              value={inputComment}
              maxLength={40}
            />
            {inputComment !== '' ? (
              <View style={styles.sendIconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    Keyboard.dismiss;
                    this.setState({
                      addedComment: inputComment,
                      addComment: true,
                      inputComment: '',
                    });
                  }}>
                  <Image
                    style={styles.sendIcon}
                    source={IMAGE.ICON_SEND_COMMENT}
                    tintColor="#40bad5"
                  />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        )}
        <View style={styles.commentsSection}>
          <View style={styles.commentContainer}>
            <View style={styles.photoContainer}>
              <Image style={styles.photo} source={Photo.ROAD_2} />
            </View>
            <Body style={styles.textBodyContainer}>
              <Text style={styles.primaryText}>
                Driver1980 <Text style={styles.dot}>⬤</Text> 15.05.2020
              </Text>
              <Text style={styles.secondaryText}>
                Поддерживаю автора, сам неоднократно проезжал через данное место
                и это сущий кошмар. Нужно что-то с этим делать!
              </Text>
            </Body>
          </View>
          {addComment === true ? (
            <View style={styles.commentContainer}>
              <View style={styles.photoContainer}>
                <Image style={styles.photo} source={Photo.DEFAULT_PROFILE} />
              </View>
              <Body style={styles.textBodyContainer}>
                <Text style={styles.primaryText}>
                  Maksym <Text style={styles.dot}>⬤</Text> 31.05.2020
                </Text>
                <Text style={styles.secondaryText}>{addedComment}</Text>
              </Body>
            </View>
          ) : null}
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
