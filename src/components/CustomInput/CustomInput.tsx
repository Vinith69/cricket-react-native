import {
	View,
	TextInput,
	StyleSheet,
	Pressable,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface CustomInputProps {
	value: string;
	setValue: (val: string) => void;
	placeholder: string;
	secureTextEntry?: boolean;
	showIcon?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
	value,
	setValue,
	placeholder,
	secureTextEntry = false,
	showIcon = false,
}) => {
	const [showText, setShowText] = useState(secureTextEntry);

	const changeVisibility = () => {
		setShowText(!showText);
	};

	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={showText}
				autoCorrect={false}
			/>
			{showIcon && (
				<TouchableOpacity onPress={changeVisibility}>
					<MaterialCommunityIcons
						name={!showText ? "eye-off-outline" : "eye-outline"}
						size={18}
						style={styles.icon}
					/>
				</TouchableOpacity>
			)}
			{/* {showIcon && showText && (
				<Pressable onPress={changeVisibility}>
					<MaterialCommunityIcons
						name="eye-outline"
						size={18}
						style={styles.icon}
					/>
				</Pressable>
			)} */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		width: "100%",

		flexDirection: "row",
		// justifyContent: "space-between",

		borderColor: "#F0F0F0",
		borderWidth: 1,
		borderRadius: 5,

		paddingVertical: 10,
		paddingHorizontal: 15,

		marginVertical: 10,
	},

	input: {
		width: "90%",
		height: 35,
		flex: 1,
		// backgroundColor: "red",
	},

	icon: {
		alignSelf: "flex-end",
		paddingVertical: 5,
		color: "grey",
	},
});

export default CustomInput;
