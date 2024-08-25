import { AuthRoutes } from "./auth.routes";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
  return (
    <NavigationContainer independent={true}>
      <AuthRoutes />
    </NavigationContainer>
  )
};