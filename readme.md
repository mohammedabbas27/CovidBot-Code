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
npm build-test
```

To compile the code for for dev environments...

```sh
npm build-dev
```

To compile the code for for both dev and prod/test environments...

```sh
npm build-both
```

## Directory Structure

| Directory | Purpose                                                |
| --------- | ------------------------------------------------------ |
| dist      | Contains the code post compiling                       |
| src/dev   | Contains the Javascript used for dev environment       |
| src/test  | Contains the Javascript used for prod/test environment |

## Variables

| Variable          | Purpose                  |
| ----------------- | ------------------------ |
| CHATBOT_ICON_PATH | Path to the chatbot icon |
| API_END_POINT     | Path to rasa endpoint    |
