import armorBerserk from "../../assets/images/things/berserk/armor-berserk.png";


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
        icon: armorBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 48,
            },
            {
                label: `Энергия`,
                param: `energy`,
                value: 24,
            },
            {
                label: `Броня`,
                param: `shield`,
                value: 72,
            },
        ]
    },
];

export {
    armor,
    armors,
};
