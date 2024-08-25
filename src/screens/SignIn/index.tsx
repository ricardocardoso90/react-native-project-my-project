import { styles } from "./styles";
import colors from "@/src/styles/colors";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TextInput, View } from "react-native";

import { Button } from "@/src/components/Button";

export function SignIn() {
  const navigation = useNavigation<any>();

  function handleSignUp() {
    navigation.navigate("signUp");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>IGNITE GYM</Text>
          <Text style={styles.headerSubtitle}>Treine a sua mente e seu corpo</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Acesse sua conta</Text>

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={colors.COLORS.GRAY_300}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={colors.COLORS.GRAY_300}
          />

          <Button title="Avançar" />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Ainda não te acesso?</Text>

          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleSignUp}
          />
        </View>
      </ScrollView>
    </View>
  )
};