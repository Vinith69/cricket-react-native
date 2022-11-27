import {
	View,
	Image,
	StyleSheet,
	useWindowDimensions,
	ImageSourcePropType,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

interface PicUploaderProps {
	image: string;
	onPress: () => void;
	defaultImage: ImageSourcePropType;
}

const PicUploader: React.FC<PicUploaderProps> = ({
	defaultImage,
	image,
	onPress,
}) => {
	const { width, height } = useWindowDimensions();

	return (
		<View style={styles.profileContainer}>
			<Image
				source={image ? { uri: image } : defaultImage}
				style={[
					styles.logo,
					{ width: width * 0.5, height: height * 0.25 },
				]}
				resizeMode="contain"
			/>
			<MaterialCommunityIcons
				onPress={onPress}
				name="camera"
				size={24}
				color="black"
				style={styles.icon}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	profileContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 30,
	},

	icon: {
		alignSelf: "flex-end",
		position: "relative",
		zIndex: 2,
		backgroundColor: "white",
		bottom: 40,
		right: 10,
		borderRadius: 100,
		padding: 5,
		elevation: 1,
	},
	logo: {
		borderRadius: 100,
		position: "relative",
		zIndex: 1,
	},
});
export default PicUploader;
