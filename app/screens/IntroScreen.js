import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SafeScreen from "./SafeScreen";

export default function IntroScreen({navigation}) {
  return (
    <SafeScreen>
      <View style={styles.contanier}>
        <Text onPress={()=>{navigation.navigate("Login")}}>Skip</Text>
      </View>

    </SafeScreen>
  );
}

const styles = StyleSheet.create({});
