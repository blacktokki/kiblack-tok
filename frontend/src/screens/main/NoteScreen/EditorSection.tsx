import React, { useState, useEffect, useCallback } from "react"
import { TouchableOpacity } from "react-native"
import { Ionicons, MaterialCommunityIcons } from '../../../lib/@expo/vector-icons';
import useAuthContext from "../../../hooks/useAuthContext"
import useMessengerChannelList, { useMessengerChannelMutation } from "../../../hooks/lists/useMessengerChannelList"
import { View as ThemedView } from '../../../components/Themed' 
import Colors from "../../../constants/Colors"
import useResizeContext from "../../../hooks/useResizeContext"
import Editor from "../../../components/Editor"
import useColorScheme from "../../../hooks/useColorScheme"
import CommonButton from "../../../components/CommonButton"
import useLangContext from "../../../hooks/useLangContext"
import EditorHtml from "../../../components/EditorHtml"
import useModalEffect from "../../../hooks/useModalEffect";


export default React.memo(({channel_id, disable, setDisable,}:{channel_id:number, setDisable:(disable:boolean)=>void, disable?:boolean})=>{
    const theme = useColorScheme()
    const {auth} = useAuthContext()
    const { lang } = useLangContext()
    const windowType = useResizeContext()
    const channelList = useMessengerChannelList('mycontent', auth)
    const channelMutation = useMessengerChannelMutation('mycontent')
    const channel = channelList?.find(v=>v.id==channel_id)
    const [editable, setEditable] = useState(false)
    const [description, setDescription] = useState('')
    const onSave = useCallback(()=>{
        if(auth?.user?.id && auth.groupId && channel?.description != description){
            channelMutation.update({id:channel_id, description}).then(()=>{
                setEditable(false)
            })
        }
        else {
            setEditable(false)
        }
    }, [auth, channelMutation, channel_id, description])
    useEffect(()=>{
        if (channel){
          setDescription(channel?.description || '')
        }
    }, [channel?.id])
    useModalEffect(editable?onSave:undefined, [editable, onSave])
    const onEdit = (auth.user?.id== channel?.owner.id)?()=>setEditable(true):undefined
    return disable?
    <ThemedView style={[
        { aspectRatio:1/1.414, borderColor:Colors.borderColor, borderRadius:10},
        windowType=='landscape'?{flexShrink:1, flexGrow:0, height:'100%', borderLeftWidth:1, paddingBottom:65}:{maxHeight:'36%', width:'100%', borderBottomWidth:1}
    ]}>
        <ThemedView style={{flex:1, borderColor:Colors[theme].headerBottomColor, borderBottomWidth:1}}>
            <EditorHtml content={description} />
        </ThemedView>
        <ThemedView style={[
                {position:'absolute', alignItems:'center', justifyContent:'flex-end', width:'100%',flexDirection:'row'},
                windowType=='landscape'?{bottom:0, paddingTop:15, paddingBottom:10, paddingHorizontal:19}:{backgroundColor:'transparent'}
            ]}>
            <CommonButton title={''} style={{height:40, paddingTop:8, left:-15, top:15}} onPress={()=>setDisable(false)}>
                <MaterialCommunityIcons size={20} style={{ marginBottom: -3, color:Colors[theme].iconColor }} name='card-text'/>
            </CommonButton>
        </ThemedView>
    </ThemedView>:
    <ThemedView style={{width:"100%", height:"100%"}}>
        <Editor theme={theme} active={editable} value={description} setValue={setDescription}/>
        {editable?<>
                <CommonButton title={lang('save')} onPress={onSave}
                    style={{height:65, paddingVertical:20}}
                />
            </>:
            <>
            <TouchableOpacity style={{flex:1, borderColor:Colors[theme].headerBottomColor, borderBottomWidth:1}} onPress={onEdit} onLongPress={onEdit}>
                <EditorHtml content={description}/>
            </TouchableOpacity>
            <ThemedView style={[
                {alignItems:'center', justifyContent:'flex-end', width:'100%',flexDirection:'row'},
                windowType=='landscape'?{bottom:0, paddingTop:15, paddingBottom:10, paddingHorizontal:19}:{backgroundColor:'transparent'}
            ]}>
            {onEdit && <CommonButton title={''} style={{height:40, paddingTop:8}} onPress={onEdit}>
                <MaterialCommunityIcons size={20} style={{ marginBottom: -3, color:Colors[theme].iconColor }} name='pencil-box'/>
            </CommonButton>}
            <CommonButton title={''} style={{height:40, paddingTop:8}} onPress={()=>setDisable(true)}>
                <Ionicons size={20} style={{ marginBottom: -3, color:Colors[theme].iconColor }} name='chatbox'/>
            </CommonButton>
        </ThemedView>
            </>}
    </ThemedView>
  })