import React from 'react'
import {Container, List} from 'native-base'
import {Stylesheet} from 'react-native'

import Article from '../Article'

const TabContent = (props) => {
    const { articles, articleData, isLoading} = props;
    // dataArray 쓰는법:  https://docs.nativebase.io/Components.html#accordion-def-headref
    // dataArray 는 data로 가져올 array 를 지정해줌. 여기서는 article 을 가져옴
    // <Article> 내용을 row 로 뿌려줌
    const renderArticles = () => (
        <List dataArray={articles}
        renderRow={(article) =>{
            return(
                <Article />
            )
        }}
        >
        </List>
    )


    return (
        <Container></Container>
    )
}

export default TabContent