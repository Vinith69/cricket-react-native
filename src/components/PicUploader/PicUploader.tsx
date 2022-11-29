import {
	View,
	Image,
	StyleSheet,
	useWindowDimensions,
	ImageSourcePropType,
	ImageBackground,
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
			{/* <View style={styles.bgContainer}> */}
			<View style={styles.overlay}>
				<ImageBackground
					style={[
						{ width, height: height * 0.3 },
						styles.bgContainer,
					]}
					imageStyle={{ opacity: 0.5 }}
					source={require("../../../assets/blueBg.jpg")}
					resizeMode="cover"
				>
					<View style={styles.cardShadow}>
						<Image
							source={image ? { uri: image } : defaultImage}
							style={[
								styles.logo,
								// { width: width * 0.5, height: height * 0.25 },
								{ width: width * 0.4, height: height * 0.2 },
							]}
							resizeMode="contain"
						/>
					</View>
					<MaterialCommunityIcons
						onPress={onPress}
						name="camera"
						size={24}
						color="black"
						style={[
							styles.icon,
							{
								right: 120,
							},
						]}
					/>
					<View
						style={[
							styles.triangle,
							{
								borderLeftWidth: width,
								borderBottomWidth: width * 0.35,
							},
						]}
					/>
				</ImageBackground>
			</View>
			{/* </View> */}
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
		// position: "relative",
		zIndex: 2,
		backgroundColor: "white",
		bottom: 40,
		borderRadius: 100,
		padding: 5,
		elevation: 1,
	},
	logo: {
		borderRadius: 100,
		// position: "relative",
		zIndex: 1,
		// marginTop: "20%",
	},

	cardShadow: {
		zIndex: 1,
		marginTop: "20%",

		borderRadius: 100,
		backgroundColor: "transparent",
		shadowColor: "black",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		elevation: 10,
	},
	bgContainer: {
		// position: "absolute",
		// top: 0,
		justifyContent: "center",
		alignItems: "center",
	},

	triangle: {
		position: "absolute",
		right: 0,
		bottom: 0,
		width: 0,
		height: 0,
		backgroundColor: "transparent",
		borderStyle: "solid",
		borderRightWidth: 0,
		// borderBottomWidth: 50,
		borderLeftColor: "transparent",
		borderRightColor: "transparent",
		borderBottomColor: "#fcfbfd",
	},

	overlay: {
		backgroundColor: "rgba(0,0,255,0.5)",
	},
});
export default PicUploader;
