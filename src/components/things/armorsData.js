import armorBerserk from '../../assets/images/things/armors/armor-berserk.png';
import armorBerserk2 from '../../assets/images/things/armors/armor-berserk2.png';
import armorGoliath from '../../assets/images/things/armors/armor-goliath.png';
import armorGoliath2 from '../../assets/images/things/armors/armor-goliath2.png';


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
];

export {
    armor,
    armors,
};
