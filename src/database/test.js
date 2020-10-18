const Database = require('./db')

Database.then(async db =>{
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            openning_hours,
            open_on_weekends
        ) VALUES (
            "-27.5746501",
            "-48.5384149",
            "Lar dos Meninos",
            "Olaaaa",
            "99999999",
            "https://images.unsplash.com/photo-1598137203972-e8cb7fc24345?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e carinho para dar.",
            "Horário de visita das 8h até as 18h",
            "1"
        );
    `)
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log(orphanage)
})