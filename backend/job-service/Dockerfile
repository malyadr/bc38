FROM openjdk:latest
ADD target/job-microservice-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9001
ENTRYPOINT ["java", "-jar", "job-microservice-0.0.1-SNAPSHOT.jar"]