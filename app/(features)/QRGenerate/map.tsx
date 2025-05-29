import { Button } from "@/components/shared/Button/Button.component";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from "react-native";
import { Region } from "react-native-maps";

export default function MapScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Location permission denied");
        return;
      }

      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
      setRegion({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  if (!region) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007e1c" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* 검색창 */}
      <View style={styles.searchBar}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput style={styles.searchInput} placeholder="장소 검색" />
      </View>

      {/* 지도
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(reg) => setRegion(reg)}
      >
        <Marker coordinate={region} />
      </MapView>*/}
      <View style={styles.mapContainer} />

      {/* 선택 버튼 */}
      <Button onPress={() => console.log("선택 완료", region)}>
        <Text style={styles.selectButtonText}>선택</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      backgroundColor: "#007e1c",
      paddingTop: 40,
      paddingBottom: 10,
      alignItems: "center",
    },
    headerTitle: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    searchBar: {
      flexDirection: "row",
      backgroundColor: "#007e1c",
      paddingHorizontal: 16,
      paddingVertical: 10,
      alignItems: "center",
    },
    searchIcon: {
      color: "#fff",
      fontSize: 18,
      marginRight: 8,
    },
    searchInput: {
      backgroundColor: "#fff",
      flex: 1,
      height: 36,
      borderRadius: 8,
      paddingHorizontal: 10,
    },
    map: {
      flex: 1,
    },
    selectButton: {
      backgroundColor: "#007e1c",
      paddingVertical: 12,
      margin: 16,
      borderRadius: 8,
      alignItems: "center",
    },
    selectButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    mapContainer: {
      flex: 1,
      backgroundColor: "red",
    },
  });
  