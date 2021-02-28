import React, { View,Text } from 'react-native'
import Slider from 'react-native-slider'

const pad = (n, width, z=0) => {
    n = n + ' '
    console.log(n)
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}

const minutesAndSeconds = (position) => ([
    pad(Math.floor(position / 60), 2),
    pad(position % 60, 2)
])

function SeekBar({trackLength, currentPosition, onSeek, onSlidingStart}) {
    const elapsed = minutesAndSeconds(currentPosition)
    const remaing = minutesAndSeconds(trackLength - currentPosition)

    return (
        <View>
            <Text>
                {elapsed[0] + ':' + elapsed[1]}
            </Text>
            <Slider
                maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
                onSlidingStart={onSlidingStart}
                onSlidingComplete={onSeek}
                value={currentPosition}
                minimumTrackTintColor='#333'
                maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
            />
        </View>
    )

}

export default SeekBar