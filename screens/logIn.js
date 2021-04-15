import React, { Component } from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image, TextInput,KeyboardAvoidingView,ToastAndroid,Alert} from 'react-native';
import db from '../config';
import BookSanta from '../components/booksanta'
import firebase from 'firebase';
export default class LogIn extends Component {
    constructor(){
        super();
        this.state={email:'',password:''}
    }
    logIn=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
            return Alert.alert("User LogIned Successfully");
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    signUp=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then((response)=>{
            return Alert.alert("User Added Successfully");
        })
        .catch(function(error){
            var errorCode=error.code;
            var errorMessage=error.message;
            return Alert.alert(errorMessage)
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <BookSanta/>
            <Text style={styles.title}> booksanta </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TextInput style={styles.loginBox} placeholder="abc@example.com" keyboardType='email-address'
                    onChangeText={(text)=>{this.setState({email:text})}}/>
                     <TextInput style={styles.loginBox} placeholder="enter password" secureTextEntry={true}
                    onChangeText={(text)=>{this.setState({password:text})}}/>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.logIn(this.state.email,this.state.password)}}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={()=>{this.signUp(this.state.email,this.state.password)}}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
          
        )
    }
}
const styles=StyleSheet.create({
    loginBox:{
        width:200,
        height:40,
        borderWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    },
    buttonStyle:{
        height:30,
        width:90,
        marginTop:20,
        paddingTop:5,
        borderRadius:1,
        borderWidth:1,
    },
    container:{
        flex:1,
        backgroundColor:'#f8bef5'
    },
    profileContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:65,
        fontWeight:'bold',
        paddingBottom:30,
        color:'green'
    },
    buttonText:{
        color:'white',
        fontWeight:'200',
        fontSize:20,
    },
    buttonContainer:{alignItems:'center',flex:1}
})