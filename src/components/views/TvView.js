import {View, StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import Filter from '../forms/Filter';
import { apiKey, baseUrl } from '../../config/api';
import Results from '../containers/Results';

const TvView = () => {

    const options = ['airing_today', 'on_the_air', 'popular', 'top_rated' ];

    const [selection, setSelection] = useState('popular');
    const [loading, setLoading] = useState(true);
    const [shows, setShows] = useState(null);

    useEffect(() => {
        const getShows = async () => {
            const url = `${baseUrl}/tv/${selection}?api_key=${apiKey}&language=en-US&page=1`;

            const apiCall = await fetch(url);
            const response = await apiCall.json();
            setShows(response.results);
            setLoading(false);
        };
    
        getShows();
    }, [loading, selection])

    return (
        <View style={styles.container}>
            <Filter style={styles.filter} selection={selection} setSelection={setSelection} options={options}/>
            <Results type='tv' loading={loading} items={shows} />
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

export default TvView;

