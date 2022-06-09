import {ScrollView} from 'react-native';
import ListItem from "./ListItem";

const Results = (props) => {
    const items = props.items;

    return (
    <ScrollView>
        {!props.loading ? items.map(item => (
        <ListItem
            type={props.type}
            key={item.id}
            poster_path={item.poster_path}
            title={item.title != null ? item.title : item.name}
            popularity={item.popularity}
            release_date={item.release_date}
            id={item.id}/>
        )) : null}
    </ScrollView>   
    )
}

export default Results;