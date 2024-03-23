from flask import render_template, redirect, url_for
from app import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/notes')
def note_list():

    notes = Note.query.all()
    # return render_template('notes/note_list.html', notes=notes)

