function tampilMotor() {
    var motor = {
        merk: "Honda",
        tipe: "Vario Techno",
        warna: "Candy Red",
        cc: 150
    }
    for (var x in motor) {
        console.log(motor[x])
    }
}

tampilMotor();