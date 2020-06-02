import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from "react-native";
import { Header, Colors } from "react-native/Libraries/NewAppScreen";

const App = () => {
  const [isHelloVisible, setIsHelloVisible] = useState(false);
  const [isWorldVisible, setIsWorldVisible] = useState(false);

  const onHelloButtonPress = () => {
    setIsHelloVisible(true);
  };

  const onWorldButtonPress = () => {
    setIsWorldVisible(true);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle} testID="welcome">
                Welcome
              </Text>

              <Button
                onPress={onHelloButtonPress}
                testID="hello_button"
                title="Show Hello"
              />

              <Button
                onPress={onWorldButtonPress}
                testID="world_button"
                title="Show World"
              />

              {isHelloVisible ? <Text>Hello!!!</Text> : null}

              {isWorldVisible ? <Text>World!!!</Text> : null}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
