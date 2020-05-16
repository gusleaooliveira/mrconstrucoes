#!/usr/bin/env bash


caminhoProximo="\.\.\/\.\.\/hcw0\/hcw\/hcw.min.css"
caminhoAnterior="resources\/css\/hcw.min.css"

sed  -i "s/$caminhoAnterior/$caminhoProximo/" index.html
