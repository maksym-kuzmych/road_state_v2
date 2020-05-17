import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {IMAGE} from '../../../common/constants/testPhotos';
import {strings} from '../../resources/resources';

const {width} = Dimensions.get('window');
const height = width * 0.6;
const images = [IMAGE.ROAD_1, IMAGE.ROAD_2, IMAGE.ROAD_3, IMAGE.ROAD_4];

export default function Slider() {
  const [active, setActive] = useState(0);

  const change = ({nativeEvent}) => {
    const slide = Math.round(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== active) {
      setActive(slide);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{strings.currentMark.lblPhoto}: </Text>
      <ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.container}
        onScroll={change}>
        {images.map((item, index) => (
          <Image key={index} style={styles.image} source={item} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.length && images.length > 1
          ? images.map((i, k) => (
              <Text
                key={i}
                style={
                  k === active ? styles.pagingActiveText : styles.pagingText
                }>
                ⬤
              </Text>
            ))
          : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width, height, marginTop: 10},
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {fontSize: width / 30, color: '#888', margin: 3},
  pagingActiveText: {fontSize: width / 30, color: '#fff', margin: 3},
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
