import weaponBerserk from "../../assets/images/things/berserk/weapon-berserk.png";


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
        icon: weaponBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 102,
            },
            {
                label: `Здоровье`,
                param: `health`,
                value: 18,
            },
            {
                label: `Энергия`,
                param: `energy`,
                value: 24,
            },
        ]
    },
];

export {
    weapon,
    weapons,
};
