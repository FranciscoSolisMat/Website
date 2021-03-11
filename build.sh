#!/bin/bash

echo "Are you in the project root folder? [no]:"
echo "> yes, no"
read -r root

if [ "$root" != "yes" ]; then
  exit 0
else
  echo "Choose the environment (dev, prod) [prod]: "
  echo "> dev, prod"
  read -r env

  if [ "$env" == "dev" ]; then
      JEKYLL_ENV=development
  else
      JEKYLL_ENV=production
  fi

  echo "Do you want to pull the data? [no]: "
  echo "> yes, no"
  read -r pull_data

  if [ "$pull_data" == "yes" ]; then
    echo "Pulling data..."
    git pull
  else
    echo "Ok. I won't pull the data."
  fi

  echo "Now you want to serve or build? [build]:"
  echo "> serve, build"

  read -r action

  if [ "$action" == "serve" ]; then
    jekyll serve
  else
    jekyll build
  fi
fi