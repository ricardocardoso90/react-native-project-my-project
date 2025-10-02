import { Image } from "react-native";
import { styles } from "./styles";

type ImageProps = {
  size: number;
};

export function UserPhoto({ size }: ImageProps) {
  return (
    <Image
      width={size}
      height={size}
      borderRadius={50}
      style={styles.image}
      source={{ uri: 'https://github.com/ricardocardoso90.png' }}
    />
  )
};