import beltBerserk from '../../assets/images/things/belts/belt-berserk.png';
import beltBerserk2 from '../../assets/images/things/belts/belt-berserk2.png';
import beltGoliath from '../../assets/images/things/belts/belt-goliath.png';
import beltGoliath2 from '../../assets/images/things/belts/belt-goliath2.png';
import beltAtlant from '../../assets/images/things/belts/belt-atlant.png';
import beltAtlant2 from '../../assets/images/things/belts/belt-atlant2.png';


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
    {
        id: 1,
        name: `Пояс Голиафа`,
        level: 25,
        icon: beltGoliath,
        iconSorcerer: beltGoliath2,
        sorcerer: [`health`, `regeneration`,],
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
        name: `Пояс Атланта`,
        level: 25,
        icon: beltAtlant,
        iconSorcerer: beltAtlant2,
        sorcerer: [`health`, `shield`,],
        params: [
            { param: `strength`, value: 18, },
            { param: `health`, value: 24, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 24, },
        ],
    },
];

export {
    belt,
    belts,
};
