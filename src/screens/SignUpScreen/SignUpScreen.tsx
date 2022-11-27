import {
	View,
	Text,
	useWindowDimensions,
	ScrollView,
	Image,
	StyleSheet,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Logo from "../../../assets/logo.png";

const SignUpScreen = () => {
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
			<View style={styles.viewContainer}>
				<Image
					source={Logo}
					style={[
						styles.logo,
						{ width: width * 0.5, height: height * 0.25 },
					]}
					resizeMode="contain"
				/>

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
			</View>

			<CustomButton
				onPress={onSignInPressed}
				text="PROCEED"
				linearGradient={{
					colors: ["#FFBA8C", "#FE5C6A"],
					start: [0.21, 0.21],
					locations: [0, 1],
				}}
				borderRadius={false}
			/>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	root: {
		paddingTop: 50,
		alignItems: "center",
	},
	viewContainer: {
		paddingHorizontal: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		borderRadius: 100,
	},
	text: {
		margin: 30,
	},
});

export default SignUpScreen;
