import glovesBerserk from '../../assets/images/things/gloves/gloves-berserk.png';
import glovesBerserk2 from '../../assets/images/things/gloves/gloves-berserk2.png';
import glovesGoliath from '../../assets/images/things/gloves/gloves-goliath.png';
import glovesGoliath2 from '../../assets/images/things/gloves/gloves-goliath2.png';


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
    {
        id: 1,
        name: `Наручи Голиафа`,
        level: 25,
        icon: glovesGoliath,
        iconSorcerer: glovesGoliath2,
        sorcerer: [`energy`, `regeneration`,],
        params: [
            { param: `strength`, value: 48, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 18, },
            { param: `shield`, value: 30, },
        ],
    },
];

export {
    glovesOne,
    gloves,
};
