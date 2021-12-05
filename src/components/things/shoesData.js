import shoesBerserk from "../../assets/images/things/berserk/shoes-berserk.png";
import shoesBerserk2 from "../../assets/images/things/berserk/shoes-berserk2.png";


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
        level: 25,
        icon: shoesBerserk,
        iconSorcerer: shoesBerserk2,
        sorcerer: [`health`, `shield`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 54, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 18, },
        ],
    },
];

export {
    shoesOne,
    shoes,
};
