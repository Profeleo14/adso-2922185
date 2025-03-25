db.animales.find({tipo:{$eq:"Perro"}})

db.animales.find({Color:{$eq:"Negro"}})

db.animales.find({ 
    $and: [
        { tipo: { $eq: "Perro" } }, 
        { Color: { $eq: "Negro" } }
    ]
});

