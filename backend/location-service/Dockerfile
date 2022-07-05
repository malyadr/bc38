FROM openjdk:latest
ADD target/location-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9006
ENTRYPOINT ["java", "-jar", "location-service-0.0.1-SNAPSHOT.jar"]