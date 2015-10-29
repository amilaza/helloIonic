# Read more about app structure at http://docs.appgyver.com

module.exports =
  ###
  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Index"
      id: "index"
      location: "examp#getting-started" # Supersonic module#view type navigation
    }
    {
      title: "Settings"
      id: "settings"
      location: "example#settings"
    }
    {
      title: "Internet"
      id: "internet"
      location: "http://google.com" # URLs are supported!
    }
  ]
  ###
  rootView:
     location: "home#index"

  ###
  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]
  ###

  drawers:
    left:
      id: "offmenu"
      location: "offmenu#index"
      showOnAppLoad: false
    options:
      animation: "swingingDoor"
