pipeline{
	agent any
	stages{
		stage('Build'){
			steps {
				echo 'Building'
				sh '''
				docker-compose build b-agent
				'''
			}
			post {
				failure {
					echo 'Building failed!'
				}
				success {
					echo 'Building successed!'
				}
			}
		}
		stage('Test'){
			steps {
				echo 'Testing'
				sh '''
				docker-compose build t-agent
				docker-compose up -d t-agent
				'''
			}
			post {
				failure {
					echo 'Testing failed!'
				}
				success {
					echo 'Testing successed!'
				}
			}
		}
	}
}

