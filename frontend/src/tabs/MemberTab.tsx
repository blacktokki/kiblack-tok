import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { Text, View } from "react-native"
import CommonItem from "../components/CommonItem"
import useAuthContext from "../hooks/useAuthContext"
import useUserMembershipList from "../hooks/lists/useUserMembershipList"
import { UserMembership } from "../types"
import { navigate } from "../navigation"
import Avatar from "../components/Avatar"

export const renderMemberItem = (item:UserMembership, onPress?:(item:UserMembership)=>void)=> (
    <CommonItem key={item.id} bodyStyle={{backgroundColor:'white', flexDirection:'row', justifyContent:'flex-start'}} onPress={onPress?()=>onPress(item):undefined}>
        <View style={{marginTop:4, marginRight:12}}><Avatar name={item.name} userId={item.id} size={44}/></View>
        <Text style={{fontSize:20, fontWeight:'400'}}>{item.name}</Text>
    </CommonItem>
)

export default ()=>{
    const {auth} = useAuthContext()
    const userList = useUserMembershipList(auth)
    return <View style={{flex:1, backgroundColor:'white'}}>
        {userList && userList.map(item=>renderMemberItem(item, (item)=>navigate("ProfileScreen", {id:item.id})))}
    </View>
}

export const MemberIcon = <MaterialCommunityIcons size={32} style={{ marginBottom: -3 }} name='account'/>