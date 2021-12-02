import shouldersBerserk from "../../assets/images/things/berserk/shoulders-berserk.png";


const shoulder = {
    title: `Наплечники`,
    thing: `shoulders`,
    magicianParams: [`health`, `regeneration`],
    runes: [`strength`, `shield`, `energy`],
};

const shoulders = [
    {
        id: 0,
        name: `Наплечники Берсерка`,
        icon: shouldersBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 30,
            },
            {
                label: `Здоровье`,
                param: `health`,
                value: 48,
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
    shoulder,
    shoulders,
};
