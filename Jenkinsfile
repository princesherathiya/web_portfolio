node {
    stage('Checkout') {
        checkout scm
    }
    stage('Show Files') {
        bat 'dir'
    }
    stage('Verify Files') {

        if (!fileExists('index.html')) {
            error("index.html not found")
        }
        if (!fileExists('style.css')) {
            error("style.css not found")
        }

        if (!fileExists('script.js')) {
            error("script.js not found")
        }

        echo "All files found."
    }

    stage('Build Successful') {
        echo "Portfolio Build Successful!"
    }

}