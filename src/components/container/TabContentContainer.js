import React, { Component } from 'react'
import { Alert, Share } from 'react-native'

import { getArticles } from '../../service/api'
import TabContent from '../Tabs/TabContent'


class TabContentContainer extends Component {
state = {
    article: [],
    isLoading: true,
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

render() {
    const {articles, isLoading } = this.state
    return (
        <TabContent 
        articles={articles}
        isLoading={isLoading}
        />
    )
}
}

export default TabContentContainer