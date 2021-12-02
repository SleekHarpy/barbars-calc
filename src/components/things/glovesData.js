import glovesBerserk from "../../assets/images/things/berserk/gloves-berserk.png";


const glovesOne = {
    title: `Перчатки`,
    thing: `gloves`,
    magicianParams: [`strength`, `shield`],
    runes: [`health`, `energy`, `regeneration`],
};

const gloves = [
    {
        id: 0,
        name: `Перчатки Берсерка`,
        icon: glovesBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 54,
            },
            {
                label: `Энергия`,
                param: `energy`,
                value: 24,
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
    glovesOne,
    gloves,
};
