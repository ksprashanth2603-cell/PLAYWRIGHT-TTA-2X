pipeline {
  agent any
  environment {
    CI = 'true'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Install Playwright browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npx playwright test --reporter=list'
      }
    }
    stage('Archive artifacts') {
      steps {
        archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
      }
    }
  }
  post {
    always {
      junit allowEmptyResults: true, testResults: 'playwright-report/**/results-*.xml'
    }
  }
}
