# How to scale docker containers using Nginx as reversed proxy (With a sprinkle of Load Balancing)

This is super siple (express) app that shows, how to scale `Docker containers` with one command use `Nginx` as reversed proxy to all instances.

## The Idea

- Create express app that runs on port 3000
- Dockerize it
- Create `docker-compose.yml` file with all config to spin the express app (basically with no settings like port or name to be easily scalabale), then add `Nginx` dependency that will run on port 3000 and redirect traffic to express instances
- Create Nginx `config file` to redirect all that trafic to http://api:3000 - check `proxy_pass` command in the Nginx config file

## How to run app ?

- `npm install` - to install all dependencies
- in the express app directory run command `docker compose up --scale api=2 ` . This will scale app to 2 Docker containers.
  Changing `api=10` will give 10 instances of the express appp. The load to those instances will be balanced by Nginx

## Test app ?

- `curl http://localhost:3000`
- or the same link in any browser or Postman

#### L4Love, Sev
