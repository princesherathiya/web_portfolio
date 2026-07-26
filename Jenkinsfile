pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git 'https://github.com/princesherathiya/web_portfolio.git'
            }
        }

        stage('Test') {
            steps {
                echo 'Running Test Cases...'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                sudo cp -r * /var/www/html/
                sudo systemctl restart nginx
                '''
            }
        }
    }
}
