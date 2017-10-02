# Example Express.js Service

_An Express.js server for Cloudflare App services._

## Local Setup

### Requirements

- Node 7.0.0+
- [Cloudflare account](https://www.cloudflare.com/a/sign-up)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Usage

- `npm install`: Install dependencies
- `npm start`: Start server
- `npm test`: Test routes
- `npm lint`: Lint project

## Cloudflare Service Configuration

After signing in with Cloudflare account,
[create a new service](https://www.cloudflare.com/apps/services/new) with the following configuration.

| Field                    | Value                                              |
|--------------------------|----------------------------------------------------|
| OAuth Authentication URL | https://accounts.example.com/authorize             |
| OAuth Client ID          | _Fetch from 3rd party OAuth configuration_         |
| OAuth Scope              | [your desired scopes]                              |
| OAuth Token URL          | https://accounts.example.com/api/token             |
| OAuth Client Secret      | _Fetch from 3rd party OAuth configuration_         |
| Metadata Endpoint        | https://yourservicedomain.com/account-metadata     |
