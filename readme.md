## Covid-19 Chatbot

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Instructions to compile the javscript code using babel to support old browsers

## Requirement

- Requires Node js installed on the machine (Mandatory)
- Use VS-Code Prefferably (Optional)
- Download the extention live-server on vs-code for testing purposes (Optional)

## Installation

Download the code as zip or clone it using the following git command:

```sh
git clone https://github.com/mohammedabbas27/CovidBot-Code.git
```

Install the dependencies and devDependencies.

```sh
npm i
```

To compile the code for production environments...

```sh
npm build-prod
```

To compile the code for for stage environments...

```sh
npm build-stage
```

To compile the code for for dev environments...

```sh
npm build-dev
```

To compile the code for for dev, stage and prod environments...

```sh
npm build-all
```

## Directory Structure

| Directory | Purpose                                            |
| --------- | -------------------------------------------------- |
| dist      | Contains the code post compiling                   |
| src/prod  | Contains the Javascript used for prod environment  |
| src/stage | Contains the Javascript used for stage environment |
| src/dev   | Contains the Javascript used for dev environment   |

## Variables

| Variable          | Purpose                  |
| ----------------- | ------------------------ |
| CHATBOT_ICON_PATH | Path to the chatbot icon |
| API_END_POINT     | Path to rasa endpoint    |
