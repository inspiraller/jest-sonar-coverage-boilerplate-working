# How to set up sonar to work with jest

## pre-requisites:
- node & npm
- java
- cmder or powershell or git bash or equivalent terminal

## Download sonarqube server
https://www.sonarqube.org/downloads/
sonarqub3 7.1

## Run server - as administrator via cmder or powershell or git bash
C:\baps\sonar\sonarqube-7.1\bin\windows-x86-32\StartSonar.bat

### Troubleshoot cant find server/
go to java dir and duplicate client/ as server/

## open window browser
localhost:9000

## login:
- user: admin
- pwd: admin

## add token
experiment

## select -
- other js
- windows

## add project
experiment

## copy properties needed from command line
```
sonar-scanner.bat -Dsonar.projectKey=experiment -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=b31e38900133da2fabf9d06861cca8965ce1ee6b
```
## create sonar-project.properties local to your project:
```
sonar.projectKey=experiment
sonar.host.url=http://localhost:9000
sonar.login=b31e38900133da2fabf9d06861cca8965ce1ee6b
sonar.projectName=experiment

sonar.tests=./specs/
sonar.sources=./src/
sonar.testExecutionReportPaths=./reports/test-reporter.xml
sonar.javascript.lcov.reportPaths=./coverage/lcov.info
```

## add this project now into a git repo, otherwise sonarqube scanner will give blame error messages and may not work
```
$ git init
$ git add .
$ git commit -m"my updated sonar-project.properties file and other stuff"
```
## run npm dependencies
$ npm install

## run tests  
$ npm run test

# Allow firewall and antivirus to let sonar-scanner run
note: it will depend on your sonar-project.properties to work

## open sonarqube server in browser
localhost:9000
make sure you can see visible unit tests and coverage with a percentage greater than zero.

# complete !

For instructions - look at bare minimum package.json file
