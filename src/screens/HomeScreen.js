import React from "react"
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native"

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>React native says Hello World</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to components"
      />
      <Button onPress={() => navigation.navigate("List")} title="Go to list" />
      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image menu"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter page"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color page"
      />
      <Button
        onPress={() => navigation.navigate("Squre")}
        title="Go to Squre page"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to list</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
})

export default HomeScreen
