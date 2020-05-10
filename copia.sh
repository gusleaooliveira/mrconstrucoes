#!/usr/bin/env bash

cp /home/gustavo/Área\ de\ Trabalho/estudo/front/hcw0/hcw/hcw.min.css resources/css/

sed -i "s/..\/hcw0\/hcw\/hcw.min.css/resources\/css\/hcw.min.css/" index.html

git add .



git commit -m "alteração feita em:$(date +%d/%m/%Y-%k:%M:%S)"
