import { StyleSheet, Text, TextInput, TouchableOpacity,  View } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>

      
      <TouchableOpacity>
        <Text>click me</Text>
      </TouchableOpacity>

      <Link href={"/about"}>
        visit about screen
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "blue", fontSize: 40 },
});
