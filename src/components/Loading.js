import React from 'react'
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native'

const Loading = props => (
    <View style={{...styles.ActivityIndicator, ...props.style}}>
        <ActivityIndicator animating={props.isLoading} color='#000000' />
        <Text style={styles.loadingText} children='Loading...' />
    </View>
)
//ActivityIndicator 스타일 넣어주고 props 로 전달받는 object에 이미 style 이 들어있다면 ActivityIndicator 이 스타일을 override 함
//spread syntax 스타일 두개 combine 해서 주는 방법이라는듯
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


const styles = StyleSheet.create({
    ActivityIndicator: {
        display:'flex',
        alignItems:'center',
    },
    loadingText: {
        marginTop:10
    }
})

export default Loading