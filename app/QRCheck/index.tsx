import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

NfcManager.start();

export default function QRCheck() {
    const [mode, setMode] = useState<"qr" | "nfc">('qr');
    
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    const [scanned, setScanned] = useState(false);
    const [qrData, setQrData] = useState<string | null>(null);

    async function readNdef() {
        try {
            await NfcManager.requestTechnology(NfcTech.Ndef);
            const tag = await NfcManager.getTag();
            console.log("Tag: ", tag);
        } catch (error) {
            console.log(error);
        } finally {
            NfcManager.cancelTechnologyRequest();
        }
    }

    if (!permission) {
        return (<View></View>);
    }

    if (!permission.granted) {
        requestPermission();
      }

      const handleQRScanned = () => {
        if (scanned) return;
        setScanned(true);

        Alert.alert(
            "인증 실패",
            "인증에 실패했습니다. 다시 시도해주세요.",
            [{ text: "확인", onPress: () => setScanned(false) }]
        );
      }

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setMode(mode === 'qr' ? 'nfc' : 'qr')}>
                <Text style={styles.switchText}>
                    {mode === 'qr' ? "NFC로 전환" : "QR로 전환"}
                </Text>
                </TouchableOpacity>
            </View>
            {mode === 'qr' ? (
                <CameraView
                    barcodeScannerSettings={{barcodeTypes:["qr"]}}
                    style={styles.checkContent}
                    onBarcodeScanned={
                        handleQRScanned
                    }>    
                    <View style={styles.overlay}>
                        <View style={[styles.corner, styles.topLeft]} />
                        <View style={[styles.corner, styles.topRight]} />
                        <View style={[styles.corner, styles.bottomLeft]} />
                        <View style={[styles.corner, styles.bottomRight]} />
                    </View>            
                </CameraView>
            ) : (
                <View style={styles.checkContent}>
                    <TouchableOpacity onPress={readNdef}>
                        <Text>NFC 태그를 접촉해주세요.</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    )

}

const styles = StyleSheet.create({
    header: { padding: 16, backgroundColor: "#eee" },
    switchText: { fontSize: 16, fontWeight: "bold" },
    checkContent: {
        width: '100%',
        height: '80%',
    },
    overlay: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        width: '80%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '-40%',
        marginTop: '-30%',
        backgroundColor: 'transparent', 
    },
    corner: {
        width: 40,
        height: 40,
        borderColor: 'white',
        position: 'absolute',
    },
    topLeft: {
        borderTopWidth: 5,
        borderLeftWidth: 5,
        top: 0,
        left: 0,
    },
    topRight: {
        borderTopWidth: 5,
        borderRightWidth: 5,
        top: 0,
        right: 0,
    },
    bottomLeft: {
        borderBottomWidth: 5,
        borderLeftWidth: 5,
        bottom: 0,
        left: 0,
    },
    bottomRight: {
        borderBottomWidth: 5,
        borderRightWidth: 5,
        bottom: 0,
        right: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
      },
    message: {
    textAlign: 'center',
    paddingBottom: 10,
    },
})
