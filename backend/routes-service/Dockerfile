FROM openjdk:latest
ADD target/routes-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9004
ENTRYPOINT ["java", "-jar", "routes-service-0.0.1-SNAPSHOT.jar"]