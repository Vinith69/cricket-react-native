import React, { useState } from "react";
import {
	Image,
	ScrollView,
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

	const onRegisterPressed = () => {
		console.warn("Register pressed");
	};

	const onForgotPasswordPressed = () => {
		console.warn("Forgot Password pressed");
	};

	return (
		<ScrollView contentContainerStyle={styles.root}>
			<Image
				source={Logo}
				style={[
					styles.logo,
					{ width: width * 0.5, height: height * 0.25 },
				]}
				resizeMode="contain"
			/>

			<Text style={styles.text}>
				New User?{" "}
				<Text onPress={onRegisterPressed} style={{ color: "#FE8579" }}>
					Register
				</Text>
			</Text>

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
				showIcon
			/>

			<Text
				onPress={onForgotPasswordPressed}
				style={[styles.text, { color: "#4A90E2" }]}
			>
				Forgot Password?
			</Text>

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
		</ScrollView>
	);
};

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
		color: "grey",
	},
	text: {
		margin: 30,
	},
});

export default SignInScreen;
