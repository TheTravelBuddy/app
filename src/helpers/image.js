import { Platform } from "react-native";
import storage from "@react-native-firebase/storage";
import { launchImageLibrary } from "react-native-image-picker";

export const getPlatformPath = ({ path, uri }) =>
  Platform.select({
    android: { path },
    ios: { uri },
  });

export const chooseFile = () =>
  new Promise((resolve, reject) => {
    launchImageLibrary({ title: "Select Image" }, (response) => {
      if (response.didCancel || response.error) {
        reject(response.error);
      } else {
        resolve(response.uri);
      }
    });
  });

export const uploadImageToStorage = async (path, filename) => {
  const ref = storage().ref(filename);
  await ref.putFile(path);
  return ref.getDownloadURL();
};
