from flask import Flask

app = Flask(__name__)

# Member API
@app.route("/members")
def members():
    return "Members API"

if __name__ == '__main__':
    app.run(debug=True)