import { Text, Stack, ScrollView } from "native-base";
import { useState } from 'react';
import { Keyboard } from "react-native";
import { apiKey, baseUrl } from '../../config/api';
import ListItem from '../containers/ListItem';
import SearchInput from '../forms/SearchInput';

const SearchView = () => {
    
    const [filter, setFilter] = useState('multi');
    const [results, setResults] = useState(null);
    const [query, setQuery] = useState(null);
    const [isSearching, setSearching] = useState(true);

    const getSearchResults = async () => {
        const url = `${baseUrl}/search/${filter}?api_key=${apiKey}&language=en-US&page=1&query=${query}`;

        const apiCall = await fetch(url);
        const response = await apiCall.json();
        Keyboard.dismiss();

        if(response.results.length != 0) {
            setResults(response.results);
        } else {
            setResults(null);
        }
        setSearching(false);
    };

    const handleTextInput = (event) => {
        const input = event.nativeEvent;
        setQuery(input.text);
    };


    return (
        <Stack>
            <SearchInput 
            handleTextInput={handleTextInput} 
            filter={filter} 
            setFilter={setFilter}
            getSearchResults={getSearchResults}/>
            <ScrollView w='100%'>
                {results != null ? 
                    results.map(result => (
                        <ListItem
                        type={result.title != null ? 'movie' : 'tv'}
                        key={result.id}
                        poster_path={result.poster_path}
                        title={result.title != null ? result.title : result.name}
                        popularity={result.popularity}
                        release_date={result.release_date}
                        id={result.id}/>
                )) : (
                    <Text mt='24' alignSelf='center' fontWeight='bold' fontSize='20'>Please initiate a search</Text>
                )}
            </ScrollView>
        </Stack>
    )
}

export default SearchView;