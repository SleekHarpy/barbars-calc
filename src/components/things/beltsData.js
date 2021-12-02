import beltBerserk from "../../assets/images/things/berserk/belt-berserk.png";


const belt = {
    title: `Пояс`,
    thing: `belt`,
    magicianParams: [`strength`, `health`],
    runes: [`shield`, `energy`, `regeneration`],
};

const belts = [
    {
        id: 0,
        name: `Пояс Берсерка`,
        icon: beltBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 30,
            },
            {
                label: `Здоровье`,
                param: `health`,
                value: 18,
            },
            {
                label: `Энергия`,
                param: `energy`,
                value: 30,
            },
            {
                label: `Регенерация`,
                param: `regeneration`,
                value: 24,
            },
            {
                label: `Броня`,
                param: `shield`,
                value: 18,
            },
        ]
    },
];

export {
    belt,
    belts,
};
