const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
    await saveOrphanage(db,{
        lat:"-27.5907193",
        lng:"-48.5384149",
        name: "Lar dos Meninos ",
        about: "Presta assistência a crianças.",
        whatsapp: "(48)99999-9999",
        images: ["https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1595295413110-3304e36b564f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Traga todo seu amor.",
        openning_hours: "Horário de visita das 10h até as 16h",
        open_on_weekends: "0",
        facebook: "aaaa",
        instagram: "bbbb",
        twitter: "cccc"
    }
)
    //consultar a tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    //consultar somente um orfanato da tabela
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    //remover um orfanato
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "2"'))
})