import { styles } from "./styles";
import colors from "@/src/styles/colors";
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
            ? colors.COLORS.GREEN_500
            : colors.COLORS.WHITE
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
};