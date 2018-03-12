import React from 'react';
import {
  Image,
  FlatList,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { styles } from './styles';

export const About = ({ conductData, isLoading, itemExpander, shown }) => {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <View style={styles.aboutHolder}>
        <View style={styles.border}>
          <Text style={styles.title}>{`<R10>`}</Text>
        </View>
      </View>
      <Text style={styles.aboutParagraph}>
        R10 is a conference that focuses on just about the topic related to dev
      </Text>
      <Text style={styles.secondTitle}>Date & Venue </Text>
      <Text style={styles.aboutParagraph}>
        The R10 conference will tke place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={styles.secondTitle}>Code of Conduct</Text>
      {conductData.length > 0
        ? conductData.map((code, i) => (
            <View key={i}>
              <TouchableOpacity onPress={() => itemExpander(i)}>
                <Text style={styles.codeOfConductTitle}>
                  {i === shown ? '- ' : '+ '}
                  {code.title}
                </Text>
                {i === shown && (
                  <Text style={styles.codeOfConductBody}>
                    {code.description}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          ))
        : null}
      <View
        style={{
          marginTop: 20,
          paddingLeft: 30,
          paddingBottom: 10,
          borderTopWidth: 2,
          borderTopColor: '#E6E6E6'
        }}
      >
        <Text style={{ fontSize: 18 }}>© RED Academy 2017</Text>
      </View>
    </ScrollView>
  );
};
