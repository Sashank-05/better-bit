import json

from flask import render_template, request
from app import app

# from .dbfunc import *

branches = json.loads(open('app/db/branches.json').read())


@app.route('/')
def index():
    return render_template('index.html', branches=branches['branches'])


@app.route('/<coursecode>/semesters')
def semesters(coursecode):
    print(branches[coursecode])
    return render_template('sems.html', sems=branches[coursecode])


@app.route('/admin', methods=['GET', 'POST'])
def admin_panel():
    if request.method == 'POST':
        sql_command = request.form['sql_command']
        # result = execute_sql(sql_command)
        # return render_template('admin.html', result=result)

    return render_template('admin.html', result=None)
