import { StyleSheet, View, Button, FlatList, Text } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [listGoals, setListGoals] = useState([]);

  function startAddGoalHandler() {
    setShowModal(true);
  }

  function killAddGoalHandler() {
    setShowModal(false);
  }

  function addGoalHandler(input) {
    setListGoals((currentGoals) => [
      ...currentGoals,
      { text: input, id: Math.random().toString() },
    ]);
    setShowModal(false);
  }
  function deleteGoalHandler(id) {
    setListGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.contenedorApp}>
        <Button
          onPress={startAddGoalHandler}
          title="Add Goal"
          color="#5e0acc"
        />

        <GoalInput
          turnOff={killAddGoalHandler}
          visible={showModal}
          onAddGoal={addGoalHandler}
        />
        <View>
          <Text style={styles.textito}>List of Goals</Text>
        </View>
        <View style={styles.metas}>
          <FlatList
            data={listGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteGoal={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contenedorApp: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  metas: {
    flex: 5,
  },
  textito: {
    color: "white",
    fontSize: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#DDDDDD",
  },
});
