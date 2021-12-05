import weaponBerserk from "../../assets/images/things/berserk/weapon-berserk.png";
import weaponBerserk2 from "../../assets/images/things/berserk/weapon-berserk2.png";


const weapon = {
    title: `Оружие`,
    thing: `weapon`,
    magicianParams: [`strength`, `regeneration`],
    runes: [`health`, `shield`, `energy`],
};

const weapons = [
    {
        id: 0,
        name: `Топор Берсерка`,
        level: 25,
        icon: weaponBerserk,
        iconSorcerer: weaponBerserk2,
        sorcerer: [`health`, `regeneration`,],
        params: [
            { param: `strength`, value: 102, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 0, },
        ],
    },
];

export {
    weapon,
    weapons,
};
