import {
	View,
	Text,
	StyleSheet,
	Pressable,
	TouchableOpacity,
} from "react-native";
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
	borderRadius?: boolean;
	marginRemoved?: boolean;
}
const CustomButton: React.FC<CustomButtonProps> = ({
	onPress,
	text,
	linearGradient,
	backGround,
	borderRadius = true,
	marginRemoved = false,
}) => {
	return (
		<>
			{linearGradient ? (
				<LinearGradient
					style={[
						styles.container,
						{
							position: "relative",
							zIndex: -1,
							borderRadius: borderRadius ? 5 : 0,
							marginHorizontal: marginRemoved ? 0 : 15,
							marginVertical: marginRemoved ? 0 : 5,
						},
					]}
					locations={linearGradient.locations}
					start={linearGradient.start}
					colors={linearGradient.colors}
				>
					<TouchableOpacity
						style={[
							// styles.container,
							{
								borderRadius: borderRadius ? 5 : 0,
								width: "100%",
								position: "relative",
								zIndex: 1,
							},
						]}
						onPress={() => {}}
					>
						<Pressable
							onPress={onPress}
							style={styles.pressable}
							android_ripple={{
								color: "#dbdbdb",
								borderless: true,
							}}
						>
							<Text style={styles.text}>{text}</Text>
						</Pressable>
					</TouchableOpacity>
				</LinearGradient>
			) : (
				<View
					style={[
						styles.container,
						{
							backgroundColor: backGround,
							borderRadius: borderRadius ? 5 : 0,
						},
					]}
				>
					<Pressable
						onPress={onPress}
						style={[styles.pressable]}
						android_ripple={{ color: "#dbdbdb", borderless: true }}
					>
						<Text style={styles.text}>{text}</Text>
					</Pressable>
				</View>
			)}
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		// backgroundColor: "white",
		width: "100%",

		marginHorizontal: 15,
		marginVertical: 5,
		alignItems: "center",
	},

	pressable: { width: "100%", paddingVertical: 15, alignItems: "center" },
	text: {
		fontWeight: "bold",
		color: "white",
	},
});

export default CustomButton;
