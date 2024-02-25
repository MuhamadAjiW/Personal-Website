#!/bin/bash

terminate() {
  echo "Stopping personal web..."
  echo "Stopping backend..."
  pkill -P $$
  echo "Stopping database..."
  docker compose down
  echo "Personal web stopped."
  exit
}

trap terminate SIGINT

echo "Starting personal web..."
echo "Starting database..."
docker-compose up --build -d
echo "Starting backend..."
cd personal-backend/dist && node index.js >> be-app.log 2>&1 &
echo "Initialization complete, check respective logs for status."

wait