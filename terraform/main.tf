terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {}

# -------------------------
# Réseau Docker local
# -------------------------
resource "docker_network" "loueunechevre" {
  name = "loueunechevre_network"
}

# -------------------------
# API Container
# -------------------------
resource "docker_image" "api_image" {
  name         = "loueunechevre_api"
  build {
    context    = "../services/api"
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "api" {
  name  = "api"
  image = docker_image.api_image.image_id
  networks_advanced {
    name = docker_network.loueunechevre.name
  }
  ports {
    internal = 3001
    external = 3001
  }
  env = [
    "NODE_ENV=development"
  ]
}

# -------------------------
# Web Container
# -------------------------
resource "docker_image" "web_image" {
  name         = "loueunechevre_web"
  build {
    context    = "../apps/web"
    dockerfile = "Dockerfile"
  }
}

resource "docker_container" "web" {
  name  = "web"
  image = docker_image.web_image.image_id
  networks_advanced {
    name = docker_network.loueunechevre.name
  }
  ports {
    internal = 80
    external = 8080
  }
  depends_on = [
    docker_container.api
  ]
}
