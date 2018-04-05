#!/bin/sh
# Nativefier packt eine beliebige Website in eine Electron-Desktop-Application.
sudo apt-get -y install nodejs-legacy npm
sudo npm install -g nativefier    # npm ist der node.js-PackageManager.
# Der Minimal-Aufruf (ohne sudo) erstellt die App im aktuellen Verz: nativefier "URL"
sudo nativefier --name pxt "http://pxt.calliope.cc" /usr/local
sudo ln -s /usr/local/pxt-linux-x64/pxt /usr/local/bin/pxt
sudo chmod go+r+x /usr/local/pxt-linux-x64/resources/app    # Ein Verz war 700 statt 755.
# Die App wird mit "pxt" gestartet; ihre Daten landen in ~/.config/pxt-nativefier-a12c10/
