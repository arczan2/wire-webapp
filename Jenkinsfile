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
		}
		stage('Test'){
			steps {
				echo 'Testing'
				sh '''
				docker-compose build t-agent
				docker-compose up -d t-agent
				'''
			}
		}
	}
}

