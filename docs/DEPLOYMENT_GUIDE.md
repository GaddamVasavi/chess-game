# Cloud-Native DevOps & Deployment Guide

## Prerequisites
- Docker Engine & Docker Compose
- Kubernetes Cluster (Minikube / EKS / GKE)
- Helm 3.x
- OpenTofu / Terraform

## Local Development (Docker Compose)
```bash
docker-compose -f devops/docker/docker-compose.yml up --build
```

## Kubernetes Deployment (Helm)
```bash
helm upgrade --install chess-platform devops/helm/chess-platform \
  --namespace chess-production \
  --create-namespace \
  --values devops/helm/chess-platform/values.yaml
```
