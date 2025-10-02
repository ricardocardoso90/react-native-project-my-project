import { styles } from "./styles";
import api from "@/src/services/api";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { HomeHeader } from "@/src/components/HomeHeader";
import { CardPlanets } from "@/src/components/CardPlanets";
import { MenuPlanets } from "@/src/components/MenuPlanets";


type EnviromentProps = {
  key: string;
  title: string;
};

type PlanetsProps = {
  id: string;
  name: string;
  about: string;
  photo: string;
  environments: string;
};

export function Home() {
  const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
  const [groupSelect, setGroupSelect] = useState('terra');
  const [planets, setPlanets] = useState<PlanetsProps[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetsProps[]>();

  function handlesetGroupSelect(enviroment: string) {
    setGroupSelect(enviroment);

    const filtered = planets.filter(planet => (
      planet.environments.includes(enviroment)
    ));

    setFilteredPlanets(filtered);
  };

  useEffect(() => {
    async function planetsSelectsGroups() {
      const { data } = await api.get('planets_environments');
      setEnviroments(data);
    };

    planetsSelectsGroups();
  }, []);

  useEffect(() => {
    async function planetsSelectsGroupsCard() {
      const { data } = await api.get('planets');
      setPlanets(data);
    };

    planetsSelectsGroupsCard();
  }, []);

  return (
    <View style={styles.container}>
      <HomeHeader />

      <FlatList
        data={enviroments}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <MenuPlanets
            title={item.title}
            isActive={groupSelect === item.key}
            onPress={() => handlesetGroupSelect(item.key)}
          />
        )}
        horizontal
        style={styles.groupPlanets}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 30 }}
      />

      <View style={styles.cardPlanetas}>
        <Text style={styles.cardPlanetasTitle}>Estrelas</Text>
        <Text style={styles.cardPlanetasSubtitle}>{planets.length}</Text>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredPlanets}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CardPlanets
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </View>

    </View>
  )
};