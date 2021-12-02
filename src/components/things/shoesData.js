import shoesBerserk from "../../assets/images/things/berserk/shoes-berserk.png";


const shoesOne = {
    title: `Обувь`,
    thing: `shoes`,
    magicianParams: [`energy`, `strength`],
    runes: [`health`, `shield`, `regeneration`],
};

const shoes = [
    {
        id: 0,
        name: `Сапоги Берсерка`,
        icon: shoesBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 30,
            },
            {
                label: `Здоровье`,
                param: `health`,
                value: 18,
            },
            {
                label: `Энергия`,
                param: `energy`,
                value: 54,
            },
            {
                label: `Броня`,
                param: `shield`,
                value: 18,
            },
        ]
    },
];

export {
    shoesOne,
    shoes,
};
