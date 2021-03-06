from flask import Flask, render_template, url_for, request, redirect
from flask_sqlalchemy  import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
#database configuration
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///test.db'
db = SQLAlchemy(app)

class Point(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    content = db.Column(db.String(150), nullable=False)
    date_created = db.Column(db.DateTime, default = datetime.utcnow)

    def __repr__(self):
        return '<Point %r>' % self.id

@app.route('/',methods=['POST','GET'])
def index():
    if request.method == 'POST':
        position_coord = request.form['content']
        new_point = Point(content=position_coord)
        try :
            db.session.add(new_point)
            db.session.commit()
            return redirect('/')
        except :
            return 'There was an issue adding your point'
    else :
        points = Point.query.order_by(Point.date_created).all()
        return render_template('index.html', points=points)

@app.route('/delete/<int:id>')
def delete(id):
    point_to_delete = Point.query.get_or_404(id)

    try:
        db.session.delete(point_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'There was a problem deleting your point'







if __name__ == '__main__':
    app.run(debug = False)