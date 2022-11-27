import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

interface CustomInputProps {
	value: string;
	setValue: (val: string) => void;
	placeholder: string;
	secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
	value,
	setValue,
	placeholder,
	secureTextEntry = false,
}) => {
	return (
		<View style={styles.container}>
			<TextInput
				value={value}
				onChangeText={setValue}
				placeholder={placeholder}
				style={styles.input}
				secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		width: "100%",

		borderColor: "#F0F0F0",
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		// paddingHorizontal: 10,
		marginVertical: 10,
	},

	input: {},
});

export default CustomInput;
