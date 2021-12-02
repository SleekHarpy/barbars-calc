import amuletBerserk from "../../assets/images/things/berserk/amulet-berserk.png";


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
        icon: amuletBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 30,
            },
            {
                label: `Энергия`,
                param: `energy`,
                value: 96,
            },
            {
                label: `Регенерация`,
                param: `regeneration`,
                value: 18,
            },
        ]
    },
];

export {
    amulet,
    amulets,
};
