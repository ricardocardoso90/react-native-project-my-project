import { styles } from "./styles";
import theme from "@/src/styles/theme";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TextInput, View } from "react-native";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/src/components/Button";
import { AuthRoutesProps } from "@/src/routes/auth.routes";

type InputSignIn = {
  email: string;
  password: string;
};

export function SignIn() {
  const navigation = useNavigation<AuthRoutesProps>();
  const { control, handleSubmit, formState: { errors } } = useForm<InputSignIn>();

  function handleSignUp() {
    navigation.navigate("signUp");
  };

  function handleSignIn({ email, password }: InputSignIn) {
    console.log({
      email,
      password
    })
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>SPACE APP</Text>
          <Text style={styles.headerSubtitle}>Treine a sua mente e seu corpo</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Acesse sua conta</Text>

          <Controller
            control={control}
            name="email"
            rules={{
              required: "Informe seu e-mail!"
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                placeholderTextColor={theme.COLORS.GRAY_300}
              />
            )}
          />
          <Text style={{ color: theme.COLORS.RED }}>{errors.email?.message}</Text>

          <Controller
            control={control}
            name="password"
            rules={{
              required: "Informe sua senha!"
            }}
            render={({ field: { value, onChange } }) => (
              <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={onChange}
                value={value}
                secureTextEntry
                returnKeyType="send"
                placeholderTextColor={theme.COLORS.GRAY_300}
              />
            )}
          />
          <Text style={{ color: theme.COLORS.RED }}>{errors.password?.message}</Text>

          <Button
            title="Avançar"
            onPress={handleSubmit(handleSignIn)}
          />
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