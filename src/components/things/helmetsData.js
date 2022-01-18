import helmetBerserk from '../../assets/images/things/helmets/helmet-berserk.png';
import helmetBerserk2 from '../../assets/images/things/helmets/helmet-berserk2.png';
import helmetGoliath from '../../assets/images/things/helmets/helmet-goliath.png';
import helmetGoliath2 from '../../assets/images/things/helmets/helmet-goliath2.png';
import helmetAtlant from '../../assets/images/things/helmets/helmet-atlant.png';
import helmetAtlant2 from '../../assets/images/things/helmets/helmet-atlant2.png';
import helmetVeteran from '../../assets/images/things/helmets/helmet-veteran.png';
import helmetVeteran2 from '../../assets/images/things/helmets/helmet-veteran2.png';
import helmetGladiator from '../../assets/images/things/helmets/helmet-gladiator.png';
import helmetGladiator2 from '../../assets/images/things/helmets/helmet-gladiator2.png';
import helmetDedmoroz from '../../assets/images/things/helmets/helmet-dedmoroz.png';


const helmetVeteranInit = {
    level: 25,
    sorcerer: [`strength`, `regeneration`,],
    params: [
        { param: `strength`, value: 0, },
        { param: `health`, value: 96, },
        { param: `energy`, value: 0, },
        { param: `regeneration`, value: 24, },
        { param: `shield`, value: 24, },
    ],
};

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
    {
        id: 1,
        name: `Шлем Голиафа`,
        level: 25,
        icon: helmetGoliath,
        iconSorcerer: helmetGoliath2,
        sorcerer: [`strength`, `regeneration`,],
        params: [
            { param: `strength`, value: 0, },
            { param: `health`, value: 102, },
            { param: `energy`, value: 0, },
            { param: `regeneration`, value: 12, },
            { param: `shield`, value: 30, },
        ],
    },
    {
        id: 2,
        name: `Шлем Атланта`,
        level: 25,
        icon: helmetAtlant,
        iconSorcerer: helmetAtlant2,
        sorcerer: [`strength`, `shield`,],
        params: [
            { param: `strength`, value: 0, },
            { param: `health`, value: 90, },
            { param: `energy`, value: 0, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 18, },
        ],
    },
    {
        ...helmetVeteranInit,
        id: 3,
        name: `Шлем Ветерана`,
        icon: helmetVeteran,
        iconSorcerer: helmetVeteran2,
    },
    {
        ...helmetVeteranInit,
        id: 4,
        name: `Шлем Гладиатора`,
        icon: helmetGladiator,
        iconSorcerer: helmetGladiator2,
    },
    {
        ...helmetVeteranInit,
        id: 5,
        name: `Шапка Дедмороза`,
        icon: helmetDedmoroz,
        iconSorcerer: helmetDedmoroz,
    },
];

export {
    helmet,
    helmets,
};
