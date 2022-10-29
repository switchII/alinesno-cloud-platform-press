#!/usr/bin/env sh

cd /usr/local/nginx-vts-exporter-0.9.1.linux-amd64/
nohup ./nginx-vts-exporter  -nginx.scrape_uri http://127.0.0.1:1212/status/format/json &

nginx -g "daemon off;"

