import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const User = () => {
    return (
        <View >
            <View style={{ height: 70, width: 375, backgroundColor: '#F0A202F0', }}>

            </View>
            <View style={styles.user_profile}>
                <View style={styles.user_profile_img}>
                    <Image
                        style={styles.user_profile_img_}
                        source={require("../img/user_img.png")}
                    />
                </View>
                <View style={styles.user_profile_name}>
                    <Text style={styles.user_profile_name_}>Becca</Text>
                </View>
            </View>
            <View style={styles.user_list}>
                <View style={styles.user_list_img}>
                    <Image
                        style={styles.user_profile_img_}
                        source={require("../img/user_tomato.png")}
                    />
                </View>
                <View style={styles.user_list_detail}>
                    <Text style={{fontSize:14,paddingBottom:8}}>Becca</Text>
                    <Text style={{fontSize:18,paddingBottom:8}}>小番茄</Text>
                    <Text style={{fontSize:14}}>領取期限：4/30 21:00前</Text>
                </View>
            </View>
            <View style={styles.user_list}>
                <View style={styles.user_list_img}>
                    <Image
                        style={styles.user_profile_img_}
                        source={require("../img/add_cookie.png")}
                    />
                </View>
                <View style={styles.user_list_detail}>
                    <Text style={{fontSize:14,paddingBottom:8}}>Becca</Text>
                    <Text style={{fontSize:18,paddingBottom:8}}>蘇打餅乾</Text>
                    <Text style={{fontSize:14}}>領取期限：4/21 21:00前</Text>
                    <View style={styles.user_list_detail_medal}>
                        <Image
                        style={styles.user_list_detail_medal_}
                        source={require("../img/medal.png")}
                        
                        />

                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    user_profile: {
        width: 375,
        height: 132,
      // backgroundColor: 'pink',
        top: -52,
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    user_profile_img: {
        width: 114,
        height: 132,
        // backgroundColor:'tomato',
    },
    user_profile_img_: {
        width: 88,
        height: 88,
        borderRadius: 20,
        left: 26,
        top: 16


    },
    user_profile_name: {
        width: 261,
        height: 132,
        //backgroundColor:'green'
    },
    user_profile_name_: {
        fontSize: 22,
        top: 26,
        left: 8
    },
    user_list: {
        width: 323,
        height: 130,
        backgroundColor: '#fff',
        top: -52,
        left: 26,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop:16,

    },
    user_list_img: {
        width: 114,
        height: 130,
       // backgroundColor:'purple',
    },
    user_list_detail: {
        width: 209,
        height: 130,
        paddingTop:26,
        paddingLeft:16,
       // backgroundColor:'blue',
    },
    user_list_detail_medal:{
        width:323,
        height:130,
        left:-130,
        top:-95,
        //backgroundColor:'black',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    user_list_detail_medal_:{
        width:60,
        height:60,
        backgroundColor:'red',
        top:16,
        right:16
    }





});
export default User;