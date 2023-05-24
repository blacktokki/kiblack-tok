/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import _ from 'lodash';
import { NavigationContainer, DefaultTheme, DarkTheme, NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

import LinkingConfiguration from './LinkingConfiguration';
import RootNavigator from './RootNavigator';

import { ColorSchemeName, useColorScheme as useDefaultColorScheme } from 'react-native';
import { Appearance, useColorScheme as useColorScheme } from 'react-native-appearance';
import { ResizeWindowProvider } from '../hooks/useResizeWindow';


const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name:string, params?:any) {
  if (params)
    navigationRef.current?.navigate(name, params);
  navigationRef.current?.navigate(name);
}

export default function Navigation() {
  const defaultColorScheme = useDefaultColorScheme()
  const userColorScheme = useColorScheme()
  const colorScheme = userColorScheme =='no-preference'?defaultColorScheme:userColorScheme
  return <NavigationContainer
    ref={navigationRef}
    documentTitle={{formatter: (options, route) => {return `TOKKI TOK`}}}
    linking={(process.versions && process.versions['electron'])?undefined:LinkingConfiguration}
    theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ResizeWindowProvider>
          <RootNavigator />
        </ResizeWindowProvider>
  </NavigationContainer>
}

(function(l) {  // for github-page
    if (l !== undefined && l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, '',
            l.pathname.slice(0, -1) + decoded + l.hash
        );
    }
}(window.location))
    
const ignoreWarnings = ['ReactNativeFiberHostComponent'];
const _console = _.clone(console);
console.warn = (message: string|Object) => {
    var warn = true;
    if (message instanceof Object)
    warn = false;
    else{
    ignoreWarnings.forEach((value)=>{
        if (message.indexOf && message.indexOf(value) <= -1) {
            warn = false;
        }
    })
    };
    if (warn){
        _console.warn(message);
    }
    else{
        // console.log(message)
    }
};
