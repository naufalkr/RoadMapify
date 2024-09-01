from flask import Flask, jsonify
from modelandgraph.ai import aiGraph
from modelandgraph.android import androidGraph 
from modelandgraph.backend import backendGraph
from modelandgraph.basicprogramming import basicProgrammingGraph
from modelandgraph.devops import devopsGraph
from modelandgraph.frontend import frontendGraph
from modelandgraph.gamedev import gameDevGraph
from modelandgraph.ios import iosGraph

app = Flask(__name__)

# Helper function to read file content
def read_file_content(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
        return content
    except FileNotFoundError:
        return None

# Helper function to get graph data
def get_graph_data(graph, category=None):
    if category:
        sub_graph = graph.get(category)
        if sub_graph:
            return jsonify(sub_graph)
        return jsonify({"message": "Not Found"}), 404
    return jsonify(graph)

# Routes
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Hello, World!"})

@app.route("/members", methods=["GET"])
def members():
    return jsonify({"members": ["member1", "member2", "member3"]})

# Dynamic route for file content
@app.route("/data/<string:data_type>", methods=["GET"])
def get_data(data_type):
    file_path = f"dataset/{data_type}.txt"
    content = read_file_content(file_path)
    if content:
        return jsonify({"data": content})
    return jsonify({"message": "Error reading file"}), 404

# Dynamic route for graphs
@app.route('/graph/<string:graph_name>', methods=['GET'])
@app.route('/graph/<string:graph_name>/<path:category>', methods=['GET'])
def get_graph(graph_name, category=None):
    graphs = {
        'aiGraph': aiGraph,
        'androidGraph': androidGraph,
        'backendGraph': backendGraph,
        'basicprogrammingGraph': basicProgrammingGraph,
        'devopsGraph': devopsGraph,
        'frontendGraph': frontendGraph,
        'gamedevGraph': gameDevGraph,
        'iosGraph': iosGraph,
    }
    graph = graphs.get(graph_name)
    if graph:
        return get_graph_data(graph, category)
    return jsonify({"message": "Graph Not Found"}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5001)
