import { useEffect, useMemo } from "react"
import { useQuery, useQueryClient } from "react-query"
import { getTimerMessageContentList } from "../../apis"
import { MessengerContent } from "../../types"
import useWebsocketContext from "../useWebsocketContext"
import moment from "moment"

export default function useTimerMessageContentList(channel_id:number){  
  const queryClient = useQueryClient()
  const { data } = useQuery<MessengerContent[]>(
    ["TimerMessageContentList", channel_id], 
    async()=>await getTimerMessageContentList(channel_id, moment().format(moment.HTML5_FMT.DATETIME_LOCAL)), 
  )
  const { lastJsonMessage } = useWebsocketContext()
  useEffect(()=>{
    if(lastJsonMessage !=null && lastJsonMessage['type']=='next_message' && lastJsonMessage['data']['channel'] == channel_id){
      if(lastJsonMessage['data']['timer'] && moment() < moment(lastJsonMessage['data']['timer']))
        queryClient.setQueryData<MessengerContent[]>(["TimerMessageContentList", channel_id], (_data)=>{
          return [...(_data || []), lastJsonMessage['data']]
        })
    }
  }, [lastJsonMessage])
  const sorted = useMemo(()=>data?.sort((a, b)=>(a.timer || '') > (b.timer || '')?1:-1), [data])
  useEffect(()=>{
    if (sorted?.[0]?.timer){
      const id = sorted[0].id
      let timeout = setTimeout(()=>{
        queryClient.setQueryData<MessengerContent[]>(["TimerMessageContentList", channel_id], (_data)=>{
          return (_data || []).filter(v=>v.id!=id)
        })
      }, moment(sorted[0].timer).diff(moment()))
      return ()=>clearTimeout(timeout)
    }
  },[sorted])
  return sorted
}
