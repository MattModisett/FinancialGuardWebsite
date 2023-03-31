from flask import *  # from Terminal: pip install flask


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

'''@app.route('/articles')
def render_articles():
    return render_template('articles.html') '''


if __name__ == '__main__':
    app.run()
