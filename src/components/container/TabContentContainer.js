import React, {Component} from 'react'
import {View,Text, Alert} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { getArticles } from '../../../service/api'

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

fetchNews = async (source) => {
    console.log('fetch news')
    getArticles(source).then(article => {
        console.log('articles', articles)
        this.setState({
            articles:articles,
            isLoading:false
        })
    }, error => {
        Alert.alert('Error', `Something went wrong ${error}`)
    })
}

render() {
    // return <TabContent />
    return <Text>hello world</Text>
}
}

export default TabContentContainer