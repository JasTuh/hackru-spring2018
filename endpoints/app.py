from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return "Hello World!"

@app.route('/login')
def login():
    return "Logging in"

@app.route('/playlists')
def playlists():
    return "looking for playlists"

@app.route('/merge')
def merge():
    return "mergin some playlists"

if __name__ == '__main__':
    app.run()
