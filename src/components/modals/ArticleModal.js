import React from 'react'
import {Dimensions, Modal, View} from 'react-native'
import {WebView} from 'react-native-webview'
import {EvilIcons} from '@expo/vector-icons'
import {Container, Content, Header, Body, Left, Right, Title} from 'native-base'

const webViewHeight = Dimensions.get('window').height -56

const ArticleModal = props => {
    const { articleData, onClose, onShare, showModal } = props
    const { title, url } = articleData

    return (
      <View>
        <Modal
          animationType='slide'
          transparent
          visible={showModal}
          onRequestClose={onClose}
        >
          <Container>
            <Header>
              <Left>
                <EvilIcons 
                backgroundColor='transparent'
                color='black'
                name='close'
                size={30}
                onPress={onClose}
                />
              </Left>
              <Body>
                <Title children={title} style={{color:'black'}} />
              </Body>
              <Right>
                <EvilIcons 
                  backgroundColor='transparent'
                  color='black'
                  name='share-apple'
                  size={30}
                  onPress={() => onShare(title, url)}
                  />
              </Right>
            </Header>
          <Content contentContainerStyle={{height:webViewHeight}}>
            <WebView 
              onError={onClose}
              source={{uri:url}}
              style={{flex:1}}
              startInLoadingState
              scalesPageToFit
              />
          </Content>
        </Container>
        </Modal>
      </View>
    )
}

export default ArticleModal