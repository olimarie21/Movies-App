import {View, Text, StyleSheet, Button, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ListItem = (props) => {

    const navigation = useNavigation();

    return (
        <>
            <View key={props.id} style={styles.container}>
                <Image style={styles.image} source={{uri:`https://image.tmdb.org/t/p/w500${props.poster_path}` }}/>
                <View style={styles.contentContainer}>
                    <Text style={styles.titleText}>{props.title}</Text>
                    <Text style={styles.secondaryText}>Popularity: {props.popularity}</Text>
                    <Text style={styles.secondaryText}>Release Date: {props.release_date}</Text>
                    <TouchableOpacity
                        style={styles.detailBtn}
                        color='#00ACC1'
                        onPress={() => navigation.navigate('details', {
                            id: props.id,
                            title: props.title,
                            poster_path: props.poster_path,
                            type: props.type
                          })}>
                            <Text style={styles.detailTxt}>More Details</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 12
    },
    contentContainer:{
        flex: 2,
    },
    image: {
        height: '100%',
        width: 100,
        flex: 1,
        marginRight: 8
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    secondaryText: {
        fontSize: 14,
        fontWeight: '400'
    }, 
    detailBtn: {
        backgroundColor: '#00ACC1',
        width: '80%',
        padding: 8,
        textTransform: 'lowercase',
        alignItems: 'center',
        borderRadius: 6
    },
    detailTxt: {
        color: 'white'

    }
})
export default ListItem;