import React, {useState, useEffect, useCallback} from 'react';

import {WebView} from 'react-native-webview';
import {StyleSheet, Text, View, Image} from 'react-native';
import ShareMenu, {ShareMenuReactView} from 'react-native-share-menu';

const App = () => {
  const [sharedData, setSharedData] = useState('');
  const [sharedMimeType, setSharedMimeType] = useState('');
  const [sharedExtraData, setSharedExtraData] = useState(null);

  const handleShare = useCallback(item => {
    if (!item) {
      return;
    }

    const {mimeType, data, extraData} = item;

    setSharedData(data);
    setSharedExtraData(extraData);
    setSharedMimeType(mimeType);
  }, []);

  useEffect(() => {
    ShareMenu.getInitialShare(handleShare);
  }, [handleShare]);

  useEffect(() => {
    const listener = ShareMenu.addNewShareListener(handleShare);

    return () => {
      listener.remove();
    };
  }, [handleShare]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>React Native Share Menu</Text>
      <Text style={styles.instructions}>Shared type: {sharedMimeType}</Text>
      <Text style={styles.instructions}>
        Shared text: {sharedMimeType === 'text/plain' ? sharedData : ''}
      </Text>
      <Text style={styles.instructions}>Shared image:</Text>
      {sharedMimeType.startsWith('image/') && (
        <Image
          style={styles.image}
          source={{uri: sharedData}}
          resizeMode="contain"
        />
      )}
      <Text style={styles.instructions}>
        Shared file:{' '}
        {sharedMimeType !== 'text/plain' && !sharedMimeType.startsWith('image/')
          ? sharedData
          : ''}
      </Text>
      <Text style={styles.instructions}>
        Extra data: {sharedExtraData ? JSON.stringify(sharedExtraData) : ''}
      </Text>
      <WebView source={{uri: 'https://xlinkote.vercel.app/'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default App;
