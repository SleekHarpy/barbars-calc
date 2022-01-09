import amuletBerserk from '../../assets/images/things/amulets/amulet-berserk.png';
import amuletBerserk2 from '../../assets/images/things/amulets/amulet-berserk2.png';
import amuletGoliath from '../../assets/images/things/amulets/amulet-goliath.png';
import amuletGoliath2 from '../../assets/images/things/amulets/amulet-goliath2.png';


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
        sorcerer: [ `health`, `regeneration`,],
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
        sorcerer: [ `strength`, `energy`,],
        params: [
            { param: `strength`, value: 24, },
            { param: `health`, value: 45, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 45, },
        ],
    },
];

export {
    amulet,
    amulets,
};
