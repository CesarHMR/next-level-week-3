const Database = require('./database/db')
const saveOrphanage = require('./database/saveOrphanage')

module.exports = {

    index(request, response){
        const city = request.query.city
        return response.render('index')
    },

    form(request, response){
        return response.render('form')
    },

    async orphanages(request, response){
        try{
            const db = await Database
            const orphanages = await db.all("SELECT * FROM orphanages")
            return response.render('orphanages', {orphanages})
        }
        catch(error){
            console.log(error)
            return response.send('ERRO NO BANCO DE DAODS!')
        }
    },

    async orphanage(request, response){
        const id = request.query.id
        try{
            const db  = await Database;
            const result = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`)
            const orphanage = result[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.mainImage = orphanage.images[0]
            orphanage.open = orphanage.open_on_weekends == "0"? false : true;
            orphanage.face = orphanage.facebook == ""?false:true;
            orphanage.insta = orphanage.instagram == ""?false:true;
            orphanage.twi = orphanage.twitter == ""?false:true;
            
            return response.render('orphanage', {orphanage})
        }
        catch(error){
            console.log(error)
            return response.send('ERRO NO BANCO DE DADOS!')
        }
    },

    async saveOrphanage(request,response){
        const fields = request.body
        console.log(fields)
        try{
            const db = await Database
            await saveOrphanage(db,{
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                openning_hours: fields.openning_hours,
                open_on_weekends: fields.open_on_weekends,
                facebook: fields.facebook,
                instagram: fields.instagram,
                twitter: fields.twitter,
            })

            return response.redirect('/orphanages')
        }
        catch(error){
            console.log(error)
            return response.send("ERRO NO BANCO DE DADOS")
        }
    }
}