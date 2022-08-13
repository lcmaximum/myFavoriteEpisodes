My Favorite Episodes

users share reviews of their favorite episodes of any tv series


## Checklist for application

----- Phase 1: CRUD actions -----

[x] Get login working locally

[x] Implement create functionality in database

[] Implement update functionality (database included)

[] Implement delete functionality

[] Replace hard-coded episodes array with database entries (This is the read portion of CRUD)


[] Hook up login to database

## Checklist for Read functionality

[] swap hard-coded list for db entries
[] Code controller logic
[] Create route

## Checklist for Create functionality

-----Column 1 (browser)-----

-----Column 2 (react)-----

[x] Create episode-api.js file

[x] Create episode-service.js file

[x] Within each of those , create methods needed to POST to /episodes with payload

[x] createEpisode(episodeData) - both in api and service (can copy login() in users-service)

[x] Hook up addEpisode click handler to EpisodesService.createEpisode to POST to express endpoint (ex. EpisodesService.createEpisode())

-----Column 3 (express)-----

[x] create a route in server.js for episodes

[x] create routes/api/episodes.js

[x] Implement controller logic. In episodes controller, modify create function to create a new Episode instead of new User

[x] create Episode Model

-----Column 4 (mongoose)-----

