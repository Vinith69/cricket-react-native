import React, { useState } from "react";
import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	useWindowDimensions,
	View,
} from "react-native";
import Logo from "../../../assets/logo.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

const SignInScreen = () => {
	const { width, height } = useWindowDimensions();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSignInPressed = () => {
		console.warn("Sign in");
	};
	return (
		<View style={styles.root}>
			<Image
				source={Logo}
				style={[
					styles.logo,
					{ width: width * 0.5, height: height * 0.25 },
				]}
				resizeMode="contain"
			/>

			<Text style={styles.or}>New User? Register</Text>

			<CustomInput
				value={email}
				setValue={setEmail}
				placeholder="Email"
			/>

			<CustomInput
				value={password}
				setValue={setPassword}
				placeholder="Password"
				secureTextEntry
			/>

			<Text>Forgot Password?</Text>

			<CustomButton
				onPress={onSignInPressed}
				text="Login"
				linearGradient={{
					colors: ["#FFBA8C", "#FE5C6A"],
					start: [0.21, 0.21],
					locations: [0, 1],
				}}
			/>

			<Text style={styles.or}>Or</Text>

			<CustomButton
				onPress={onSignInPressed}
				text="Login With Facebook"
				backGround="#7197E1"
			/>
		</View>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	root: {
		paddingTop: 50,
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		borderRadius: 100,
	},
	or: {
		margin: 10,
	},
});
