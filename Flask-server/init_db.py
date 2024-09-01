import os
import psycopg2

conn = psycopg2.connect(
        host="localhost",
        database="flask_db",
        user=os.environ['DB_USERNAME'],
        password=os.environ['DB_PASSWORD'])

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a command: this creates a new table
cur.execute('DROP TABLE IF EXISTS user;')
cur.execute('CREATE TABLE user (id serial PRIMARY KEY,'
                                'name varchar (150) NOT NULL,'
                                'email varchar (50) NOT NULL,'
                                'password varchar(50) NOT NULL;'
                                )

# Insert data into the table

cur.execute('INSERT INTO books (name, email, password)'
            'VALUES (%s, %s, %s)',
            ('test',
            'test@test.test',
            'testtest')
            )

conn.commit()

cur.close()
conn.close()