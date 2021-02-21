import React,{useEffect, useState} from 'react';

import { Text, View } from 'react-native';

function Counter ({ playTime, interval}) {

    const [count, setCount] = useState(0)

    useEffect(() => {        
        const id = setInterval(() => setCount((count) => count + 1), 1000 )

        return () => clearInterval(id)
    },[])

    return (
        <View>
            <Text style={{alignSelf: 'center',fontSize: 120}}>
                {count}
            </Text>     
        </View> 
    );
}

export default Counter;