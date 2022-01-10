import armorBerserk from '../../assets/images/things/armors/armor-berserk.png';
import armorBerserk2 from '../../assets/images/things/armors/armor-berserk2.png';
import armorGoliath from '../../assets/images/things/armors/armor-goliath.png';
import armorGoliath2 from '../../assets/images/things/armors/armor-goliath2.png';
import armorAtlant from '../../assets/images/things/armors/armor-atlant.png';
import armorAtlant2 from '../../assets/images/things/armors/armor-atlant2.png';
import armorVeteran from '../../assets/images/things/armors/armor-veteran.png';
import armorVeteran2 from '../../assets/images/things/armors/armor-veteran2.png';


const armorVeteranInit = {
    level: 25,
    sorcerer: [`strength`, `regeneration`,],
    params: [
        { param: `strength`, value: 24, },
        { param: `health`, value: 24, },
        { param: `energy`, value: 0, },
        { param: `regeneration`, value: 0, },
        { param: `shield`, value: 96, },
    ],
};

const armor = {
    title: `Броня`,
    thing: `armor`,
    magicianParams: [`energy`, `shield`],
    runes: [`strength`, `health`, `regeneration`],
};

const armors = [
    {
        id: 0,
        name: `Кольчуга Берсерка`,
        level: 25,
        icon: armorBerserk,
        iconSorcerer: armorBerserk2,
        sorcerer: [`health`, `energy`,],
        params: [
            { param: `strength`, value: 48, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 72, },
        ],
    },
    {
        id: 1,
        name: `Кираса Голиафа`,
        level: 25,
        icon: armorGoliath,
        iconSorcerer: armorGoliath2,
        sorcerer: [`health`, `energy`,],
        params: [
            { param: `strength`, value: 12, },
            { param: `health`, value: 30, },
            { param: `energy`, value: 0, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 102, },
        ],
    },
    {
        id: 2,
        name: `Кираса Атланта`,
        level: 25,
        icon: armorAtlant,
        iconSorcerer: armorAtlant2,
        sorcerer: [`strength`, `health`,],
        params: [
            { param: `strength`, value: 18, },
            { param: `health`, value: 24, },
            { param: `energy`, value: 0, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 72, },
        ],
    },
    {
        ...armorVeteranInit,
        id: 3,
        name: `Кираса Ветерана`,
        level: 25,
        icon: armorVeteran,
        iconSorcerer: armorVeteran2,
    },
];

export {
    armor,
    armors,
};
