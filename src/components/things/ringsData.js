import ringBerserk from "../../assets/images/things/berserk/ring-berserk.png";
import ringBerserk2 from "../../assets/images/things/berserk/ring-berserk2.png";


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
];

export {
    ring,
    rings,
};
