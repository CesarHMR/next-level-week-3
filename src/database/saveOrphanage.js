function saveOrphanage(db, orphanage){
    return db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        openning_hours,
        open_on_weekends,
        facebook,
        instagram,
        twitter
    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.openning_hours}",
        "${orphanage.open_on_weekends}",
        "${orphanage.facebook}",
        "${orphanage.instagram}",
        "${orphanage.twitter}"
        );
    `);
}

module.exports = saveOrphanage;