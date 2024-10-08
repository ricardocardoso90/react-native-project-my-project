import { styles } from "./styles";
import theme from "@/src/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TextInput, View } from "react-native";

import { Button } from "@/src/components/Button";

export function SignUp() {
  const navigation = useNavigation<any>();

  function handleSignIn() {
    navigation.navigate("signIn");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>SPACE APP</Text>
          <Text style={styles.headerSubtitle}>Treine a sua mente e seu corpo</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Crie sua conta</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor={theme.COLORS.GRAY_300}
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={theme.COLORS.GRAY_300}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={theme.COLORS.GRAY_300}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirme a Senha"
            placeholderTextColor={theme.COLORS.GRAY_300}
          />

          <Button title="Criar e acessar" />
        </View>

        <View style={styles.footer}>
          <Button
            title="Voltar para o login"
            variant="outline"
            onPress={handleSignIn}
          />
        </View>
      </ScrollView>
    </View>
  )
};