from android import androidGraph
from backend import backendGraph
from frontend import frontendGraph
from devops import devopsGraph
from ios import iosGraph

def format_hierarchy(data):
    formatted = {}
    for key, value in data.items():
        formatted[key] = list(value.keys())
    return formatted

formatted_hierarchy = format_hierarchy(backendGraph)

for key, value in formatted_hierarchy.items():
    print(f"{key}: {value}")    