import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { Image, Text, TouchableOpacity, View } from "react-native";
import theme from "@/src/styles/theme";

type PropsPlanetsCard = {
  id: string;
  name: string;
  about: string;
  photo: string;
  environments: string;
};

type Props = {
  data: PropsPlanetsCard;
}

export function CardPlanets({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        width={64}
        height={64}
        resizeMode="cover"
        style={{ borderRadius: 6 }}
        source={{ uri: data.photo }}
      />

      <View style={styles.PlanetsCarsBox}>
        <Text style={styles.PlanetsCarsTitle}>{data.name}</Text>
        <Text style={styles.PlanetsCarsSubtitle}>{data.about}</Text>
      </View>

      <View>
        <Ionicons
          size={30}
          name="arrow-forward"
          style={{ marginRight: 10 }}
          color={theme.COLORS.GRAY_300}
        />
      </View>
    </TouchableOpacity>
  )
};