FILE="/etc/hosts"
if [ -f $FILE ]; then
  echo "File ${FILE} exists"
else
  echo "File ${FILE} does NOT exists"
fi
