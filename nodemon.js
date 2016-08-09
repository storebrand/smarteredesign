{
  "restartable": "rs",
  "ignore": [
    ".git",
    "node_modules/**/node_modules",
    "public"
  ],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "events": {
    "restart": "osascript -e 'display notification \"App restarted due to:\n'$FILENAME'\" with title \"nodemon\"'"
  },
  "watch": [
    "app"
  ],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "js html json"
}
