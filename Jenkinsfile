pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS=credentials('malyadr')
    }
    stages {
        stage('Docker Build') {
          steps {
            sh "cd frontend ; ls ; docker build --file Dockerfile -t ghcr.io/malyadr/mock:latest ."
      }
    }
        stage('Docker push') {
          steps {
            sh  "echo $DOCKERHUB_CREDENTIALS_PSW | docker login ghcr.io -u $DOCKERHUB_CREDENTIALS_USR --password-stdin; docker push ghcr.io/malyadr/mock:latest"
            
      }
    }
        stage('Deploy to eks') {
          steps {
            script{
              sh 'kubectl apply -f mockserver.yaml'
            }
            
      }
    }
 }  
} 