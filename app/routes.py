import json
import os

from flask import render_template, request
from app import app

# from .dbfunc import *

branches = json.loads(open('app/db/branches.json').read())
imgs = os.listdir('app/static/images')


@app.route('/')
def index():
    """
    Renders the index page with available branches and corresponding images.

    Returns:
        rendered HTML template with branches and images
    """
    return render_template('index.html', branches=branches['branches'], imgs=imgs)


@app.route('/<coursecode>/semesters')
def semesters(coursecode):
    """
    Renders the page displaying semesters for the specified course.

    Args:
        coursecode (str): Code of the selected course

    Returns:
        rendered HTML template with semesters for the specified course
    """
    print(branches[coursecode])
    return render_template('sems.html', sems=branches[coursecode])


@app.route('/<coursecode>/semesters/<semester>')
def subjects(coursecode, semester):
    """
    Placeholder route for displaying subjects for a specific semester and branch.
    Not implemented.

    /coursecode/semesters - for selection semesters
    example - /CS/semesters/physics-cycle

    Args:
        coursecode (str): Code of the selected course
        semester (str): Name of the selected semester

    Returns:
        str:
    """
    return "Not implemented"


@app.route("/login")
def login():
    """
    Placeholder route for user login.
    Not implemented.python 
    

    Returns:
        str: Message indicating the route is not implemented
    """
    if request.method == 'POST':
        return "test"

    return render_template('login.html')


@app.route("/signup")
def signup():
    """
    Placeholder route for user signup.
    Not implemented.

    Returns:
        str: Message indicating the route is not implemented
    """
    return "Not implemented", 503


@app.route('/admin', methods=['GET', 'POST'])
def admin_panel():
    """
    Renders the admin panel and allows execution of SQL commands.

    Returns:
        rendered HTML template with admin panel and SQL execution result
    """
    if request.method == 'POST':
        sql_command = request.form['sql_command']
        # result = execute_sql(sql_command)
        # return render_template('admin.html', result=result)

    return render_template('admin.html', result=None)
