import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./Header";
import Body from "./Body";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: props.year,
      month: props.month
    };
  }

  render() {
    return (
      <View style={styles.calendar}>
        <Header month={this.state.month} year={this.state.year} />
        <Body month={this.state.month} year={this.state.year} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    shadowColor: "lightgray",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.8,
    shadowRadius: 5
  }
});

export default Calendar;
