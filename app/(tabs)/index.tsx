import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      {/* Header가 위치할 공간 */}
      <ThemedView style={styles.titleContainer}></ThemedView>
      {/* QR 생성, QR 촬영 버튼 */}
      <ThemedView style={styles.qrContainer}>
        <ThemedView style={styles.qrButton}>QR 생성</ThemedView>
        <ThemedView style={styles.qrButton}>QR 촬영</ThemedView>
      </ThemedView>
      {/* QR 생성 내역 출력 */}
      <ThemedView style={styles.historyContainer}>
        <ThemedText style={styles.historyTitle}>QR 생성 내역</ThemedText>
        <ThemedText style={styles.historyDescription}>아직 생성한 QR 내역이 없습니다.</ThemedText>
        {/*조건 만족시? (
          { QR 생성 내역 출력 
        ) : (
          <ThemedText style={styles.historyDescription}>아직 생성한 QR 내역이 없습니다.</ThemedText>
        )}*/}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#2E8E14',
  },
  qrContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
  qrButton: {
    width: 120,
    height: 120,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  historyContainer: {
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  historyDescription: {
    fontSize: 16,
    color: '#616161',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
