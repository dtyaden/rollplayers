export key="~/.ssh/linode"
export target="dtyaden@45.56.67.151"
export targetFile="rollplayers.tar.gz"
export unzippedFile="rollplayers"
serverPath="~/dist/rollplayers"
skipBuild=$1
echo $1
if [[ $skipBuild != "skipBuild" ]]; then
	ng build --prod
fi

tar -zcvf rollplayers.tar.gz dist/rollplayers
scp -i $key ./rollplayers.tar.gz $target:~/

command="tar -zxvf $targetFile"
fullCommand="ssh -i $key $target '$command'"
fullCommand="$fullCommand"

ssh -i "$key" "$target" $command
startServer="sudo nohup http-server -p 80 $serverPath"

moveCommand="mv $serverPath/index.html $serverPath/404.html"

shutdown="if pgrep http-server; then sudo pkill http-serv;fi"
ssh -i "$key" "$target" "$shutdown"
ssh -i "$key" "$target" "$moveCommand"
ssh -i "$key" "$target" "$startServer > nohup.out 2>&1 &"
#ssh -i "$key" "$target" 'nohup http-server ~/dist/rollplayers > nohup.out &'
