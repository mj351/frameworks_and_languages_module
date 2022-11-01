DOCKER_IMAGE:=server
build:
	docker build --tag ${DOCKER_IMAGE} .
run:
	cddocker run --rm -it --publish 8000:8000 ${DOCKER_IMAGE}
