import React from 'react';
import { TabView, SceneMap,NavigationState, SceneRendererProps, TabBar } from 'react-native-tab-view';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import useLangContext from '../hooks/useLangContext';
import { TabViewRecord } from '../types';


export default (props:{tabs:TabViewRecord, tabBarPosition:"top"|"bottom", index?:number, onTab?:(index:number)=>void})=>{
  const { lang } = useLangContext()
  const [index, setIndex] = React.useState(props.index || 0);
  const theme = useColorScheme()
  const entries = Object.entries(props.tabs)
  const onTab = props.onTab
  const icons = Object.assign({}, ...entries.map(([k, v])=>({[k]:v.icon})))
  return <TabView
    renderTabBar={(props:SceneRendererProps & {navigationState: NavigationState<any>})=>{
      return <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "#2196F3" }}
        style={{ backgroundColor:Colors[theme].background }}
        activeColor={Colors[theme].text}
        inactiveColor={Colors[theme].text}
        renderIcon={(scene)=>icons[scene.route.key]}
        onTabPress={(scene)=>onTab?.(entries.findIndex(([k, v])=>k == scene.route.key))}
      />
    }}
    navigationState={{ index, routes: entries.map(([k, v])=>({key:k, title:lang(v.title)}))}}
    onIndexChange={setIndex}
    renderScene={SceneMap(Object.assign({}, ...entries.map(([k, v])=>({[k]:v.component}))))}
    tabBarPosition={props.tabBarPosition}
  />
}

