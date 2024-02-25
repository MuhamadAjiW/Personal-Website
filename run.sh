#!/bin/bash
echo "Starting database..."
docker-compose up --build -d
echo "Starting backend..."
cd personal-backend/dist && nvm use 20.10.0 && node index.js >> be-app.log 2>&1 &
echo "Initialization complete, check respective logs for status."