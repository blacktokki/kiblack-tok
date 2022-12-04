/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { PathConfig } from "@react-navigation/native"
import { ButtonProps, StyleProp, TextStyle, ViewStyle } from "react-native"

export type Screens = Record<string, PathConfig & {title:string, component:React.ComponentType<any>}>

export type CustomButtonProps = ButtonProps & {
  style?:StyleProp<ViewStyle>,
  textStyle?:StyleProp<TextStyle>
  onPress:()=>void
}

export type ProfileProps = {
  name:string,
  username:string
}

export type User = {
  id:number,
  is_staff:boolean,
  name:string,
  username:string,
  imageUrl?:string
}

export type Membership = {
  id?:number
  root_group_id?:number,
  image_url?:string
  groupname:string,
  group:number
}

export type UserMembership =  User & {
  membership_set:Membership[]
}

export type Channel = {
  id?: number,
  name: string,
  type: "board"| "messenger",
  description?: string,
  is_archive?: boolean,
  owner: number,
  group: number
}
export type Board = {
  id?: number,
  title:string,
  content: string,
}

export type EditBoard = Board & {
  channel:number
  user?:number
}

export type BoardContent = {
  id: number,
  board_set:Board[]
  user: number,
  channel: number
  created: string,
  updated: string,
  name: string
}

export type Message = {
  id?: number,
  content: string,
}

export type EditMessage = Message & {
  channel:number
  user?:number
}

export type MessengerContent = {
  id: number,
  message_set:Message[]
  user: number,
  channel: number
  created: string,
  updated: string,
  name: string
}

export type MessengerMember = {
  id?:number,
  notification?: boolean,
  mobile_notification?: boolean,
  user: number,
  channel: number,
  last_message?: number
}