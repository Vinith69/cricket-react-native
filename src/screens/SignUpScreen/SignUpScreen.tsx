import {
	View,
	Text,
	useWindowDimensions,
	ScrollView,
	Image,
	StyleSheet,
	Button,
	PermissionsAndroid,
	StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import Logo from "../../../assets/logo.png";
import * as ImagePicker from "expo-image-picker";
import PicUploader from "../../components/PicUploader";

const SignUpScreen = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [city, setCity] = useState("");

	const [hasGalleryPermission, setHasGalleryPermission] = useState(false);
	const [image, setImage]: any = useState(null);

	const { height } = useWindowDimensions();

	const askPermission = async () => {
		const galleryStatus =
			await ImagePicker.requestMediaLibraryPermissionsAsync();
		setHasGalleryPermission(galleryStatus.status === "granted");
	};

	// useEffect(() => {
	// 	askPermission();
	// }, []);

	const pickImage = async () => {
		try {
			if (hasGalleryPermission === false) await askPermission();

			const granted = await PermissionsAndroid.check(
				PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION
			);

			if (!granted) {
				await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
					{
						title: "Cricket App Needs Media Access",
						message:
							"Cricket App needs access to your media files " +
							"so you can upload the picture. Please go to settings and turn media permissions on",
						// buttonNeutral: "Ask Me Later",
						// buttonNegative: "Cancel",
						buttonPositive: "OK",
					}
				);
				return;
			}

			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [4, 3],
				quality: 1,
			});

			if (!result.canceled) setImage(result.assets[0].uri);
		} catch (error) {
			console.warn(error);
		}
	};

	const onSignInPressed = () => {
		console.warn("Sign in");
	};

	// if (hasGalleryPermission === false) {
	// 	return <Text>No access to Internal Storage</Text>;
	// }

	return (
		<ScrollView
			contentContainerStyle={[
				styles.root,
				{
					minHeight:
						height +
						(StatusBar.currentHeight ? StatusBar.currentHeight : 0),
				},
			]}
		>
			<View style={styles.viewContainer}>
				{/* <Button title="Pick image" onPress={pickImage} /> */}
				<PicUploader
					defaultImage={Logo}
					onPress={pickImage}
					image={image}
				/>

				<CustomInput
					value={name}
					setValue={setName}
					placeholder="Full Name"
				/>

				<CustomInput
					value={email}
					setValue={setEmail}
					placeholder="Email"
				/>
				<CustomInput
					value={phone}
					setValue={setPhone}
					placeholder="Phone No"
				/>
				<CustomInput
					value={city}
					setValue={setCity}
					placeholder="City"
				/>
			</View>

			<View style={styles.button}>
				<CustomButton
					onPress={onSignInPressed}
					text="PROCEED"
					linearGradient={{
						colors: ["#FFBA8C", "#FE5C6A"],
						start: [0.21, 0.21],
						locations: [0, 1],
					}}
					borderRadius={false}
					marginRemoved
				/>
			</View>
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
	button: {
		marginTop: "auto",
		width: "100%",
		alignSelf: "flex-start",
	},
});

export default SignUpScreen;
