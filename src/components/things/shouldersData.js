import shouldersBerserk from '../../assets/images/things/shoulders/shoulders-berserk.png';
import shouldersBerserk2 from '../../assets/images/things/shoulders/shoulders-berserk2.png';
import shouldersGoliath from '../../assets/images/things/shoulders/shoulders-goliath.png';
import shouldersGoliath2 from '../../assets/images/things/shoulders/shoulders-goliath2.png';


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
    {
        id: 1,
        name: `Наплечник Голиафа`,
        level: 25,
        icon: shouldersGoliath,
        iconSorcerer: shouldersGoliath2,
        sorcerer: [`strength`, `regeneration`,],
        params: [
            { param: `strength`, value: 24, },
            { param: `health`, value: 54, },
            { param: `energy`, value: 0, },
            { param: `regeneration`, value: 12, },
            { param: `shield`, value: 30, },
        ],
    },
];

export {
    shoulder,
    shoulders,
};
