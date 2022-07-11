FROM openjdk:latest
ADD target/appliedjobs-service-0.0.1-SNAPSHOT.jar  /tmp
WORKDIR /tmp
EXPOSE 9003
ENTRYPOINT ["java", "-jar", "appliedjobs-service-0.0.1-SNAPSHOT.jar"]
