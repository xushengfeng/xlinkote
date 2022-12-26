import whisper
import os
from flask import Flask, render_template, request
from flask_cors import CORS
import json
import time

app = Flask(__name__)
CORS(app)


class transcribe:
    def __init__(self, file):
        self.model = None
        self.file = file

    def run(self):
        if self.model is None:
            self.model = whisper.load_model('tiny').cpu()

        result = self.model.transcribe(self.file)
        return result


@app.route('/', methods=['GET', 'POST'])
def upload():
    global newvideo
    # 如果是get请求响应上传视图，post请求响应上传文件
    if(request.method == 'GET'):
        pass
    else:
        f = request.files['file']
        # 生成一个uuid作为文件名
        fileName = f.filename
        # os.path.join拼接地址，上传地址，f.filename获取文件名
        file_1 = fileName
        f.save(file_1)
        result = transcribe(fileName).run()
        return result


if __name__ == '__main__':
    # server = pywsgi.WSGIServer(('0.0.0.0',80),app)
    # server.serve_forever()
    app.run(host='0.0.0.0', port=8080)
