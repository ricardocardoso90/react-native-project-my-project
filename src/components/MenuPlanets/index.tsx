import { styles } from "./styles";
import theme from "@/src/styles/theme";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isActive: boolean;
};

export function MenuPlanets({ title, isActive = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderWidth: isActive ? 1 : 0,
          borderColor: isActive ? theme.COLORS.BLUE_100 : ''
        }
      ]}
      {...rest}>

      <Text
        style={[
          styles.spaceCardTitle,
          { color: isActive ? theme.COLORS.BLUE_100 : theme.COLORS.GRAY_200 }
        ]}>
        {title}
      </Text>

    </TouchableOpacity>
  )
};