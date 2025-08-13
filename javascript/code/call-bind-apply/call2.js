let name = {
    firstName: "Rutul",
    lastName: "Amin",
};

let name2 = {
    firstName: "Elon",
    lastName: "Musk",
};

let printFullName = function (city, state, country) {
    console.log(
        this.firstName +
            " " +
            this.lastName +
            " from " +
            city +
            " in " +
            state +
            ", " +
            country
    );
};

printFullName.call(name);

printFullName.call(name2, "Fremont", "California", "USA");
