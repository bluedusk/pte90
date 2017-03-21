import { AsyncStorage } from 'react-native';


export const _getUser = async () => {
 try {
   let value = await AsyncStorage.getItem('@user:key');
   let result =  {name:JSON.parse(value).name};
   return result;
 }catch (error){
   console.log(error)
 }
};

// get current user from AsyncStorage
_loadInitialState = async () => {
 try {
   var value = await AsyncStorage.getItem('@user:key');
   this.setState({user:{name:JSON.parse(value).name}});
 }catch (error){
   console.log(error)
 }
};
