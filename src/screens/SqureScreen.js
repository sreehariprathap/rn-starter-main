import React, { useState } from "react"
import { View, Text, StyleSheet, Switch } from "react-native"
import { color } from "react-native-reanimated"
import ColorCounter from "../components/ColorCounter"

const COLOR_VALUE = 20
const SqureScreen = () => {
  const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0)
  const [green, setGreen] = useState(0)

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        return
      case "blue":
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        return
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change)
        return
    }
  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          setColor("red", COLOR_VALUE)
        }}
        onDecrease={() => {
          setColor("red", -1 * COLOR_VALUE)
        }}
        color="Red"
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => {
          setColor("blue", COLOR_VALUE)
        }}
        onDecrease={() => {
          setColor("blue", -1 * COLOR_VALUE)
        }}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => {
          setColor("green", COLOR_VALUE)
        }}
        onDecrease={() => {
          setColor("green", -1 * COLOR_VALUE)
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({})

export default SqureScreen
