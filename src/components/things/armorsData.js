import armorBerserk from "../../assets/images/things/berserk/armor-berserk.png";
import armorBerserk2 from "../../assets/images/things/berserk/armor-berserk2.png";


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
];

export {
    armor,
    armors,
};
