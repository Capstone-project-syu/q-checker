import { Button } from "@/components/shared/Button/Button.component";
import * as Location from "expo-location";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";

export default function MapScreen() {
  const [region, setRegion] = useState<Region | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  const params = useLocalSearchParams<{ location?: string }>();


  useEffect(() => {
    const init = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("위치 권한 거부됨");
        return;
      }
  
      // 기존 위치가 있다면 파싱하여 초기값 설정
      if (params.location) {
        const [lat, lng] = params.location.split(",").map(Number);
        const region = {
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        setRegion(region);
        await updateAddress(region);
        setLoading(false);
        return;
      }
  
      // 기존 위치 없으면 현재 위치로 설정
      const loc = await Location.getCurrentPositionAsync({});
      const region = {
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setRegion(region);
      await updateAddress(region);
      setLoading(false);
    };
  
    init();
  }, []);

  const updateAddress = async (reg: Region) => {
    try {
      const res = await Location.reverseGeocodeAsync({
        latitude: reg.latitude,
        longitude: reg.longitude,
      });
      if (res.length > 0) {
        const addr = res[0];
        const formatted = `${addr.name ?? ""} ${addr.street ?? ""} ${addr.city ?? ""}`.trim();
        setSearchQuery(formatted);
      }
    } catch (e) {
      console.error("주소 변환 실패:", e);
    }
  };

  const handleSearch = async () => {
    try {
      const results = await Location.geocodeAsync(searchQuery);
      if (results.length > 0) {
        const { latitude, longitude } = results[0];
        const newRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        setRegion(newRegion);
        await updateAddress(newRegion);
      } else {
        console.warn("검색 결과가 없습니다.");
      }
    } catch (e) {
      console.error("검색 실패:", e);
    }
  };

  const handleSelect = () => {
    if (!region) return;
    const locationStr = `${region.latitude},${region.longitude}`;
    router.push({
      pathname: "/QRGenerate",
      params: {
        location: locationStr,
        address: searchQuery, // 👈 검색창의 주소 텍스트를 같이 전달
      },
    });
  };

  if (loading || !region) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007e1c" />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* 검색창 */}
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="장소를 검색하세요"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
          />
        </View>

        {/* 지도 */}
        <MapView
          style={styles.map}
          region={region}
          onTouchStart={() => setUserInteracted(true)}
          onRegionChangeComplete={(reg) => {
            setRegion(reg);
            if (userInteracted) {
              updateAddress(reg);
              setUserInteracted(false);
            }
          }}
        >
          <Marker coordinate={region} />
        </MapView>

        {/* 선택 버튼 */}
        <View style={styles.buttonContainer}>
          <Button onPress={handleSelect}>
            <Text style={styles.selectButtonText}>선택</Text>
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  buttonContainer: {
    padding: 16,
  },
  selectButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 12,
  },
});
