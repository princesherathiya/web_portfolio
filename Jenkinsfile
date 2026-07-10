pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Show Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Build Successful') {
            steps {
                echo 'HTML Portfolio Build Successful!'
            }
        }
    }
}