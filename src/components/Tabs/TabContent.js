import React from 'react'
import {Container, List} from 'native-base'
import { StyleSheet} from 'react-native'

import Article from '../Article'
import Loading from '../Loading'

const TabContent = (props) => {
    const { articles, isLoading} = props;
    // dataArray 쓰는법:  https://docs.nativebase.io/Components.html#accordion-def-headref
    // dataArray 는 data로 가져올 array 를 지정해줌. 여기서는 article 을 가져옴
    // <Article> 내용을 row 로 뿌려줌

    const renderLoadingState = () => {
        <Loading 
            isLoading={isLoading}
            style={styles.loadingState}
        />
    }
    const renderArticles = () => (
        <List 
            dataArray={articles}
            renderRow={article => {
                return (
                    <Article 
                        article={article}
                    />
                )
            }}
            >
        </List>
    )


    return (
        <Container>{renderArticles()}</Container>
    )
}

const styles = StyleSheet.create({
    loadingState: {
      marginTop: 250
    }
  })

export default TabContent