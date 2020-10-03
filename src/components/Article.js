import React from 'react'
import {ListItem, Left, Right, Thumbnail, Body, View, Text, Button} from 'native-base'
import {StyleSheet} from 'react-native'

const Article = (props) => {
    const {article} = props
    const {descripttion, publishedAt, title, url, urlToImage} = article
    return (
        <ListItem Thumbnail key={title}>
            <Left>
            
            </Left>
            <Body>
                <Text numberOfLines={2}>{title}</Text>
                <Text note numberOfLines={2}>
                    {descripttion}
                </Text>
            </Body>
        </ListItem>
    )
}

const style = StyleSheet.create({
    textContainer: {
        flex:1,
        flexDirection:'row',
        marginTop:8,
        marginLeft:0
    }
})

export default Article