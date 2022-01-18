import capeBerserk from '../../assets/images/things/capes/cape-berserk.png';
import capeBerserk2 from '../../assets/images/things/capes/cape-berserk2.png';
import capeGoliath from '../../assets/images/things/capes/cape-goliath.png';
import capeGoliath2 from '../../assets/images/things/capes/cape-goliath2.png';
import capeAtlant from '../../assets/images/things/capes/cape-atlant.png';
import capeAtlant2 from '../../assets/images/things/capes/cape-atlant2.png';
import capeVeteran from '../../assets/images/things/capes/cape-veteran.png';
import capeVeteran2 from '../../assets/images/things/capes/cape-veteran2.png';
import capeGladiator from '../../assets/images/things/capes/cape-gladiator.png';
import capeGladiator2 from '../../assets/images/things/capes/cape-gladiator2.png';
import capeDedmoroz from '../../assets/images/things/capes/cape-dedmoroz.png';


const capeVeteranInit = {
    level: 21,
    sorcerer: [`health`, `energy`,],
    params: [
        { param: `strength`, value: 24, },
        { param: `health`, value: 24, },
        { param: `energy`, value: 24, },
        { param: `regeneration`, value: 24, },
        { param: `shield`, value: 24, },
    ],
};

const cape = {
    title: `Накидка`,
    thing: `cape`,
    magicianParams: [`regeneration`, `energy`],
    runes: [`strength`, `health`, `shield`],
};

const capes = [
    {
        id: 0,
        name: `Накидка Берсерка`,
        level: 25,
        icon: capeBerserk,
        iconSorcerer: capeBerserk2,
        sorcerer: [`health`, `regeneration`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 24, },
            { param: `shield`, value: 18, },
        ],
    },
    {
        id: 1,
        name: `Накидка Голиафа`,
        level: 25,
        icon: capeGoliath,
        iconSorcerer: capeGoliath2,
        sorcerer: [`strength`, `regeneration`,],
        params: [
            { param: `strength`, value: 24, },
            { param: `health`, value: 30, },
            { param: `energy`, value: 18, },
            { param: `regeneration`, value: 18, },
            { param: `shield`, value: 30, },
        ],
    },
    {
        id: 2,
        name: `Накидка Атланта`,
        level: 25,
        icon: capeAtlant,
        iconSorcerer: capeAtlant2,
        sorcerer: [`health`, `shield`,],
        params: [
            { param: `strength`, value: 18, },
            { param: `health`, value: 24, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 24, },
        ],
    },
    {
        ...capeVeteranInit,
        id: 3,
        name: `Бурка Ветерана`,
        level: 25,
        icon: capeVeteran,
        iconSorcerer: capeVeteran2,
    },
    {
        ...capeVeteranInit,
        id: 4,
        name: `Бурка Гладиатора`,
        level: 25,
        icon: capeGladiator,
        iconSorcerer: capeGladiator2,
    },
    {
        ...capeVeteranInit,
        id: 5,
        name: `Мешок Дедмороза`,
        level: 25,
        icon: capeDedmoroz,
        iconSorcerer: capeDedmoroz,
    },
];

export {
    cape,
    capes,
};
