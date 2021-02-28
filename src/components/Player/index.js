import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, View, Text} from 'react-native';
import Video from 'react-native-video';

import SeekBar from '~/components/SeekBar'

import {defultAudio} from '~/assets'

function AudioPlayer ({source = defultAudio, start=false}) {
    const [isPause, setIsPaused] = useState(true)
    const [totalLength, setTotalLength] = useState(1)
    const [currentPosition, setCurrentPosition] = useState(0)
    const [selectedTrack, setSelectedTrack] = useState(0)

    const refContainer = useRef(null)

    const setDuration = async(data) => {
        setTotalLength(Math.floor(data.duration))
    }

    const setTime = async(data) => {
        setCurrentPosition(Math.floor(data.currentTime))
        console.log('Audio current position: ', currentPosition)
    }

    const seek = async(time) => {

        time = Math.round(time)

        refContainer && refContainer.current.seek(time)

        setCurrentPosition(time)
        setIsPaused(false)
    }

    useEffect(() => {
        // const abortController = new AbortController()
        // signal = abortController.signal

        console.log('pause',isPause)
        if(start) {
            setIsPaused(!start)
        } 
        // return function cleanup() {
        //     abortController.abort()
        // }
    },[start])

    return (
        <View>
            <StatusBar hidden={true}/>
            <Text>Play Cronomichal Songs</Text>
            {/* <SeekBar
                onSeek={seek.bind(this)}
                trackLength={totalLength}
                onSlidingStart={() => setIsPaused(true)}
                currentPosition={currentPosition}
            /> */}
            <Video 
                source={source}
                ref={refContainer}
                paused={isPause}
                onLoad={setDuration.bind(this)}
                onProgress={setTime.bind(this)}
                repeat={true}
            />
        </View>

    )
} 
export {AudioPlayer}