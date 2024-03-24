import json

from flask import render_template, request
from app import app

# from .dbfunc import *

branches = json.loads(open('app/db/branches.json').read())


@app.route('/')
def index():
    global branches
    return render_template('index.html', branches=branches['branches'])


@app.route('/<coursecode>/semesters')
def semesters(coursecode):
    global branches
    print(branches[coursecode])
    return render_template('sems.html', sems=branches[coursecode])


@app.route('/admin', methods=['GET', 'POST'])
def admin_panel():
    global branches
    if request.method == 'POST':
        sql_command = request.form['sql_command']
        branches = json.loads(open('app/db/branches.json').read())
        # result = execute_sql(sql_command)
        # return render_template('admin.html', result=result)

    return render_template('admin.html', result=None)
