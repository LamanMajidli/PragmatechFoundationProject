from flask import Flask,redirect,url_for,render_template,request
import datetime

mess=[]
app=Flask(__name__)
@app.route('/',methods=['GET','POST'])
def add():
    return render_template('form.html')

@app.route('/messages',methods=['GET','POST'])
def messages():
    if request.method=='POST':
        _name=request.form['name']
        _email=request.form['email']
        _text=request.form['text']
        mesaj={
        'name':_name,
        'email':_email,
        'text':_text
        }
        mess.append(mesaj)
        return render_template('formdata.html',messages=mess)
    return render_template('formdata.html')

if __name__ == '__main__':
    #DEBUG is SET to TRUE.CHANGE FOR PROD
    app.run(port=5000,debug=True)

    