import amuletBerserk from "../../assets/images/things/berserk/amulet-berserk.png";
import amuletBerserk2 from "../../assets/images/things/berserk/amulet-berserk2.png";


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
];

export {
    amulet,
    amulets,
};
