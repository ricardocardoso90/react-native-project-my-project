import { styles } from "./styles";
import theme from "@/src/styles/theme";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: "solid" | "outline";
};

export function Button({ title, variant = "solid", ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={
        variant === 'outline'
          ? styles.container2
          : styles.container}
      {...rest}
    >
      <Text style={
        {
          color: variant === 'outline'
            ? theme.COLORS.BLUE_100
            : theme.COLORS.WHITE
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
};