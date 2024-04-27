import React, { useEffect } from "react";
import {
  Container,
  Greeting,
  GreetingEmoji,
  GreetingText,
  Header,
  MenuHeader,
  MenuItemNumber,
  Title
} from "./styles";
import happyEmoji from '@assets/happy.png'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import { Search } from "@src/components/Search";
import { ProductCard, ProductProps } from "@src/components/ProductCard";
import firestore from '@react-native-firebase/firestore'
import { Alert, FlatList } from "react-native";




export function Home() {
  const [pizzas, setPizzas] = React.useState<ProductProps[]>([])
  const { COLORS } = useTheme()

  function fetchPizzas(value: string) {
    const formattedValue = value.toLowerCase().trim()

    firestore()
      .collection('pizzas')
      .orderBy('name_insensitive')
      .startAt(formattedValue)
      .endAt(formattedValue + '\uf8ff')
      .get()
      .then(response => {
        const data = response.docs.map(doc => {

          return {
            id: doc.id,
            ...doc.data()
          }
        }) as ProductProps[];
        setPizzas(data)
        // console.log(data)
      })
      .catch(() => Alert.alert('Busca', 'Não foi possível realizar a busca'))
  }

  useEffect(() => {
    fetchPizzas('')
  })

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Ola, Ana!</GreetingText>
        </Greeting>

        <TouchableOpacity>
          <MaterialIcons name="logout" color={COLORS.TITLE} size={24} />
        </TouchableOpacity>

      </Header>

      <Search onSearch={() => { }} onClear={() => { }} />

      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItemNumber>10 pizzas</MenuItemNumber>
      </MenuHeader>

      <FlatList
        data={pizzas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductCard data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 125,
          marginHorizontal: 24,
        }}
      />


    </Container>
  );
}