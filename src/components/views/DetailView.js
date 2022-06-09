import {StyleSheet, View, ScrollView} from 'react-native';
import { useEffect, useState } from 'react';
import { apiKey, baseUrl } from '../../config/api';
import { Heading, Image, Text } from 'native-base';
import axios from 'axios';

const DetailView = ({route}) => {

    const {id, title, poster_path, type} = route.params;
    const [movieDetails, setMovieDetails] = useState({});

    useEffect(() => {
        const source = axios.CancelToken.source();

        const getDetails = async () => {
            const url = `${baseUrl}/${type}/${id}?api_key=${apiKey}&language=en-US`;

            try {
                const response = await axios.get(url, {
                    cancelToken: source.token,
                })
                setMovieDetails(response.data);
            } catch(error) {
                if(axios.isCancel(error)) {
                    console.log('Request cancelled.')
                } else {
                    console.log(error)
                }
            }
        };
        
        getDetails();

        return function cleanup() {
            source.cancel("Request cancelled")
        }
    }, [])

    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.container}>
                <Heading mb={5}>{title}</Heading>
                <Image mb={8} source={{uri: `https://image.tmdb.org/t/p/original${poster_path}`}} alt={title} size="2xl"/>
                <Text mb={8}>{movieDetails.overview}</Text>
                <Text>Popularity: {movieDetails.popularity} | Release Date: {movieDetails.release_date}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-around',
        margin: 24,
        alignItems: 'center'
    },
    filter: {
        alignSelf:'center',
        width: '100%'
    },
    list: {
        flex: 4
    }
})

export default DetailView;

