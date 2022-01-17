import shouldersBerserk from '../../assets/images/things/shoulders/shoulders-berserk.png';
import shouldersBerserk2 from '../../assets/images/things/shoulders/shoulders-berserk2.png';
import shouldersGoliath from '../../assets/images/things/shoulders/shoulders-goliath.png';
import shouldersGoliath2 from '../../assets/images/things/shoulders/shoulders-goliath2.png';
import shouldersAtlant from '../../assets/images/things/shoulders/shoulders-atlant.png';
import shouldersAtlant2 from '../../assets/images/things/shoulders/shoulders-atlant2.png';
import shouldersVeteran from '../../assets/images/things/shoulders/shoulders-veteran.png';
import shouldersVeteran2 from '../../assets/images/things/shoulders/shoulders-veteran2.png';
import shouldersGladiator from '../../assets/images/things/shoulders/shoulders-gladiator.png';
import shouldersGladiator2 from '../../assets/images/things/shoulders/shoulders-gladiator2.png';


const shouldersVeteranInit = {
    level: 23,
    sorcerer: [`strength`, `shield`,],
    params: [
        { param: `strength`, value: 24, },
        { param: `health`, value: 48, },
        { param: `energy`, value: 0, },
        { param: `regeneration`, value: 24, },
        { param: `shield`, value: 24, },
    ],
}

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
    {
        id: 2,
        name: `Наплечник Атланта`,
        level: 25,
        icon: shouldersAtlant,
        iconSorcerer: shouldersAtlant2,
        sorcerer: [`strength`, `health`,],
        params: [
            { param: `strength`, value: 18, },
            { param: `health`, value: 48, },
            { param: `energy`, value: 0, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 24, },
        ],
    },
    {
        ...shouldersVeteranInit,
        id: 3,
        name: `Наплечник Ветерана`,
        icon: shouldersVeteran,
        iconSorcerer: shouldersVeteran2,
    },
    {
        ...shouldersVeteranInit,
        id: 4,
        name: `Наплечник Гладиатора`,
        icon: shouldersGladiator,
        iconSorcerer: shouldersGladiator2,
    },
];

export {
    shoulder,
    shoulders,
};
