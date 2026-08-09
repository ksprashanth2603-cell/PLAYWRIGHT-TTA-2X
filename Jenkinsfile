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
        bat 'npm ci'
      }
    }
    stage('Install Playwright browsers') {
      steps {
        bat 'npx playwright install --with-deps'
      }
    }
    stage('Run tests') {
      steps {
        bat 'npx playwright test'
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
      publishHTML(target: [
        allowMissing: true,
        alwaysLinkToLastBuild: true,
        keepAll: true,
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Report'
      ])
    }
  }
}