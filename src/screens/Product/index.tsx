import React, { useState } from "react";
import { Platform, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import {
  Container,
  DeleteLabel,
  Form,
  Header,
  InputGroup,
  InputGroupHeader,
  Label,
  MaxCharacters,
  PickImageButton,
  Title,
  Upload

} from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonBack } from "@src/components/ButtonBack";
import { Photo } from "@src/components/Photo";
import { InputPrice } from "@src/components/InputPrice";
import { Input } from "@src/components/Input";
import { Button } from "@src/components/Button";



export function Product() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');


  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
        quality: 1
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        console.log(image)
      }
    }
  }


  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Header>
          <ButtonBack />
          <Title>Cadastrar</Title>

          <TouchableOpacity>
            <DeleteLabel>Deletar</DeleteLabel>
          </TouchableOpacity>

        </Header>

        <Upload>
          <Photo uri={image} />
          <PickImageButton
            title="Carregar"
            type="secondary"
            onPress={handlePickerImage}
          />
        </Upload>

        <Form>
          <InputGroup>

            <Label>Nome</Label>
            <Input />

          </InputGroup>

          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>
              <MaxCharacters>0 de 60 caracteres</MaxCharacters>
            </InputGroupHeader>

            <Input
              multiline
              maxLength={60}
              style={{ height: 80 }}
            />

          </InputGroup>

          <InputGroup>
            <Label>Tamanho e preços</Label>

            <InputPrice size="P" />
            <InputPrice size="M" />
            <InputPrice size="G" />
          </InputGroup>
          <Button title="Cadastrar pizza" />

        </Form>
      </ScrollView>
    </Container>
  )
}
