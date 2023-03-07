#Install image + files
FROM cirrusci/flutter:latest
WORKDIR /app
VOLUME /apk
COPY . .

#Build apk
RUN flutter pub get
RUN flutter clean
RUN flutter build apk

#Copy apk to a new directory
RUN mkdir /apk/
RUN cp build/app/outputs/flutter-apk/app-release.apk /apk/area.apk
