const orphanages = require('./database/fakedata.js')

module.exports = {

    index(request, response){
        const city = request.query.city
        return response.render('index')
    },

    form(request, response){
        return response.render('form')
    },

    orphanages(request, response){
        return response.render('orphanages', {orphanages})
    },

    orphanage(request, response){
        return response.render('orphanage')
    }
}