from flask import Flask,render_template

app=Flask(__name__)
dataforindex="This is index page"
app=Flask(__name__)
siyahi=[
    {
        'ad':'Laman',
        'soyad':'Macidli',
        'yas':'24'
        
    }
]
@app.route('/')
def home():
    return render_template('index.html',data=siyahi)

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True)