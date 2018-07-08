import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Day extends Component {
  render() {
    const { day } = this.props;
    return (
      <View style={styles.day}>
        <Text>{day ? day : " "}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  day: {
    width: `${100 / 7}%`,
    alignItems: "center",
    padding: 5,
    height: 45
  }
});

export default Day;
