pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS=credentials('malyadr')
    }
    stages {
        stage('Docker Build') {
          steps {
            sh "cd backend/appliedjobs-service ; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/applyjenkins:latest ."
            sh "cd backend/cloud-gateway ; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/cloudjenkins:latest . "
            sh "cd backend/job-service; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/jobjenkins:latest . "
            sh "cd backend/location-service; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/locationjenkins:latest . "
            sh "cd backend/routes-service ; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/routesjenkins:latest ."
            sh "cd backend/savedjobs-service ; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/savedjobsjenkins:latest . "
            sh "cd backend/service-registry ; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/servicejenkins:latest ."
            sh "cd backend/skills-service ; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/skillsjenkins:latest ."
           

      }
    }
        stage('Docker push') {
          steps {
            sh  "echo $DOCKERHUB_CREDENTIALS_PSW | docker login ghcr.io -u $DOCKERHUB_CREDENTIALS_USR --password-stdin"
            sh "docker push  ghcr.io/malyadr/applyjenkins:latest"
            sh "docker push ghcr.io/malyadr/cloudjenkins:latest"
            sh "docker push ghcr.io/malyadr/jobjenkins:latest"
            sh "docker push ghcr.io/malyadr/locationjenkins:latest"
            sh "docker push ghcr.io/malyadr/routesjenkins:latest"
            sh "docker push ghcr.io/malyadr/savedjobsjenkins:latest"
            sh "docker push ghcr.io/malyadr/servicejenkins:latest"
            sh "docker push ghcr.io/malyadr/skillsjenkins:latest"
           
            
            
      }
    }
        stage('Deploy ec2') {
          steps {
            sshagent(['ec2instance']) {
            sh "ssh -o StrictHostKeyChecking=no ubuntu@ec2-3-145-33-6.us-east-2.compute.amazonaws.com" 
            sh "docker-compose up "
            
      }
    }

//   } 
//         stage('Deploy to eks') {
//           steps {
//             script{
//               sh 'kubectl apply -f frontend/mockserver.yaml'
//             }
            
//       }
//     }
//  }  
   }
 }
}