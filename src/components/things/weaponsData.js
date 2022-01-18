import weaponBerserk from '../../assets/images/things/weapons/weapon-berserk.png';
import weaponBerserk2 from '../../assets/images/things/weapons/weapon-berserk2.png';
import weaponGoliath from '../../assets/images/things/weapons/weapon-goliath.png';
import weaponGoliath2 from '../../assets/images/things/weapons/weapon-goliath2.png';
import weaponAtlant from '../../assets/images/things/weapons/weapon-atlant.png';
import weaponAtlant2 from '../../assets/images/things/weapons/weapon-atlant2.png';
import weaponVeteran from '../../assets/images/things/weapons/weapon-veteran.png';
import weaponVeteran2 from '../../assets/images/things/weapons/weapon-veteran2.png';
import weaponGladiator from '../../assets/images/things/weapons/weapon-gladiator.png';
import weaponGladiator2 from '../../assets/images/things/weapons/weapon-gladiator2.png';
import weaponDedmoroz from '../../assets/images/things/weapons/weapon-dedmoroz.png';
import weaponDragon from '../../assets/images/things/weapons/weapon-dragon.png';
import weaponDragon2 from '../../assets/images/things/weapons/weapon-dragon2.png';
import weaponGiant from '../../assets/images/things/weapons/weapon-giant.png';
import weaponGiant2 from '../../assets/images/things/weapons/weapon-giant2.png';


const weaponVeteranInit = {
    level: 25,
    sorcerer: [`health`, `shield`,],
    params: [
        { param: `strength`, value: 96, },
        { param: `health`, value: 24, },
        { param: `energy`, value: 24, },
        { param: `regeneration`, value: 0, },
        { param: `shield`, value: 0, },
    ],
}

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
    {
        ...weaponVeteranInit,
        id: 3,
        name: `Молот Ветерана`,
        icon: weaponVeteran,
        iconSorcerer: weaponVeteran2,
    },
    {
        ...weaponVeteranInit,
        id: 4,
        name: `Меч Гладиатора`,
        icon: weaponGladiator,
        iconSorcerer: weaponGladiator2,
    },
    {
        ...weaponVeteranInit,
        id: 5,
        name: `Палка Дедмороза`,
        icon: weaponDedmoroz,
        iconSorcerer: weaponDedmoroz,
    },
    {
        id: 6,
        name: `Коготь Дракона`,
        level: 25,
        icon: weaponDragon,
        iconSorcerer: weaponDragon2,
        sorcerer: [`regeneration`,],
        params: [
            { param: `strength`, value: 105, },
            { param: `health`, value: 20, },
            { param: `energy`, value: 20, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 30, },
        ],
    },
    {
        id: 7,
        name: `Дубина Великана`,
        level: 25,
        icon: weaponGiant,
        iconSorcerer: weaponGiant2,
        sorcerer: [`strength`,],
        params: [
            { param: `strength`, value: 102, },
            { param: `health`, value: 28, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 0, },
        ],
    },
];

export {
    weapon,
    weapons,
};
