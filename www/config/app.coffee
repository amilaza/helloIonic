# Read more about app configs at http://docs.appgyver.com

module.exports =
  app:
    name: "pictcake"

  # steroidsAppId and steroidsApiKey headers are required by Supersonic Data
  network:
     extraResponseHeaders:
       "Access-Control-Allow-Origin": "*"
       "Access-Control-Allow-Headers": "Content-Type, X-Requested-With, steroidsAppId, steroidsApiKey"

  webView:
    viewsIgnoreStatusBar: true
    enableDoubleTapToFocus: true
    disableOverscroll: true
    enableViewportScale: true
    enablePopGestureRecognition: true
    allowInlineMediaPlayback: true

  # Applies on iOS only
  statusBar:
    enabled: true
    style: "default"

###
  navigationBar:
    enabled: false
###
