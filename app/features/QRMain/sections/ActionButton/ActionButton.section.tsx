import { RelativePathString, useRouter } from 'expo-router';
import type { ReactElement } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props =  {
    buttonImage: ReactElement;
    buttonText: string;
    linkTo: RelativePathString;
}

export default function ActionButton({ buttonImage, buttonText, linkTo }: Props) {
    const router = useRouter();
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push(linkTo)}>
            <View>{buttonImage}</View>
            <Text>{buttonText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 120,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D9D9D9',
    }
})