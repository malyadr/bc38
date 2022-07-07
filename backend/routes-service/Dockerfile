FROM openjdk:latest
ADD target/route-service-0.0.1-SNAPSHOT.jar /tmp
WORKDIR /tmp
EXPOSE 9004
ENTRYPOINT ["java", "-jar", "route-service-0.0.1-SNAPSHOT.jar"]