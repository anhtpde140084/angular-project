Angular project

- Deploy VPS step:

1. Remote to VM
2. sudo apt update
3. sudo apt install nginx
4. Use WinSCP upload file to root/var/www/html (Setting winscp...)
5. sudo service nginx restart

Fix 404:

sudo nano /etc/nginx/sites-available/default

config at location -> try_files $uri $uri/ /index.html -> Press Ctrl 0 to save or Ctrl X to exit
