import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from "react";
import { router } from 'expo-router';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function QRCheck() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    const [scanned, setScanned] = useState(false);
    const [qrData, setQrData] = useState<string | null>(null);

    if (!permission) {
        return (<View></View>);
    }

    if (!permission.granted) {
        return (
          <View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
      }

      const handleQRScanned = () => {
        try {
          } catch (e) {
          }
        router.push('/');
      }

    return (
        <CameraView
            barcodeScannerSettings={{barcodeTypes:["qr"]}}
            style={styles.camera}
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
    )

}

const styles = StyleSheet.create({
    camera: {
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
