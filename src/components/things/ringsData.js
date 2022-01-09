import ringBerserk from '../../assets/images/things/rings/ring-berserk.png';
import ringBerserk2 from '../../assets/images/things/rings/ring-berserk2.png';
import ringGoliath from '../../assets/images/things/rings/ring-goliath.png';
import ringGoliath2 from '../../assets/images/things/rings/ring-goliath2.png';


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
        ]
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
        ]
    },
];

export {
    ring,
    rings,
};
