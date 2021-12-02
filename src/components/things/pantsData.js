import pantsBerserk from "../../assets/images/things/berserk/pants-berserk.png";


const pantsOne = {
    title: `Штаны`,
    thing: `pants`,
    magicianParams: [`shield`, `regeneration`],
    runes: [`strength`, `health`, `regeneration`],
};

const pants = [
    {
        id: 0,
        name: `Штаны Берсерка`,
        icon: pantsBerserk,
        params: [
            {
                label: `Сила`,
                param: `strength`,
                value: 30,
            },
            {
                label: `Энергия`,
                param: `energy`,
                value: 24,
            },
            {
                label: `Регенерация`,
                param: `regeneration`,
                value: 18,
            },
            {
                label: `Броня`,
                param: `shield`,
                value: 48,
            },
        ]
    },
];

export {
    pantsOne,
    pants,
};
