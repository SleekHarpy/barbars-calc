import beltBerserk from "../../assets/images/things/berserk/belt-berserk.png";
import beltBerserk2 from "../../assets/images/things/berserk/belt-berserk2.png";


const belt = {
    title: `Пояс`,
    thing: `belt`,
    magicianParams: [`strength`, `health`],
    runes: [`shield`, `energy`, `regeneration`],
};

const belts = [
    {
        id: 0,
        name: `Пояс Берсерка`,
        level: 25,
        icon: beltBerserk,
        iconSorcerer: beltBerserk2,
        sorcerer: [`health`, `regeneration`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 24, },
            { param: `shield`, value: 18, },
        ],
    },
];

export {
    belt,
    belts,
};
