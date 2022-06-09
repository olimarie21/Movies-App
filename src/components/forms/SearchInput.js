import {StyleSheet} from 'react-native';
import { CheckIcon, Select, Input, FormControl, Box, Icon, Button, HStack, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

const SearchInput = (props) => {
    const options = ['multi', 'movie', 'tv'];
    const errors = props.errors;
    
    return(
        <VStack mx={'8%'} my={8} alignItems={'center'}>
        <FormControl isRequired isInvalid={'query' in errors}>
            <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
            <Input value={props.query} style={styles.height} 
                onChange={props.handleTextInput}
                placeholder='i.e. James Bond, CSI'
                InputLeftElement={<Icon as={<MaterialIcons name="search" />} 
                size={5} ml="2" color="muted.400" />}/>
            {"query" in errors ? <FormControl.ErrorMessage>
            Please enter a search term.
            </FormControl.ErrorMessage> : null}
        </FormControl> 

        <HStack w='100%' justifyContent='flex-start' alignItems='center' mb='6' space={2}>
            <Box w='70%'>
                <FormControl isRequired isInvalid={'filter' in errors}>
                    <FormControl.Label>Choose Search Type</FormControl.Label>
                    <Select style={styles.height} selectedValue={props.filter} mx={{
                            base: 0,
                            md: "auto"
                        }} 
                        accessibilityLabel="Select an option to filter your search." 
                        placeholder="multi" 
                        onValueChange={nextValue => props.setFilter(nextValue)} 
                        _selectedItem={{
                            bg: "cyan.600",
                            endIcon: <CheckIcon size={4} />
                        }}>
                        {options.map(option => (
                            <Select.Item key={option} label={option} value={option}/>
                        ))}
                    </Select>
                    {"filter" in errors ? <FormControl.ErrorMessage>
                    Please select a search type.
                    </FormControl.ErrorMessage> :                     
                    <FormControl.HelperText>
                        Please select a filter for your search.
                    </FormControl.HelperText>}
                </FormControl>
            </Box>
            <Button justifyContent={'center'} startIcon={<Icon as={<MaterialIcons name="search" />} size={5} />}
                style={styles.height} 
                w='30%' h='50' 
                onPress={props.getSearchResults}>Search</Button>
        </HStack>
        </VStack>
        )
}

const styles = StyleSheet.create({
    height: {
        height: 40
    }
})

export default SearchInput;