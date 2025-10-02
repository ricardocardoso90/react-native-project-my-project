import { useState } from "react";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { NavigationContainer } from "@react-navigation/native";

export function Routes() {
  const [user, setUser] = useState(true);

  return (
    <NavigationContainer independent={true}>
      {user
        ? <AppRoutes />
        : <AuthRoutes />
      }
    </NavigationContainer>
  )
};