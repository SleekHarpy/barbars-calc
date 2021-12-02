import ringBerserk from "../../assets/images/things/berserk/ring-berserk.png";


const ring = {
    title: `Кольцо`,
    thing: `ring`,
    magicianParams: [`regeneration`, `strength`],
    runes: [`health`, `shield`, `energy`],
};

const rings = [
    {
        id: 0,
        name: `Перстень Берсерка`,
        icon: ringBerserk,
        params: [
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
                value: 96,
            },
        ]
    },
];

export {
    ring,
    rings,
};
