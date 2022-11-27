import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { LinearGradient, LinearGradientPoint } from "expo-linear-gradient";

interface CustomButtonProps {
	onPress: () => void;
	text: string;
	linearGradient?: {
		colors: string[];
		start: LinearGradientPoint;
		locations?: number[];
	};
	backGround?: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({
	onPress,
	text,
	linearGradient,
	backGround,
}) => {
	return (
		<>
			{linearGradient ? (
				<LinearGradient
					style={styles.container}
					locations={linearGradient.locations}
					start={linearGradient.start}
					colors={linearGradient.colors}
				>
					<Pressable onPress={onPress} style={styles.pressable}>
						<Text style={styles.text}>{text}</Text>
					</Pressable>
				</LinearGradient>
			) : (
				<Pressable
					onPress={onPress}
					style={[styles.container, { backgroundColor: backGround }]}
				>
					<Text style={styles.text}>{text}</Text>
				</Pressable>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		width: "100%",

		padding: 15,
		marginVertical: 5,
		alignItems: "center",
		borderRadius: 5,
	},
	pressable: { width: "100%", alignItems: "center" },
	text: {
		fontWeight: "bold",
		color: "white",
	},
});

export default CustomButton;
