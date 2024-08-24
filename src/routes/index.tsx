import { SignIn } from "../screens/SignIn";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
  return (
    <NavigationContainer independent={true}>
      <SignIn />
    </NavigationContainer>
  )
};