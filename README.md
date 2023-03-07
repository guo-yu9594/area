# **Introduction**

This document provides information about the services integration system in the platform. The platform supports multiple services including Calendar, Drive, Weather (accuWeather), and Gmail. The services can be used as triggers or reactions for other actions in the platform.

# **Architecture**

The system consists of a client and a server. The client hosts the user-facing interface, and the server holds the list of services available for integration.

# **Services**

The following services are used in this application:

- Google Calendar
- Gmail
- Drive
- Weather
- Twitch
- Discord
- Notion
- Github
- Reddit
- Slack
- Miro
- Spotify
- Dropbox


# **Launching**

Fill in environment variables with `env.example` files.  
You can find multiple env files at:  
`./`
`mobile/`
`Backend/`

And launch with `sudo docker compose up`

# **Routes**

The following routes are provided by this application:

## **Authenfication Routes**

Route URL: `/register`

- Description: Endpoint to register a new user.
- Method: `POST`
- Request Body:
  - email: string (required)
  - password: string (required)
- Response:
  - On success:
    - Status Code: 200
    - Body:
      - token: JSON web token, used to authenticate subsequent requests
      - refreshToken: JSON web token, used to refresh the authentication token when it expires
  - On error:
    - Status Code: 500
    - Body: Error registering new user

Route URL: `/login`

- Description: Endpoint to log in an existing user.
- Method: `POST`
- Request Body:
  - email: string (required)
  - password: string (required)
- Response:
  - On success:
    - Status Code: 200
    - Body:
      - token: JSON web token, used to authenticate subsequent requests
      - refreshToken: JSON web token, used to refresh the authentication token when it expires
  - On error:
    - Status Code: 400
    - Body: Invalid password
  - On error:
    - Status Code: 404
    - Body: User not found
  - On error:
    - Status Code: 500
    - Body: Error logging in

## **User route**

Routes URL: `/user`

- Description: Endpoint to retrieve user information.
- Method: `GET`
- Request Header:
  - authorization: JSON web token (required)
- Response:
  - On success:
    - Status Code: 200
    - Body:
      - user information, as stored in the database
  - On error:
    - Status Code: 401
    - Body: Unauthorized, if the provided JSON web token is invalid or has expired

## **OAuth2 Routes**

These routes allow the user to connect their accounts from numerous platforms to their AREA.

Supported platforms are the following :
  - Discord
  - Dropbox
  - Notion
  - Reddit
  - Slack
  - Spotify
  - Twitch
  - Miro

It allows AREAs to perform tasks on other platforms, such as sending messages, checking for new files etc...

## **Calendar Route**

This route provides an API endpoint to check if a Google Calendar event is happening. If the event is happening, it triggers a reaction associated with that event.

Route URL: `/calendar-event`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Google account)
- `areaid` (The ID of the area that the event is associated with)

## **Discord Route**

This route provides an API endpoint to check if a new Discord message has been received. If there is a new message, it triggers a reaction associated with that event.

Route URL: `/discord-caught-message`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Discord account)
- `areaid` (The ID of the area that the event is associated with)

## **Docs Route**

This route provides an API endpoint to check if a new Google Docs document has been created. If there is a new document, it triggers a reaction associated with that event.

Route URL: `/docs-change`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Google account)
- `areaid` (The ID of the area that the event is associated with)

## **Drive Route**

This route provides an API endpoint to check if the drive change, it triggers a reaction associated with that condition.

Route URL: `/drive-change`

Method: `GET`

Headers:

- `areaid` (The ID of the area that the drive change is associated with)

## **Dropbox Route**

This route provides an API endpoint to check if a specific Dropbox file has been changed. If it has been modified, it triggers a reaction associated with that event.

Route URL: `/change-file`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Dropbox account)
- `areaid` (The ID of the area that the event is associated with)

## **Github Routes**

These routes provide API endpoints to check for specific Slack actions. They trigger reactions associated with these events.

Routes URLs:
  `/github-check-push`
  `/github-new-branch`
  `/github-delete-branch`
  `/github-issues`
  `/github-label`
  `/github-milestones`
  `/github-pull-request`
  `/github-pull-request-reviews`
  `/github-pull-request-comments`
  `/github-release`
  `/github-visibility-changes`
  `/github-issues-comments`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Github account)
