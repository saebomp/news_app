import React from 'react'
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native'

const Loading = (props) => (
    <View style={{...styles.ActivityIndicator, ...props.style}}>
        <ActivityIndicator animating={props.isLoading} color='#000000' />
        <Text style={styles.loadingText} children='Loading...' />
    </View>
)

const styles = StyleSheet.create({
    ActivityIndicator: {
        display:'flex',
        alignItems:'center',
    },
    loadingText: {
        marginTop:10
    }
})