import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const ListeItem = props => {
    return(
        <View style={styles.container}>
            
                <Image style={styles.imagem} source={{uri:props.imgUrl.image}}/>
           
            <View style={styles.texts}>
                <View style={styles.nameAdres}>
    <Text>{props.ad.name}{props.popular.isPopular && <Icon name='md-bonfire' size={20}/>}</Text>
                    <Text>{props.loc.location}</Text>
                </View>
                <View style={styles.liked}>
                    <Icon
                    name='md-heart'
                    size={20}
                    color='#e84118'
                    />
            <Text>{props.begeni.likes}</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#95a5a6',
        marginTop:Dimensions.get('window').height/100,
        marginBottom:20,
        padding:3,
        flexDirection:'column',
        height:Dimensions.get('window').height/(5/2),
        marginRight:Dimensions.get('window').width/30,
        marginLeft:Dimensions.get('window').width/30,
        alignSelf:'center'

    },
    imagem:{
        width:Dimensions.get('window').width/(10/9),
        height:Dimensions.get('window').height/3
    },
    texts:{
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    nameAdres:{
        flexDirection:'column',

    },
    liked:{
        flexDirection:'row'
    
    },
   
})

export default ListeItem