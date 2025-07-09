pipeline {
    agent any

    stages {
        stages ('Build Docker Image') {
              steps {
                sh 'echo "Executando o comando Docker Build"'
            }
        }

        stages ('Push Docker Image') {
                steps {
                  sh 'echo "Executando o comando Docker Push"'
              }
          }

        stages ('Deploy no Kubernetes') {
                steps {
                  sh 'echo "Executando o comando Kubernetes apply"'
              }
          }
        
    }
}
