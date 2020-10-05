import React from 'react'
import {Container, List} from 'native-base'
import { StyleSheet} from 'react-native'

import Article from '../Article'
import Loading from '../Loading'

import ArticleModal from '../modals/ArticleModal'


const TabContent = (props) => {
    const { articleData, articles, isLoading, modalVisible, onArticlePress, onArticleModalClose, onArticleShare } = props;
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
                onPress={onArticlePress}
                />
            )
        }}
        keyExtractor={(article, index) => index.toString()}
        />
    )
    const renderContent = () => 
        isLoading ? renderLoadingState() : renderArticles()
        return (
            <Container>
                {renderContent()}
                <ArticleModal
                    articleData={articleData}
                    onClose={onArticleModalClose}
                    onShare={onArticleShare}
                    showModal={modalVisible}
                />
            </Container>
        )
}

const styles = StyleSheet.create({
    loadingState: {
      marginTop: 250
    }
  })

export default TabContent