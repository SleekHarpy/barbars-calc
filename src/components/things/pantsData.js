import pantsBerserk from "../../assets/images/things/berserk/pants-berserk.png";
import pantsBerserk2 from "../../assets/images/things/berserk/pants-berserk2.png";


const pantsOne = {
    title: `Штаны`,
    thing: `pants`,
    magicianParams: [`shield`, `regeneration`],
    runes: [`strength`, `health`, `regeneration`],
};

const pants = [
    {
        id: 0,
        name: `Штаны Берсерка`,
        level: 25,
        icon: pantsBerserk,
        iconSorcerer: pantsBerserk2,
        sorcerer: [`regeneration`, `shield`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 18, },
            { param: `shield`, value: 48, },
        ],
    },
];

export {
    pantsOne,
    pants,
};
