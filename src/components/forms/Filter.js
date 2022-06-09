import { StyleSheet } from 'react-native';
import { CheckIcon, VStack, Select } from "native-base";

const Filter = (props) => {

    const options = props.options;

    return (
        <VStack style={styles.container}>
            <Select style={styles.select} selectedValue={props.selection} mx={{
                    base: 0,
                    md: "auto"
                }} 
                accessibilityLabel="Select an option to filter selections" 
                placeholder="upcoming" 
                onValueChange={nextValue => props.setSelection(nextValue)} 
                _selectedItem={{
                    bg: "cyan.600",
                    endIcon: <CheckIcon size={4} />
                }}>
                    {options.map(option => (
                        <Select.Item key={option} label={option} value={option}/>
                    ))}
            </Select>
        </VStack>
    )
} 


const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        marginHorizontal: '20%'
    },
    select: {
        alignSelf: 'center',
        height: 'auto'
    },
    selectedItem: {
        color: '#fff'
    }
})

export default Filter;