import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "./Header";
import Day from "./Day";
import { getCalendarWeeks } from "./dateUtils";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: props.year,
      month: props.month
    };
  }

  render() {
    const { year, month } = this.state;

    return (
      <View style={styles.calendar}>
        <Header month={month} year={year} />
        {getCalendarWeeks(year, month).map(week => (
          <View style={styles.week} key={week}>
            {week.map(day => <Day key={day} day={day} />)}
          </View>
        ))}
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
  },
  week: {
    flexDirection: "row"
  }
});

export default Calendar;
