pipeline {
    agent any 
    tools{
        dockerTool "docker"
    }  
    environment {
        DOCKERHUB_CREDENTIALS=credentials('malyadr')
    }
    stages {
        stage('Docker Build') {
          steps {
            sh "cd backend/appliedjobs-service ; ls ;  docker build --file Dockerfile -t ghcr.io/malyadr/applyjenkins:latest ."
            sh "cd backend/cloud-gateway ; ls ; sudo docker build --file Dockerfile -t ghcr.io/malyadr/cloudjenkins:latest . "
            sh "cd backend/job-service; ls ;sudo docker build --file Dockerfile -t ghcr.io/malyadr/jobjenkins:latest . "
            sh "cd backend/location-service; ls ; sudo docker build --file Dockerfile -t ghcr.io/malyadr/locationjenkins:latest . "
            sh "cd backend/routes-service ; ls ; sudo docker build --file Dockerfile -t ghcr.io/malyadr/routesjenkins:latest ."
            sh "cd backend/savedjobs-service ; ls ; sudo docker build --file Dockerfile -t ghcr.io/malyadr/savedjobsjenkins:latest . "
            sh "cd backend/service-registry ; ls ; sudo docker build --file Dockerfile -t ghcr.io/malyadr/servicejenkins:latest ."
            sh "cd backend/skills-service ; ls ; sudo docker build --file Dockerfile -t ghcr.io/malyadr/skillsjenkins:latest ."
           

      }
    }
        stage('Docker push') {
          steps {
            sh  "echo $DOCKERHUB_CREDENTIALS_PSW | sudo docker login ghcr.io -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
            sh "sudo docker push  ghcr.io/malyadr/applyjenkins:latest"
            sh "sudo docker push ghcr.io/malyadr/cloudjenkins:latest"
            sh "sudo docker push ghcr.io/malyadr/jobjenkins:latest"
            sh "sudo docker push ghcr.io/malyadr/locationjenkins:latest"
            sh "sudo docker push ghcr.io/malyadr/routesjenkins:latest"
            sh "sudo docker push ghcr.io/malyadr/savedjobsjenkins:latest"
            sh "sudo docker push ghcr.io/malyadr/servicejenkins:latest"
            sh "sudo docker push ghcr.io/malyadr/skillsjenkins:latest"
           
            
            
      }
    }
  //       stage('Deploy ec2') {
  //         steps {
  //           sshagent(['ec2instance']) {
  //           sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-3-145-33-6.us-east-2.compute.amazonaws.com; sudo docker-compose up -d"
            
  //     }
  //   }

  // } 
       
 }  
}
 

