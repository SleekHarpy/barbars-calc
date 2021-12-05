import glovesBerserk from "../../assets/images/things/berserk/gloves-berserk.png";
import glovesBerserk2 from "../../assets/images/things/berserk/gloves-berserk2.png";


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
        level: 25,
        icon: glovesBerserk,
        iconSorcerer: glovesBerserk2,
        sorcerer: [`regeneration`, `shield`,],
        params: [
            { param: `strength`, value: 54, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 24, },
            { param: `shield`, value: 18, },
        ],
    },
];

export {
    glovesOne,
    gloves,
};
