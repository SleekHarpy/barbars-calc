import weaponBerserk from '../../assets/images/things/weapons/weapon-berserk.png';
import weaponBerserk2 from '../../assets/images/things/weapons/weapon-berserk2.png';
import weaponGoliath from '../../assets/images/things/weapons/weapon-goliath.png';
import weaponGoliath2 from '../../assets/images/things/weapons/weapon-goliath2.png';
import weaponAtlant from '../../assets/images/things/weapons/weapon-atlant.png';
import weaponAtlant2 from '../../assets/images/things/weapons/weapon-atlant2.png';


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
    {
        id: 1,
        name: `Копьё Голиафа`,
        level: 25,
        icon: weaponGoliath,
        iconSorcerer: weaponGoliath2,
        sorcerer: [`energy`, `regeneration`,],
        params: [
            { param: `strength`, value: 96, },
            { param: `health`, value: 30, },
            { param: `energy`, value: 18, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 0, },
        ],
    },
    {
        id: 2,
        name: `Посох Атланта`,
        level: 25,
        icon: weaponAtlant,
        iconSorcerer: weaponAtlant2,
        sorcerer: [`strength`, `shield`,],
        params: [
            { param: `strength`, value: 72, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 48, },
            { param: `shield`, value: 0, },
        ],
    },
];

export {
    weapon,
    weapons,
};
