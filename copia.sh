#!/usr/bin/env bash

cp /home/gustavo/Área\ de\ Trabalho/estudo/front/hcw0/hcw/hcw.min.css resources/css/


caminhoAnteiror="\.\.\/\.\.\/hcw0\/hcw\/hcw.min.css"
caminhoProximo="resources\/css\/hcw.min.css"

sed  -i "s/$caminhoAnteiror/$caminhoProximo/" index.html


git add .

git commit -m "alteração feita em:$(date +%d/%m/%Y-%k:%M:%S)"

git push
