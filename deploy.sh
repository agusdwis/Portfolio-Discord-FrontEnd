eval "$(ssh-agent -s)" &&
ssh-add -k ~/.ssh/id_rsa &&

source ~/.profile
echo "$DOCKER_PASSWORD" | docker login --username $DOCKER_USERNAME --password-stdin
sudo docker stop discordfe
sudo docker rm discordfe
sudo docker rmi agusdwis17/discord_fe:latest
sudo docker run -d --name discordfe -p 5000:5000 agusdwis17/discord_fe:latest
