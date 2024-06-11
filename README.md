
# Back-end Setup (Server)
## Flask
### 1. python pre-req
python 3
pip

### 2. virtual environment activation
~~~
pip3 install virtualenv
virtualenv env
source env/bin/activate
~~~
### 3. Flask install
~~~
pip3 install flask
~~~
# Front-end Setup (Client)
## React.JS

### 1. npm installation pre-req
~~~
sudo npm install -g npm@10.8.1
~~~
### 2. react app init
~~~ 
npx create-react-app frontend
~~~
### 3. install react router dom
~~~ 
npm install react-router-dom
~~~
### 4. install axios
~~~ 
npm install axios
~~~

### react app connection with server
> add "proxy": "http://127.0.0.1:5000" in package.json

### set up reference:
https://www.youtube.com/watch?v=7LNl2JlZKHA