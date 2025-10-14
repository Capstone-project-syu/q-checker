import { RelativePathString, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props =  {
    buttonText: string;
    linkTo: RelativePathString;
}

export default function ActionButton({ buttonText, linkTo }: Props) {
    const router = useRouter();
    
    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push(linkTo)}>
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