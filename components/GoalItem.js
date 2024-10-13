import { StyleSheet, Text, Pressable, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#DDDDDD" }}
        onPress={props.onDeleteGoal.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={{ color: "white", padding: 10 }}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
