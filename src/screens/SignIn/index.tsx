import { Button } from "@/src/components/Button";
import { styles } from "./styles";
import { Text, TextInput, View } from "react-native";

export function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>IGNITE GYM</Text>
        <Text style={styles.subtitle}>Treine a sua mente e seu corpo</Text>
      </View>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} placeholder="E-mail" />

        <Button title="Avançar" />
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Ainda não te acesso?</Text>
        <Button title="Cadastrar" />
      </View>
    </View>
  )
};