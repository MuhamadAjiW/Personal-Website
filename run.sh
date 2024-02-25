#!/bin/bash
echo "Starting database..."
docker-compose up --build -d
echo "Starting backend..."
cd personal-backend/dist && node index.js >> be-app.log 2>&1 &
echo "Initialization complete, check respective logs for status."