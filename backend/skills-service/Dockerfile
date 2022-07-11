FROM openjdk:latest
ADD target/skills-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9005
ENTRYPOINT ["java", "-jar", "skills-service-0.0.1-SNAPSHOT.jar"]