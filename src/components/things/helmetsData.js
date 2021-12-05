import helmetBerserk from "../../assets/images/things/berserk/helmet-berserk.png";
import helmetBerserk2 from "../../assets/images/things/berserk/helmet-berserk2.png";


const helmet = {
    title: `Шлем`,
    thing: `helmet`,
    magicianParams: [`health`, `shield`],
    runes: [`strength`, `energy`, `regeneration`],
};

const helmets = [
    {
        id: 0,
        name: `Шлем Берсерка`,
        level: 25,
        icon: helmetBerserk,
        iconSorcerer: helmetBerserk2,
        sorcerer: [`regeneration`, `shield`,],
        params: [
            { param: `strength`, value: 48, },
            { param: `health`, value: 72, },
            { param: `energy`, value: 0, },
            { param: `regeneration`, value: 24, },
            { param: `shield`, value: 0, },
        ],
    },
];

export {
    helmet,
    helmets,
};
