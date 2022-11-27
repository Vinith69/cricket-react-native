import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import SignInScreen from "./src/screens/SignInScreen";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<SignInScreen />
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fcfbfd",
		// alignItems: "center",
		// justifyContent: "center",
	},
});