import React from "react"
import { Image, Text, View, StyleSheet } from "react-native"

const ImageDetail = (props) => {
  //   console.log(props)
  return (
    <View>
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({})

export default ImageDetail
