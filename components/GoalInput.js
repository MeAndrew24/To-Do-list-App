import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [input, setInput] = useState("");

  function textInputHandler(enteredText) {
    setInput(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(input);
    setInput("");
  }
  function killAddGoalHandler() {
    setInput("");
    props.turnOff();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Your New Goal"
          onChangeText={textInputHandler}
          value={input}
        />
        <View style={styles.buttonWrapper}>
          <View style={styles.button}>
            <Button
              onPress={killAddGoalHandler}
              title="Cancel"
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CCCCCC",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 10,
  },
  buttonWrapper: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
