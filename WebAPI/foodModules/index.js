const
     config = require('./config'),
     superagent = require('superagent')

const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => JSON.parse(response.text))
        .catch(error => error.response.body)
}

exports.search = (searchparameter) => {
    return _fetch(`search?key=${config.apikey}&q=${searchparameter}`)
}

exports.get = (recipeid) => {
	return _fetch(`get?key=${config.apikey}&rId=${recipeid}`)
}
