pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git 'https://github.com/Js21007/DevOps_Pract_Project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t smart-resume-builder .'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker stop resume-app || exit 0'
                bat 'docker rm resume-app || exit 0'
                bat 'docker run -d -p 8080:80 --name resume-app smart-resume-builder'
            }
        }
    }
}