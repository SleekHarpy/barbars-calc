import ringBerserk from '../../assets/images/things/rings/ring-berserk.png';
import ringBerserk2 from '../../assets/images/things/rings/ring-berserk2.png';
import ringGoliath from '../../assets/images/things/rings/ring-goliath.png';
import ringGoliath2 from '../../assets/images/things/rings/ring-goliath2.png';
import ringAtlant from '../../assets/images/things/rings/ring-atlant.png';
import ringAtlant2 from '../../assets/images/things/rings/ring-atlant2.png';
import ringVeteran from '../../assets/images/things/rings/ring-veteran.png';
import ringVeteran2 from '../../assets/images/things/rings/ring-veteran2.png';
import ringNemesis from '../../assets/images/things/rings/ring-nemesis.png';
import ringNemesis2 from '../../assets/images/things/rings/ring-nemesis2.png';


const ringVeteranInit = {
    level: 24,
    sorcerer: [`strength`, `energy`,],
    params: [
        { param: `strength`, value: 0, },
        { param: `health`, value: 24, },
        { param: `energy`, value: 24, },
        { param: `regeneration`, value: 96, },
        { param: `shield`, value: 0, },
    ],
};

const ring = {
    title: `Кольцо`,
    thing: `ring`,
    magicianParams: [`regeneration`, `strength`],
    runes: [`health`, `shield`, `energy`],
};

const rings = [
    {
        id: 0,
        name: `Перстень Берсерка`,
        level: 25,
        icon: ringBerserk,
        iconSorcerer: ringBerserk2,
        sorcerer: [`strength`, `health`,],
        params: [
            { param: `strength`, value: 0, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 96, },
            { param: `shield`, value: 0, },
        ],
    },
    {
        id: 1,
        name: `Перстень Голиафа`,
        level: 25,
        icon: ringGoliath,
        iconSorcerer: ringGoliath2,
        sorcerer: [`strength`, `energy`,],
        params: [
            { param: `strength`, value: 0, },
            { param: `health`, value: 48, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 72, },
            { param: `shield`, value: 0, },
        ],
    },
    {
        id: 2,
        name: `Перстень Атланта`,
        level: 25,
        icon: ringAtlant,
        iconSorcerer: ringAtlant2,
        sorcerer: [`strength`, `health`,],
        params: [
            { param: `strength`, value: 0, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 102, },
            { param: `shield`, value: 0, },
        ],
    },
    {
        ...ringVeteranInit,
        id: 3,
        name: `Кольцо Ветерана`,
        icon: ringVeteran,
        iconSorcerer: ringVeteran2,
    },
    {
        id: 4,
        name: `Кольцо Немезиды`,
        level: 25,
        icon: ringNemesis,
        iconSorcerer: ringNemesis2,
        sorcerer: [`shield`,],
        params: [
            { param: `strength`, value: 0, },
            { param: `health`, value: 20, },
            { param: `energy`, value: 48, },
            { param: `regeneration`, value: 105, },
            { param: `shield`, value: 0, },
        ]
    },
];

export {
    ring,
    rings,
};
