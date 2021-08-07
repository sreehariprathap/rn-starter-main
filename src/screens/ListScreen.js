import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
const ListScreen = () => {
  const friends = [
    { name: "friend #1", age: "21" },
    { name: "friend #2", age: "25" },
    { name: "friend #3", age: "29" },
    { name: "friend #4", age: "31" },
    { name: "friend #5", age: "41" },
    { name: "friend #6", age: "23" },
    { name: "friend #7", age: "51" },
  ]
  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //element === {item:{name:'friend #1'},index:0}
        //item==={name:'friend #1'}
        return (
          <Text style={styles.textStyle}>
            {item.name}-{item.age}
          </Text>
        )
      }}
    />
  )
}
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
})

export default ListScreen
