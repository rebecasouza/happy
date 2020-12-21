DOCKER_COMPOSE := docker-compose -f docker-compose.yml
WEB := ${DOCKER_COMPOSE} run web
SERVER := ${DOCKER_COMPOSE} run server

# Build
build:
	@${DOCKER_COMPOSE} build
# Start
start:
	@${DOCKER_COMPOSE} up -d
# Stop
stopv:
	@${DOCKER_COMPOSE} down --remove-orphans -v
# Restart
stop:
	@${DOCKER_COMPOSE} down --remove-orphans
# Restart
restart:
	@${DOCKER_COMPOSE} restart
# Web Shell
web_shell:
	@${WEB} sh
# Server Shell
server_shell:
	@${SERVER} sh
# Log web
web_log:
	@${DOCKER_COMPOSE} logs -f web
# Log server
server_log:
	@${DOCKER_COMPOSE} logs -f server


