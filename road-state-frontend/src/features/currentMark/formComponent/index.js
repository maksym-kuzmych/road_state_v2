import * as React from 'react';
import {ScrollView, View, SafeAreaView} from 'react-native';
import CustomHeader from '../../header/index';
import Slider from '../components/Slider';
import Description from '../components/Description';
import Comments from '../components/Comments';
import Information from '../components/Information';
import Poll from '../components/Poll';
import {strings} from '../../resources/resources';

export default class CurrentMarkScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relevance: 5,
    };
  }

  setRelevance = value => {
    const currentVal = this.state.relevance;
    const res = currentVal + value;
    this.setState({
      relevance: res,
    });
  };

  render() {
    const {relevance} = this.state;
    const {navigation, isLogedIn} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title={strings.currentMark.header}
          navigation={navigation}
        />
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Slider />
            <Description />
            <Information relevance={relevance} />
            {isLogedIn === true && <Poll setRelevance={this.setRelevance} />}
            <Comments isLogedIn={isLogedIn} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
// export default function CurrentMarkScreen({navigation}) {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <CustomHeader title={strings.currentMark.header} navigation={navigation} />
//       <ScrollView>
//         <View style={{alignItems: 'center'}}>
//           <Slider />
//           <Description />
//           <Information />
//           <Poll />
//           <Comments />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
