import shouldersBerserk from "../../assets/images/things/berserk/shoulders-berserk.png";
import shouldersBerserk2 from "../../assets/images/things/berserk/shoulders-berserk2.png";


const shoulder = {
    title: `Наплечники`,
    thing: `shoulders`,
    magicianParams: [`health`, `regeneration`],
    runes: [`strength`, `shield`, `energy`],
};

const shoulders = [
    {
        id: 0,
        name: `Наплечник Берсерка`,
        level: 25,
        icon: shouldersBerserk,
        iconSorcerer: shouldersBerserk2,
        sorcerer: [`regeneration`, `shield`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 48, },
            { param: `energy`, value: 0, },
            { param: `regeneration`, value: 24, },
            { param: `shield`, value: 18, },
        ],
    },
];

export {
    shoulder,
    shoulders,
};
