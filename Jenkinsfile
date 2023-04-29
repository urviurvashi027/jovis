pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Check out the pull request branch
                checkout([$class: 'GitSCM', branches: [[name: '*/${env.CHANGE_TARGET}']], 
                        doGenerateSubmoduleConfigurations: false, 
                        extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'source']], 
                        submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/urviurvashi027/jovis.git']]])
            }
        }
        stage('Build') {
            steps {
                // Run any necessary build steps here
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // Run any necessary test steps here
                sh 'npm run test'
            }
        }
    }

    post {
        always {
            // Report build status back to GitHub
            script {
                def status = currentBuild.result == 'SUCCESS' ? 'success' : 'failure'
                def github = githubUtils.newBuilder().withCredentials('<your-GitHub-access-token>').build()
                github.createCommitStatus('<your-username>/<your-repository>', env.CHANGE_TARGET, status)
            }
        }
    }
}