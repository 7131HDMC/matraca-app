import React,{useEffect, useState} from 'react';

import { Text, View } from 'react-native';

import  { useInterval } from '~/components/Interval';

import {AudioPlayer} from '~/components/Player';

function Counter ({ playTime, interval}) {

    const [count, setCount] = useState(0)
    const [start, setStart] = useState(false)

    useInterval(()=> {
         setCount((count) => count + 1); 
         count > 10 ? setStart(true): null ; 
         count > 500 ? setStart(false): null ;
         console.log('start: ',start)
    },1000)

    return (
        <View>
            <Text style={{alignSelf: 'center',fontSize: 120}}>
                {count}
                
            </Text>  
            { start &&
                <AudioPlayer start={start}/>
            }
        </View> 
    );
}

export default Counter;