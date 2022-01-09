import pantsBerserk from '../../assets/images/things/pants/pants-berserk.png';
import pantsBerserk2 from '../../assets/images/things/pants/pants-berserk2.png';
import pantsGoliath from '../../assets/images/things/pants/pants-goliath.png';
import pantsGoliath2 from '../../assets/images/things/pants/pants-goliath2.png';
import pantsAtlant from '../../assets/images/things/pants/pants-atlant.png';
import pantsAtlant2 from '../../assets/images/things/pants/pants-atlant2.png';


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
    {
        id: 1,
        name: `Поножи Голиафа`,
        level: 25,
        icon: pantsGoliath,
        iconSorcerer: pantsGoliath2,
        sorcerer: [`strength`, `shield`,],
        params: [
            { param: `strength`, value: 24, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 18, },
            { param: `shield`, value: 54, },
        ],
    },
    {
        id: 2,
        name: `Штаны Атланта`,
        level: 25,
        icon: pantsAtlant,
        iconSorcerer: pantsAtlant2,
        sorcerer: [`strength`, `shield`,],
        params: [
            { param: `strength`, value: 18, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 48, },
        ],
    },
];

export {
    pantsOne,
    pants,
};
