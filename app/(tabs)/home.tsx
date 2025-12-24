import API_URL from "@/server_ip";
import { createStyles } from "@/styles/home.styles";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

interface Auction {
  id: number;
  title: string;
  description?: string;
  image_url: string;
  status: string;
  city: string;
  country: string;
  distance: number;
  profile_img: string;
  product: any;
  owner: string;
  created_at: string;
}

export default function Home() {
  const styles = createStyles();
  const [auctions, setAuctions] = useState([]);
  const navigation = useNavigation<any>();

  const getAuctions = async () => {
    try {
      const response = await fetch(`${API_URL}/auctions`);
      const data = await response.json();
      setAuctions(data);
    } catch (error) {
      console.error('Error al obtener auctions:', error);
    }
  };

  useEffect(() => {
    getAuctions();
  }, []);

  const renderItem = ({ item } : {item:Auction}) => (
    <View style={styles.itemContainer}>
      <Image style={styles.itemImage} source={{ uri: item.product.imageUrl }} />
      <View style={styles.itemInfo}>
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemTitle}>{item.product.title}</Text>
          {/* <Text style={styles.itemTime}>{calcularTiempoTranscurrido(item.created_at)}</Text> */}
        </View>
      </View>
      {/* <View style={styles.itemDesc}>
        <Text style={styles.itemStatus}>Estado: {item.status}, </Text>
        {item.description && <Text style={styles.itemDescText}>{item.description}</Text>}
      </View>
      <View style={styles.itemUbi}>
        <Text style={styles.itemUbiText}>{item.city}, {item.country} · </Text>
        <Text style={styles.itemUbiText}>{item.distance.toFixed(1)} Km</Text>
      </View>
      <View style={styles.itemProfile}>
        <View style={styles.itemProfileImg}>
          <Image source={{ uri: item.profile_img }} style={styles.profileImg} />
        </View>
        <Text style={styles.itemProfileText}>{item.owner}</Text>
      </View> */}
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() =>
          navigation.navigate('auctionDetail', { auctionId: item.id })
        }
      >
        <Text style={styles.itemButtonText}>Ver Detalles</Text>
      </TouchableOpacity>
    </View>
  );

 return (
    <View style={styles.container}>
      <View style={styles.navLogo}>
        <Text style={styles.navText}>Subasta</Text>
      </View>

      {auctions.length === 0 ? (
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Text style={{ fontSize: 16, color: '#888' }}>No hay publicaciones disponibles</Text>
        </View>
      ) : (
        <FlatList
          data={auctions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}