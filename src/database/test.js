const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db =>{
    /*await saveOrphanage(db,{
        lat:"-27.5907193",
        lng:"-48.5384149",
        name: "Lar das Ciranças",
        about: "Presta assistência a crianças de todas as idades.",
        whatsapp: "(48)99999-9999",
        images: ["https://s2.glbimg.com/WpmBvZZRHmk1Y3hPwq4KHVNuXbA=/e.glbimg.com/og/ed/f/original/2018/12/18/winner_nian-wang.jpg"].toString(),
        instructions: "Traga todo seu amor para dar.",
        openning_hours: "Horário de visita das 10h até as 16h",
        open_on_weekends: "0",
        facebook: "https://www.facebook.com/",
        instagram: "",
        twitter: ""
    }
)*/
    //consultar a tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente um orfanato da tabela
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)

    //remover um orfanato
    //console.log(await db.run('DELETE FROM orphanages WHERE id = 14'))
})