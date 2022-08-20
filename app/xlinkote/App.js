import React, {useState, useEffect, useCallback} from 'react';

import {WebView} from 'react-native-webview';
import ShareMenu from 'react-native-share-menu';

const App = () => {
  const webview = React.useRef(null);
  const handleShare = useCallback(item => {
    if (!item) {
      return;
    }

    const {mimeType, data, extraData} = item;

    if (webview.current) {
      webview.current.postMessage(
        JSON.stringify({
          m: 'add',
          type: mimeType,
          text: data,
          data: data,
        }),
      );
    }
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

  return <WebView source={{uri: 'http://192.168.0.153:5500'}} ref={webview} />;
};

export default App;
