#!/bin/sh

while [ ! -f "/apk/area.apk" ]
do
  sleep 1
done

cp /apk/area.apk ./public/area.apk
exec "$@"