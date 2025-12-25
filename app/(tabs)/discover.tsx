import API_URL from "@/server_ip";
import { useEffect, useState } from "react";
import { View, Image, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CATEGORY_IMAGES } from "@/constants/categoriesIcons";
import { discoverStyles } from "@/styles/discover.styles";

export default function Discover() {
  const [categories, setCategories] = useState<any[]>([]);
  const styles = discoverStyles();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/category/`);
        if (!response.ok) throw new Error('Error al traer las categorías');
        const data = await response.json();
        setCategories(data || []);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  const searchCategory = async() => {
    console.log(search)
  }

  const getImage = (name: string) => {
    const key = name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "");
    return CATEGORY_IMAGES[key] ?? require('@/assets/images/categories/box.png');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.categoryText}>Descubre subastas por categoría</Text>
      <TextInput
        style={styles.categoryInput}
        placeholder="Buscar por categoría"
        value={search}
        onChangeText={setSearch}
      />
      <TouchableOpacity style={styles.categoryButton} onPress={searchCategory}>
        <Text style={styles.categoryButtonText}>Buscar</Text>
      </TouchableOpacity>
      <ScrollView 
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {categories.map((item) => (
            <View
              key={item.id}
              style={styles.categoryContainer}>
              <Image
                source={getImage(item.name)}
                style={{ width: 80, height: 80, borderRadius: 8, marginBottom: 10 }}
              />
              <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.name}</Text>
              <Text style={{ fontSize: 12, color: '#555', textAlign: 'center', marginVertical: 4 }}>
                {item.description}
              </Text>
              <Text style={{ fontSize: 12, color: '#888' }}>
                {item.auctionsCount ?? 0} subastas
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
