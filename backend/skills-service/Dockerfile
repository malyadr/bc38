FROM openjdk:latest
ADD target/skill-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9005
ENTRYPOINT ["java", "-jar", "skill-service-0.0.1-SNAPSHOT.jar"]