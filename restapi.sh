url="http://192.168.206.224:2000/automoveis"

curl -H  "Content-Type: application/json" -X POST -d '{"balance": 100, "name":"caixa"}' ${url}
echo ""
