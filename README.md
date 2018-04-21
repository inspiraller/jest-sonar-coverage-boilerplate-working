# How to set up sonar

## download server
https://www.sonarqube.org/downloads/
sonarqub3 7.1

## download scanner
https://docs.sonarqube.org/display/SCAN/Analyzing+with+SonarQube+Scanner
windows 64 bit

## run server
C:\baps\sonar\sonarqube-7.1\bin\windows-x86-32\StartSonar.bat

### troubleshoot cant find server/
go to java dir and duplicate client/ as server/

## open window browser
localhost:9000

## login:
user: admin
pwd: admin

## add token
experiment

## select -
- other js
- windows

## add project
experiment

## copy generated command line
```
sonar-scanner.bat -Dsonar.projectKey=experiment -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=b31e38900133da2fabf9d06861cca8965ce1ee6b
```

## note: to change destination of project for sonar to test - update
```
-Dsonar.projectBaseDir=../../somepathorAbsoluteToProject
```

## create sonar-project.properties file
sonar-project.properties
```

```

# Allow firewall and antivirus to let sonar-scanner run
note: it will depend on your sonar-project.properties to work

# troubleshoot errors running jest or sonar - ensure you have bound this to version control = ie git

# make sure sonarqube server is running
C:\baps\sonar\sonarqube-7.1\bin\windows-x86-32\StartSonar.bat and run terminal as administrator
