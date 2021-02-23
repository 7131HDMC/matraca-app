import React,{useEffect, useState} from 'react';

import { Text, View } from 'react-native';

import  { useInterval } from '~/components/Interval';

function Counter ({ playTime, interval}) {

    const [count, setCount] = useState(0)

    // useEffect(() => {        
    //     const id = setInterval(() => setCount((count) => count + 1), 1000 )

    //     return () => clearInterval(id)
    // },[])

    useInterval(()=>{ setCount((count) => count + 1); console.log(count)},1000)

    return (
        <View>
            <Text style={{alignSelf: 'center',fontSize: 120}}>
                {count}
            </Text>     
        </View> 
    );
}

export default Counter;