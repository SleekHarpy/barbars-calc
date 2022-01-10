import amuletBerserk from '../../assets/images/things/amulets/amulet-berserk.png';
import amuletBerserk2 from '../../assets/images/things/amulets/amulet-berserk2.png';
import amuletGoliath from '../../assets/images/things/amulets/amulet-goliath.png';
import amuletGoliath2 from '../../assets/images/things/amulets/amulet-goliath2.png';
import amuletAtlant from '../../assets/images/things/amulets/amulet-atlant.png';
import amuletAtlant2 from '../../assets/images/things/amulets/amulet-atlant2.png';
import amuletVeteran from '../../assets/images/things/amulets/amulet-veteran.png';
import amuletVeteran2 from '../../assets/images/things/amulets/amulet-veteran2.png';
import amuletZodiac from '../../assets/images/things/amulets/amulet-zodiac.png';
import amuletZodiac2 from '../../assets/images/things/amulets/amulet-zodiac2.png';


const amuletVeteranInit = {
    level: 24,
    sorcerer: [`strength`, `health`,],
    params: [
        { param: `strength`, value: 24, },
        { param: `health`, value: 0, },
        { param: `energy`, value: 96, },
        { param: `regeneration`, value: 24, },
        { param: `shield`, value: 0, },
    ],
};


const amulet = {
    title: `Амулет`,
    thing: `amulet`,
    magicianParams: [`health`, `energy`],
    runes: [`strength`, `shield`, `regeneration`],
};

const amulets = [
    {
        id: 0,
        name: `Амулет Берсерка`,
        level: 25,
        icon: amuletBerserk,
        iconSorcerer: amuletBerserk2,
        sorcerer: [`health`, `regeneration`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 96, },
            { param: `regeneration`, value: 18, },
            { param: `shield`, value: 0, },
        ],
    },
    {
        id: 1,
        name: `Амулет Голиафа`,
        level: 25,
        icon: amuletGoliath,
        iconSorcerer: amuletGoliath2,
        sorcerer: [`strength`, `energy`,],
        params: [
            { param: `strength`, value: 24, },
            { param: `health`, value: 45, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 45, },
        ],
    },
    {
        id: 2,
        name: `Амулет Атланта`,
        level: 25,
        icon: amuletAtlant,
        iconSorcerer: amuletAtlant2,
        sorcerer: [`strength`, `health`,],
        params: [
            { param: `strength`, value: 18, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 96, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 0, },
        ],
    },
    {
        ...amuletVeteranInit,
        id: 3,
        name: `Амулет Ветерана`,
        icon: amuletVeteran,
        iconSorcerer: amuletVeteran2,
    },
    {
        id: 4,
        name: `Амулет Зодиака`,
        level: 25,
        icon: amuletZodiac,
        iconSorcerer: amuletZodiac2,
        sorcerer: [`shield`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 105, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 0, },
        ],
    },
];

export {
    amulet,
    amulets,
};
