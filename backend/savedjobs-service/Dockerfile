FROM openjdk:latest
ADD target/savedjobs-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9002
ENTRYPOINT ["java", "-jar", "savedjobs-service-0.0.1-SNAPSHOT.jar"]