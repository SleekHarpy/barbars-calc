import helmetBerserk from "../../assets/images/things/berserk/helmet-berserk.png";


const helmet = {
    title: `Шлем`,
    thing: `helmet`,
    magicianParams: [`health`, `shield`],
    runes: [`strength`, `energy`, `regeneration`],
};

const helmets = [
    {
        id: 0,
        name: `Шлем Берсерка`,
        icon: helmetBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 48,
            },
            {
                label: `Здоровье`,
                param: `health`,
                value: 72,
            },
            {
                label: `Регенерация`,
                param: `regeneration`,
                value: 24,
            },
        ]
    },
];

export {
    helmet,
    helmets,
};
