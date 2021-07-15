// vue.config.js
module.exports = {
  lintOnSave: 'warning',
  // publicPath: './'
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs-userlist-app/'
    : '/'
}
