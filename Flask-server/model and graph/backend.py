backendGraph = {
    "Internet": {
        "How does the internet work?": {"What is HTTP?": 1},
        "What is HTTP?": {"Browsers and how they work?": 1},
        "Browsers and how they work?": {"DNS and how it works?": 1},
        "DNS and how it works?": {"What is Domain Name?": 1},
        "What is Domain Name?": {"What is hosting?": 1},
        "What is hosting?": {}
    },

    "Learn a Language": {
        "Go": {"Java": 1},
        "Java": {"Rust": 1},
        "Rust": {"C#": 1},
        "C#": {"PHP": 1},
        "PHP": {"JavaScript": 1},
        "JavaScript": {"Python": 1},
        "Python": {"Ruby": 1},
        "Ruby": {}
    },

    "Version Control Systems": {
        "Git": {}
    },

    "Repo hosting services": {
        "GitHub": {"GitLab": 1},
        "GitLab": {"Bitbucket": 1},
        "Bitbucket": {}
    },

    "OS and General Knowledge": {
        "Memory Management": {"Interprocess Communication": 1},
        "Interprocess Communication": {"I/O Management": 1},
        "I/O Management": {"POSIX Basics": 1},
        "POSIX Basics": {"Basic Networking Concepts": 1},
        "Basic Networking Concepts": {"Terminal Usage": 1},
        "Terminal Usage": {"Basic Terminal Commands": 1},
        "Basic Terminal Commands": {"Process Management": 1},
        "Process Management": {"Threads and Concurrency": 1},
        "Threads and Concurrency": {"How OSs work in General": 1},
        "How OSs work in General": {}
    },

    "Web Servers": {
        "Nginx": {"Apache": 1},
        "Apache": {"Caddy": 1},
        "Caddy": {"MS IIS": 1},
        "MS IIS": {}
    },

    "Relational Databases": {
        "PostgreSQL": {"MySQL": 1},
        "MySQL": {"MariaDB": 1},
        "MariaDB": {"MS SQL": 1},
        "MS SQL": {"Oracle": 1},
        "Oracle": {}
    },

    "NoSQL Databases": {
        "MongoDB": {"CouchDB": 1},
        "CouchDB": {"Document DBs": 1},
        "Document DBs": {"InfluxDB": 1},
        "InfluxDB": {"TimeScale": 1},
        "TimeScale": {"Time Series": 1},
        "Time Series": {"Firebase": 1},
        "Firebase": {"RethinkDB": 1},
        "RethinkDB": {"Realtime": 1},
        "Realtime": {"Cassandra": 1},
        "Cassandra": {"HBase": 1},
        "HBase": {"Column DBs": 1},
        "Column DBs": {"Redis": 1},
        "Redis": {"DynamoDB": 1},
        "DynamoDB": {"Key-Value": 1},
        "Key-Value": {}
    },

    "More about Databases": {
        "Transactions": {"ACID": 1},
        "ACID": {"Failure Modes": 1},
        "Failure Modes": {"Sharding Strategies": 1},
        "Sharding Strategies": {"Normalization": 1},
        "Normalization": {"Data Replication": 1},
        "Data Replication": {"Database Indexes": 1},
        "Database Indexes": {}
    },

    "Learn about APIs": {
        "REST": {"JSON APIs": 1},
        "JSON APIs": {"SOAP": 1},
        "SOAP": {"gRPC": 1},
        "gRPC": {"GraphQL": 1},
        "GraphQL": {"HATEOAS": 1},
        "HATEOAS": {"Open API Specs": 1},
        "Open API Specs": {"CAP Theorem": 1},
        "CAP Theorem": {}
    },

    "Caching": {
        "Redis": {"Memcached": 1},
        "Memcached": {"Server Side": 1},
        "Server Side": {"Client Side": 1},
        "Client Side": {"CDN": 1},
        "CDN": {}
    },


    "Web Security Knowledge": {
        "MD5 and why not to use it": {"SHA Family": 1},
        "SHA Family": {"scrypt": 1},
        "scrypt": {"bcrypt": 1},
        "bcrypt": {"HTTPS": 1},
        "HTTPS": {"OWASP Risks": 1},
        "OWASP Risks": {"CORS": 1},
        "CORS": {"SSL/TLS": 1},
        "SSL/TLS": {"Content Security Policy": 1},
        "Content Security Policy": {}
    },

    "Testing": {
        "Integration Testing": {"Unit Testing": 1},
        "Unit Testing": {"Functional Testing": 1},
        "Functional Testing": {}
    },

    "CI / CD": {
        "Have a look at the DevOps Roadmap": {}
    },

    "Design and Development Principles": {
        "GOF Design Patterns": {"Domain Driven Design": 1},
        "Domain Driven Design": {"Test Driven Development": 1},
        "Test Driven Development": {"CQRS": 1},
        "CQRS": {"Event Sourcing": 1},
        "Event Sourcing": {}
    },

    "Architectural Patterns": {
        "Elasticsearch": {"Solr": 1},
        "Solr": {"Search Engines": 1},
        "Search Engines": {}
    },

    "Message Brokers": {
        "RabbitMQ": {"Kafka": 1},
        "Kafka": {}
    },

    "Containerization vs Virtualization": {
        "Kubernetes": {"Docker": 1},
        "Docker": {"LXC": 1},
        "LXC": {}
    },

    "Server Sent Events": {
        "WebSockets": {"GraphQL": 1},
        "GraphQL": {}
    },

    "Monolithic Apps": {
        "Microservices": {"SOA": 1},
        "SOA": {"Serverless": 1},
        "Serverless": {"Service Mesh": 1},
        "Service Mesh": {"Twelve Factor Apps": 1},
        "Twelve Factor Apps": {}
    },

    "Building for Scale": {
        "Instrumentation": {"Monitoring": 1},
        "Monitoring": {"Telemetry": 1},
        "Telemetry": {"Difference between these": 1},
        "Difference between these": {"Gradual Degradation": 1},
        "Gradual Degradation": {"Throttling": 1},
        "Throttling": {"Backpressure": 1},
        "Backpressure": {"Loadshifting": 1},
        "Loadshifting": {"Circuit Breaker": 1},
        "Circuit Breaker": {"Mitigation Strategies": 1},
        "Mitigation Strategies": {"Migration Strategies": 1},
        "Migration Strategies": {"Types of Scaling": 1},
        "Types of Scaling": {"Observability": 1},
        "Observability": {}
    }
    
}


