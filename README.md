# URL Shortener new

The URL Shortener CLI Tool is a command-line interface (CLI) application that allows you to shorten URLs using the CleanURI API and store them in a PostgreSQL database. It provides commands to generate shortened URLs and list all previously shortened URLs.


## Command: shorten

Use the `shorten` command to shorten a URL.

```shell
 <name > <command > <url>
```

Replace `<url>` with the long URL that you want to shorten.

Example:

```shell
 url shortener new shorten https://www.example.com
 ```
 ### command: list

 Do same as for the shorten command.

 #### Installation

1. Clone the repository.
2. Run `npm install `
3. In the project directory, for global installation, run `npm install -g .`

 ## API

The API i used in this project for the URL shortening is the `cleanurl API`
You can visit their site at (https://cleanuri.com/docs) to know more about their API.