- `areaid` (The ID of the area that the event is associated with)

## **Gmail Route**

This route provides an API endpoint to send an email using Gmail.

Route URL: `/send-mail`

Method: `GET`

Headers:

- `areaid` (The ID of the area that the email is associated with)

## **Miro Routes**

These routes provide API endpoints to check for specific Miro actions. They trigger reactions associated with these events.

Routes URLs:
  `/get-board`
  `/get-itemsboard`
  `/get-specificitemsboard`
  `/get-appcarditem`
  `/get-carditem`
  `/get-connectors`
  `/get-specificconnector`
  `/get-documentitem`
  `/get-embeditem`
  `/get-imageitem`
  `/get-shapeitem`
  `/get-stickynoteitem`
  `/get-textitem`
  `/miro-createBoard
  `/miro-deleteItem`
  `/miro-createAppCardItem`
  `/miro-deleteAppCardItem`
  `/miro-createCardItem`
  `/miro-deleteCardItem`
  `/miro-deleteConnector`
  `/miro-createShapeItem`
  `/miro-deleteDocumentItem`
  `/miro-deleteEmbedItem`
  `/miro-deleteImageItem`
  `/miro-deleteShapeItem`
  `/miro-createStickyNoteItem`
  `/miro-deleteStickyNoteItem`
  `/miro-createTextItem`
  `/miro-deleteTextItem`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Miro account)
- `areaid` (The ID of the area that the event is associated with)

## **Reddit Routes**

These routes provide API endpoints to check for specific Reddit actions. They trigger reactions associated with these events.

Routes URLs:
  `/change-sub`
  `/change-comment`
  `/change-upvoted`
  `/change-downvoted`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Reddit account)
- `areaid` (The ID of the area that the event is associated with)

## **Sheet Route**

This route provides an API endpoint to check if a Google Docs sheet has been changed. If it has, it triggers a reaction associated with that event.

Route URL: `/sheet-change`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Google account)
- `areaid` (The ID of the area that the event is associated with)

## **Slack Routes**

These routes provide API endpoints to check for specific Slack actions. They trigger reactions associated with these events.

Routes URLs:
  `/slack-publish-message`
  `/slack-create-conversation`
  `/slack-rename-conversation`
  `/slack-archive-conversation`
  `/slack-react-message`
  `/slack-unarchive-conversation`
  `/slack-delete-message`
  `/slack-update-message`
  `/slack-mark-conversation`
  `/slack-remove-reaction`
  `/slack-set-conversation-topic`
  `/slack-set-conversation-purpose`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Slack account)
- `areaid` (The ID of the area that the event is associated with)

## **Spotify Route**

This route provides an API endpoint to check if a Spotify playlist has been changed. If it has, it triggers a reaction associated with that event.

Route URL: `/change-playlist`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Spotify account)
- `areaid` (The ID of the area that the event is associated with)

## **Twitch Route**

These routes provide API endpoints to check for specific Twitch actions. They trigger reactions associated with these events.

Routes URLs:
  `/check-subcription`
  `/check-change-game`
  `/check-is-live`
  `/check-change-title`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Twitch account)
- `areaid` (The ID of the area that the event is associated with)

## **Weather Route**

This route provides an API endpoint to check if the temperature is below zero. If it is below zero, it triggers a reaction associated with that condition.

Route URL: `/weather-belowzero`

Method: `GET`

Headers:

- `Authorization` (Access token for the user's Google account)
- `areaid` (The ID of the area that the condition is associated with)

## **Youtube Routes**

These routes provide API endpoints to check different Youtube metrics. If the condition metrics are met, it triggers a reaction associated with that event.

Routes URLs:
  `/subscriber-count`
  `/viewer-count`

Method: `GET`

/subscriber-count : check if subscriber count has reached X.
/viewer-count     : check if the viewer count has reached X.

Headers:

- `Authorization` (Access token for the user's Google account)
- `areaid` (The ID of the area that the event is associated with)
