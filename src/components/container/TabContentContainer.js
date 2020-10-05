import React, { Component } from 'react'
import { Alert, Share } from 'react-native'

import { getArticles } from '../../service/api'
import TabContent from '../Tabs/TabContent'


class TabContentContainer extends Component {
state = {
    articleData: {},
    article: [],
    isLoading: true,
    modalVisible:false,
    source: this.props.source || 'bbc-news'
}

componentDidMount() {
    const {source} = this.state
    this.fetchNews(source)
}

//API Call function

fetchNews = async source => {
    getArticles(source).then(
        articles => {
        console.log('articles', articles)
        this.setState({
            articles: articles,
            isLoading: false
        })
    }, error => {
        Alert.alert('Error', `Something went wrong ${error}`)
    })
}

//Handler Function

//webView 보여지는부분
handleArticlePress = ({title, url }) => {
    // console.log(`Article with title ${title} pressed`)
    this.setState({
        modalVisible:true,
        articleData: {
            title,
            url
        }
    })
}
//webView 모달창 닫는 버튼에 대한 펑션
handleArticleModalClose = () => {
    this.setState({
        modalVisible:false,
        articleData:{}
    })
}

//webView에 있는 share 버튼
handleArticleShare = (title, url) => {
    const message = `${title}\n\nRead More @${url}\n\n Shared via ReactNative News App`
    return Share.share(
    {
        title,
        message,
        url:message
    },
    {
        dialogTitle:`Share ${title}`
    }
    )
}

render() {
    const { articleData, articles, isLoading, modalVisible } = this.state
    return (
        <TabContent 
        articles={articles}
        articleData={articleData}
        isLoading={isLoading}
        onArticlePress={this.handleArticlePress}
        onArticleModalClose={this.handleArticleModalClose}
        onArticleShare={this.handleArticleShare}
        modalVisible={modalVisible}
        />
        
    )
    }
}

export default TabContentContainer