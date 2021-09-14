# Leaderboard-T3M

##### Table of contents
<!-- toc -->

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
  * [Start](#start)
  * [Add points](#add-points)
  * [Add team](#add-team)
  * [Edit team](#edit-team)
  * [Remove team](#remove-team)
  * [Add/edit maison](#add-and-edit-maison)
- [Preview](#preview)
- [Contributing](#contributing)
- [Licenses](#licenses)

<!-- tocstop -->

## About
Leaderboard created for the T3M, managed by the ENSIBS Vannetais BDE team. 

## Installation
Use the package manager [Node.js](https://nodejs.org/) to install [json-server](https://github.com/typicode/json-server).

```bash
git clone https://github.com/mysther78/leaderboard-t3m.git
cd leaderboard-t3m
npm install json-server --save-dev
echo your_secret_token > token
```

## Usage
#### Start
```bash
node server.js
```
Go to http://localhost:3000/


#### Add points
Go to http://localhost:3000/admin.html

#### Add team
```
POST https://leader.entropy.land/equipes/6 
--header "Content-Type: application/json"
--header "Authorization: Api Token {token}" 
--data {
      "name": "Team name",
      "maison": "rah",
      "description": "Équipe",
      "point": 0,
			"id": 21
    }
```

#### Edit team
```
PATCH https://localhost:3000/equipes/{id}
--header "Content-Type: application/json"
--header "Authorization: Api Token {token}" 
--data {
      "name": "Team name",
      "maison": "rah",
      "description": "Équipe",
      "point": 0
    }
```

#### Remove team
```
DELETE https://localhost:3000/equipes/{id}
--header "Content-Type: application/json"
--header "Authorization: Api Token {token}"
```

#### Add and edit maison
Add new image as `{maison_name}.png` in `public/src/`

## Preview

<img height="593" width="400" src="../assets/index.png?raw=true" alt="screenshot of index.html"/>

## Contributing
Pull requests are welcome.

## Licenses
[MIT](https://choosealicense.com/licenses/mit/)
