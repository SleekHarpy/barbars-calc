import glovesBerserk from '../../assets/images/things/gloves/gloves-berserk.png';
import glovesBerserk2 from '../../assets/images/things/gloves/gloves-berserk2.png';
import glovesGoliath from '../../assets/images/things/gloves/gloves-goliath.png';
import glovesGoliath2 from '../../assets/images/things/gloves/gloves-goliath2.png';
import glovesAtlant from '../../assets/images/things/gloves/gloves-atlant.png';
import glovesAtlant2 from '../../assets/images/things/gloves/gloves-atlant2.png';
import glovesVeteran from '../../assets/images/things/gloves/gloves-veteran.png';
import glovesVeteran2 from '../../assets/images/things/gloves/gloves-veteran2.png';
import glovesGladiator from '../../assets/images/things/gloves/gloves-gladiator.png';
import glovesGladiator2 from '../../assets/images/things/gloves/gloves-gladiator2.png';


const glovesVeteranInit = {
    level: 23,
    sorcerer: [`regeneration`, `shield`,],
    params: [
        { param: `strength`, value: 48, },
        { param: `health`, value: 0, },
        { param: `energy`, value: 24, },
        { param: `regeneration`, value: 24, },
        { param: `shield`, value: 24, },
    ],
};

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
    {
        id: 2,
        name: `Перчатки Атланта`,
        level: 25,
        icon: glovesAtlant,
        iconSorcerer: glovesAtlant2,
        sorcerer: [`strength`, `shield`,],
        params: [
            { param: `strength`, value: 36, },
            { param: `health`, value: 0, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 30, },
            { param: `shield`, value: 24, },
        ],
    },
    {
        ...glovesVeteranInit,
        id: 3,
        name: `Наручи Ветерана`,
        icon: glovesVeteran,
        iconSorcerer: glovesVeteran2,
    },
    {
        ...glovesVeteranInit,
        id: 4,
        name: `Наручи Гладиатора`,
        icon: glovesGladiator,
        iconSorcerer: glovesGladiator2,
    },
];

export {
    glovesOne,
    gloves,
};
