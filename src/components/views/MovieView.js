import {View, StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import Filter from '../forms/Filter';
import { apiKey, baseUrl } from '../../config/api';
import Results from '../containers/Results';

const MovieView = () => {

    const options = ['now_playing', 'popular', 'top_rated', 'upcoming'];

    const [selection, setSelection] = useState('popular');
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState(null);


    useEffect(() => {
    
        const getMovies = async () => {
            const url = `${baseUrl}/movie/${selection}?api_key=${apiKey}&language=en-US&page=1`;

            const apiCall = await fetch(url);
            const response = await apiCall.json();
            setMovies(response.results);
            setLoading(false);
        };
    
        getMovies();
    }, [loading, selection])

    return (
        <View style={styles.container}>
            <Filter style={styles.filter} selection={selection} setSelection={setSelection} options={options}/>
            <Results type='movie' loading={loading} items={movies}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%'
    },
    filter: {
        alignSelf:'center',
        width: '100%'
    },
    list: {
        flex: 4
    }
})

export default MovieView;