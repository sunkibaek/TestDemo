import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
} from "react-native";
import { Header, Colors } from "react-native/Libraries/NewAppScreen";
import fetchImages from "./fetchImages";

const App = () => {
  const [isHelloVisible, setIsHelloVisible] = useState(false);
  const [isWorldVisible, setIsWorldVisible] = useState(false);
  const [images, setImages] = useState<
    { id: string; urls: { regular: string } }[]
  >([]);

  const onHelloButtonPress = () => {
    setIsHelloVisible(true);
  };

  const onWorldButtonPress = () => {
    setIsWorldVisible(true);
  };

  const fetchPhotos = async () => {
    const result = await fetchImages();

    setImages(result.results);
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

              <Button
                onPress={fetchPhotos}
                testID="fetch_photos"
                title="Fetch Photos"
              />

              <ScrollView>
                {images.map((image, index) => (
                  <Image
                    testID={`rocket_image-${index}`}
                    key={image.id}
                    source={{ uri: image.urls.regular }}
                    style={styles.image}
                  />
                ))}
              </ScrollView>

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
  image: {
    height: 100,
    width: 100,
  },
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
