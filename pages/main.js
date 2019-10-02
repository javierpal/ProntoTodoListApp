import React, {useCallback, useEffect} from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { CustomHeader } from '../components/header';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Item, ListItem, CheckBox, Text, Body } from 'native-base';
import { onAddItem, onEraseItem, onSetDone, onNewChange, onGetList } from '../store/actions/todo';
import { Ionicons, Feather, FontAwesome, MaterialCommunityIcons, EvilIcons, Entypo } from '@expo/vector-icons';
import { AsyncStorage } from 'react-native';

const ListComponent = (props) => (
    <ListItem>
        <CheckBox checked={props.item.isDone}  onPress={()=>props.onPress(props.index)}/>
        <Body>
            <Text style={
                props.item.isDone ? {textDecorationLine: 'line-through'} : {}
            }>{props.item.title}</Text>
        </Body>
    </ListItem>
);

const retriveData = async (dispatch, onGetList) => {
    try {
      const value = await AsyncStorage.getItem('list');
      if (value !== null) {
          console.log(JSON.parse(value));
          dispatch(onGetList(JSON.parse(value)));
      }
    } catch (error) {
    }
};

const MainComponent = props =>{

    const loginStore = useSelector(state => state.login);
    const dispatch = useDispatch();
    
    const list = loginStore.list;

    AsyncStorage.setItem('list', JSON.stringify(loginStore.list));

    useEffect(()=>{
        retriveData(dispatch, onGetList);
    }, []);

    const onPress = (index)=>{
        dispatch(onSetDone(index));
    };

    const items = list.map((item, i)=>(
        <ListComponent key={i} item={item} onPress={onPress} index={i} />
    ));

    const onAdd = ()=>{
        dispatch(onAddItem());
        dispatch(onNewChange(''))
    }

    return (
        <View>
            <CustomHeader title={"Todo List!"} />
            <KeyboardAvoidingView behavior="padding" enabled>
            <Item>
                <Entypo active name='list' size={20} />
                <Input placeholder='Add a new item to List' onChangeText={(text)=>dispatch(onNewChange(text))} value={loginStore.newValue} />
                <Button primary onPress={onAdd}><Text>Add to List</Text></Button>
            </Item>
            </KeyboardAvoidingView>
            <View>
                {items}
            </View>
            <View>
                <Text>Total de Items: {loginStore.list.length}</Text>
            </View>
        </View>
    );
}

export default MainComponent;

