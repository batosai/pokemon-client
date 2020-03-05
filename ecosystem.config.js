module.exports = {
  apps : [{
    name: 'client',
    script: 'npm',
    args: 'start',

    instances: 4,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '51.15.201.158',
      ref  : 'origin/master',
      repo : 'git@github.com:batosai/pokemon-client.git',
      path : '/app/client',
      'post-deploy' : 'npm install && npx pm2 reload ecosystem.config.js --env production'
    }
  }
};
