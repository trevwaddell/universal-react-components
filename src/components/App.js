import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Calendar from "./Calendar";

class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
        <Calendar year={2018} month={0} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 10
  }
});

export default App;
