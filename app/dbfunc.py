import sqlite3


def get_branches():
    conn = sqlite3.connect('branches.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM branches')
    branches = cursor.fetchall()
    conn.close()
    return branches


def execute_sql(sql_command):
    try:
        conn = sqlite3.connect('branches.db')
        cursor = conn.cursor()

        cursor.execute(sql_command)
        result = cursor.fetchall()

        conn.commit()
        conn.close()

        return result
    except Exception as e:
        return f"Error executing SQL command: {str(e)}"
