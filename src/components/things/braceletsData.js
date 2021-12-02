import braceletsBerserk from "../../assets/images/things/berserk/bracelets-berserk.png";


const braceletsOne = {
    title: `Браслет`,
    thing: `bracelets`,
    magicianParams: [`energy`, `health`],
    runes: [`strength`, `shield`, `regeneration`],
};

const bracelets = [
    {
        id: 0,
        name: `Браслет Берсерка`,
        icon: braceletsBerserk,
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
                value: 54,
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
    braceletsOne,
    bracelets,
};
