devopsGraph = {
    "Learn a Programming Language": {
        "Python": {"Ruby": 1},
        "Ruby": {"JavaScript / Node.js": 1},
        "JavaScript / Node.js": {"Go": 1},
        "Go": {"Rust": 1},
        "Rust": {"Java": 1},
        "Java": {"C#": 1},
        "C#": {}
    },
    "Operating Systems": {
        "Linux": {
            "Ubuntu / Debian": {"SUSE Linux": 1},
            "SUSE Linux": {"RHEL / Derivatives": 1},
            "RHEL / Derivatives": {}
        },
        "Windows": {},
        "Unix": {
            "FreeBSD": {"OpenBSD": 1},
            "OpenBSD": {"NetBSD": 1},
            "NetBSD": {}
        }
    },
    "Learn to live in Terminal": {
        "Process Monitoring": {"Performance Monitoring": 1},
        "Performance Monitoring": {"Networking Tools": 1},
        "Networking Tools": {"Text Manipulation": 1},
        "Text Manipulation": {"Editors": 1},
        "Editors": {
            "Vim / Nano / Emacs": {}
        },
        "Scripting": {
            "Bash Scripting": {"Power Shell": 1},
            "Power Shell": {}
        }
    },
    "Version Control Systems": {
        "Git": {}
    },
    "VCS Hosting": {
        "GitHub": {"GitLab": 1},
        "GitLab": {"Bitbucket": 1},
        "Bitbucket": {}
    },
    "Web Servers": {
        "Nginx": {"Apache": 1},
        "Apache": {"IIS": 1},
        "IIS": {"Tomcat": 1},
        "Tomcat": {}
    },
    "What is and how to setup a _____?": {
        "Reverse Proxy": {"Forward Proxy": 1},
        "Forward Proxy": {"Firewall": 1},
        "Firewall": {"Load Balancer": 1},
        "Load Balancer": {"Caching Server": 1},
        "Caching Server": {}
    },
    "Containers": {
        "LXC": {"Docker": 1},
        "Docker": {}
    },
    "Cloud Providers": {
        "AWS": {"Azure": 1},
        "Azure": {"Google Cloud": 1},
        "Google Cloud": {"Digital Ocean": 1},
        "Digital Ocean": {"Alibaba Cloud": 1},
        "Alibaba Cloud": {"Linode": 1},
        "Linode": {"Vultr": 1},
        "Vultr": {}
    },
    "Networking, Security and Protocols": {
        "FTP / SFTP": {"DNS": 1},
        "DNS": {"HTTP": 1},
        "HTTP": {"HTTPS": 1},
        "HTTPS": {"SSL / TLS": 1},
        "SSL / TLS": {"SSH": 1},
        "SSH": {}
    },
    "Infrastructure Provisioning": {
        "AWS CDK": {"CloudFormation": 1},
        "CloudFormation": {"Pulumi": 1},
        "Pulumi": {"Terraform": 1},
        "Terraform": {}
    },
    "Serverless": {
        "Cloudflare": {"AWS Lambda": 1},
        "AWS Lambda": {"Azure Functions": 1},
        "Azure Functions": {"GCP Functions": 1},
        "GCP Functions": {"Vercel": 1},
        "Vercel": {}
    },
    "Configuration Management": {
        "Ansible": {"Chef": 1},
        "Chef": {"Puppet": 1},
        "Puppet": {}
    },
    "CI/CD Tools": {
        "GitLab CI": {"Jenkins": 1},
        "Jenkins": {"GitHub Actions": 1},
        "GitHub Actions": {"Travis CI": 1},
        "Travis CI": {"Circle CI": 1},
        "Circle CI": {"Drone": 1},
        "Drone": {}
    },
    "Secret Management": {
        "Sealed Secrets": {"Cloud Specific Tools": 1},
        "Cloud Specific Tools": {"Vault": 1},
        "Vault": {"SOPS": 1},
        "SOPS": {}
    },
    "Infrastructure Monitoring": {
        "Zabbix": {"Prometheus": 1},
        "Prometheus": {"Datadog": 1},
        "Datadog": {"Grafana": 1},
        "Grafana": {}
    },
    "Application Monitoring": {
        "Jaeger": {"New Relic": 1},
        "New Relic": {"AppDynamics": 1},
        "AppDynamics": {"Datadog": 1},
        "Datadog": {"OpenTelemetry": 1},
        "OpenTelemetry": {}
    },
    "Logs Management": {
        "Elastic Stack": {"Loki": 1},
        "Loki": {"Graylog": 1},
        "Graylog": {"Splunk": 1},
        "Splunk": {"Papertrail": 1},
        "Papertrail": {}
    },
    "Container Orchestration": {
        "GKE / EKS / AKS": {"AWS ECS / Fargate": 1},
        "AWS ECS / Fargate": {"Docker Swarm": 1},
        "Docker Swarm": {"Kubernetes": 1},
        "Kubernetes": {}
    },
    "Artifact Management": {
        "Artifactory": {"Nexus": 1},
        "Nexus": {"Cloud Smith": 1},
        "Cloud Smith": {}
    },
    "GitOps": {
        "ArgoCD": {"FluxCD": 1},
        "FluxCD": {}
    },
    "Service Mesh": {
        "Istio": {"Consul": 1},
        "Consul": {"Linkerd": 1},
        "Linkerd": {"Envoy": 1},
        "Envoy": {}
    },
    "Cloud Design Patterns": {
        "Availability": {"Data Management": 1},
        "Data Management": {"Design and Implementation": 1},
        "Design and Implementation": {"Management and Monitoring": 1},
        "Management and Monitoring": {}
    }
}
