OC.L10N.register(
    "integration_google",
    {
    "Missing refresh token in Google response." : "Missing refresh token in Google response.",
    "Error getting OAuth access token." : "Error getting OAuth access token.",
    "Error during OAuth exchanges" : "Error during OAuth exchanges",
    "Google" : "Google",
    "_%s photo was imported from Google._::_%s photos were imported from Google._" : ["%s photo was imported from Google.","%s photos were imported from Google."],
    "_%s file was imported from Google Drive._::_%s files were imported from Google Drive._" : ["%s file was imported from Google Drive.","%s files were imported from Google Drive."],
    "OAuth access token refused" : "OAuth access token refused",
    "Bad credentials" : "Bad credentials",
    "Google Calendar import" : "Google Calendar import",
    "Private event" : "Private event",
    "Connected accounts" : "Connected accounts",
    "Data migration" : "Data migration",
    "Google integration" : "Google integration",
    "Import Google data into Nextcloud" : "Import Google data into Nextcloud",
    "Google integration allows you to automatically import your Google calendars, contacts, photos and files into Nextcloud." : "Google integration allows you to automatically import your Google calendars, contacts, photos and files into Nextcloud.",
    "If you want to allow your Nextcloud users to authenticate to Google, create an OAuth application in your Google settings." : "If you want to allow your Nextcloud users to authenticate to Google, create an OAuth application in your Google settings.",
    "Google API settings" : "Google API settings",
    "Go to \"APIs & Services\" => \"Credentials\" and click on \"+ CREATE CREDENTIALS\" -> \"OAuth client ID\"." : "Go to \"APIs & Services\" => \"Credentials\" and click on \"+ CREATE CREDENTIALS\" -> \"OAuth client ID\".",
    "Set the \"Application type\" to \"Web application\" and give a name to the application." : "Set the \"Application type\" to \"Web application\" and give a name to the application.",
    "Make sure you set one \"Authorized redirect URI\" to" : "Make sure you set one \"Authorized redirect URI\" to",
    "Put the \"Client ID\" and \"Client secret\" below." : "Put the \"Client ID\" and \"Client secret\" below.",
    "Finally, go to \"APIs & Services\" => \"Library\" and add the following APIs: \"Google Drive API\", \"Google Calendar API\", \"People API\" and \"Photos Library API\"." : "Finally, go to \"APIs & Services\" => \"Library\" and add the following APIs: \"Google Drive API\", \"Google Calendar API\", \"People API\" and \"Photos Library API\".",
    "Your Nextcloud users will then see a \"Connect to Google\" button in their personal settings." : "Your Nextcloud users will then see a \"Connect to Google\" button in their personal settings.",
    "Client ID" : "Client ID",
    "Client ID of your Google application" : "Client ID of your Google application",
    "Client secret" : "Client secret",
    "Client secret of your Google application" : "Client secret of your Google application",
    "Use a popup to authenticate" : "Use a popup to authenticate",
    "Google admin options saved" : "Google admin options saved",
    "Failed to save Google admin options" : "Failed to save Google admin options",
    "Google data migration" : "Google data migration",
    "No Google OAuth app configured. Ask your Nextcloud administrator to configure Google connected accounts admin section." : "No Google OAuth app configured. Ask your Nextcloud administrator to configure Google connected accounts admin section.",
    "Authentication" : "Authentication",
    "Sign in with Google" : "Sign in with Google",
    "Connected as {user}" : "Connected as {user}",
    "Disconnect from Google" : "Disconnect from Google",
    "Contacts" : "Contacts",
    "{amount} Google contacts" : "{amount} Google contacts",
    "Import Google Contacts in Nextcloud" : "Import Google Contacts in Nextcloud",
    "Choose where to import the contacts" : "Choose where to import the contacts",
    "New address book" : "New address book",
    "address book name" : "address book name",
    "Import in \"{name}\" address book" : "Import in \"{name}\" address book",
    "Calendars" : "Calendars",
    "Import calendar" : "Import calendar",
    "Photos" : "Photos",
    "Ignore shared albums" : "Ignore shared albums",
    "Warning: Google does not provide location data in imported photos." : "Warning: Google does not provide location data in imported photos.",
    "Import directory" : "Import directory",
    "Import Google photos" : "Import Google photos",
    "Your Google photo collection size is estimated to be bigger than your remaining space left ({formSpace})" : "Your Google photo collection size is estimated to be bigger than your remaining space left ({formSpace})",
    "Cancel photo import" : "Cancel photo import",
    "Drive" : "Drive",
    "Ignore shared files" : "Ignore shared files",
    "Google documents import format" : "Google documents import format",
    "Import Google Drive files" : "Import Google Drive files",
    "Your Google Drive is bigger than your remaining space left ({formSpace})" : "Your Google Drive is bigger than your remaining space left ({formSpace})",
    "Cancel Google Drive import" : "Cancel Google Drive import",
    "Photo import background process will begin soon." : "Photo import background process will begin soon.",
    "Last photo import job at {date}" : "Last photo import job at {date}",
    "You can close this page. You will be notified when it finishes." : "You can close this page. You will be notified when it finishes.",
    "Google Drive background import process will begin soon." : "Google Drive background import process will begin soon.",
    "Last Google Drive import job at {date}" : "Last Google Drive import job at {date}",
    "Successfully connected to Google!" : "Successfully connected to Google!",
    "Google connection error:" : "Google connection error:",
    "Google options saved" : "Google options saved",
    "Failed to save Google options" : "Failed to save Google options",
    "Failed to save Google OAuth state" : "Failed to save Google OAuth state",
    "Failed to get Google Drive information" : "Failed to get Google Drive information",
    "Failed to get calendar list" : "Failed to get calendar list",
    "Failed to get number of Google photos" : "Failed to get number of Google photos",
    "Failed to get number of Google contacts" : "Failed to get number of Google contacts",
    "Failed to get address book list" : "Failed to get address book list",
    "Failed to import Google calendar" : "Failed to import Google calendar",
    "Starting importing photos in {targetPath} directory" : "Starting importing photos in {targetPath} directory",
    "Failed to start importing Google photos" : "Failed to start importing Google photos",
    "Starting importing files in {targetPath} directory" : "Starting importing files in {targetPath} directory",
    "Failed to start importing Google Drive" : "Failed to start importing Google Drive",
    "Choose where to write imported files" : "Choose where to write imported files",
    "Choose where to write imported photos" : "Choose where to write imported photos",
    "_>{nbPhotos} Google photo (>{formSize})_::_>{nbPhotos} Google photos (>{formSize})_" : [">{nbPhotos} Google photo (>{formSize})",">{nbPhotos} Google photos (>{formSize})"],
    "_{amount} photo imported_::_{amount} photos imported_" : ["{amount} photo imported","{amount} photos imported"],
    "_{nbFiles} file in Google Drive ({formSize} + {formSharedSize} shared with you)_::_{nbFiles} files in Google Drive ({formSize} + {formSharedSize} shared with you)_" : ["{nbFiles} file in Google Drive ({formSize} + {formSharedSize} shared with you)","{nbFiles} files in Google Drive ({formSize} + {formSharedSize} shared with you)"],
    "_{nbFiles} file in Google Drive ({formSize})_::_{nbFiles} files in Google Drive ({formSize})_" : ["{nbFiles} file in Google Drive ({formSize})","{nbFiles} files in Google Drive ({formSize})"],
    "_{amount} file imported ({progress}%)_::_{amount} files imported ({progress}%)_" : ["{amount} file imported ({progress}%)","{amount} files imported ({progress}%)"],
    "_{number} contact successfully imported in {name}_::_{number} contacts successfully imported in {name}_" : ["{number} contact successfully imported in {name}","{number} contacts successfully imported in {name}"],
    "_{number} event successfully imported in {name}_::_{number} events successfully imported in {name}_" : ["{number} event successfully imported in {name}","{number} events successfully imported in {name}"]
},
"nplurals=2; plural=(n != 1);");
