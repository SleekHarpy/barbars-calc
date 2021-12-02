import capeBerserk from "../../assets/images/things/berserk/cape-berserk.png";


const cape = {
    title: `Накидка`,
    thing: `cape`,
    magicianParams: [`regeneration`, `energy`],
    runes: [`strength`, `health`, `shield`],
};

const capes = [
    {
        id: 0,
        name: `Накидка Берсерка`,
        icon: capeBerserk,
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
    cape,
    capes,
};
