import shoesBerserk from '../../assets/images/things/shoes/shoes-berserk.png';
import shoesBerserk2 from '../../assets/images/things/shoes/shoes-berserk2.png';
import shoesGoliath from '../../assets/images/things/shoes/shoes-goliath.png';
import shoesGoliath2 from '../../assets/images/things/shoes/shoes-goliath2.png';
import shoesAtlant from '../../assets/images/things/shoes/shoes-atlant.png';
import shoesAtlant2 from '../../assets/images/things/shoes/shoes-atlant2.png';
import shoesVeteran from '../../assets/images/things/shoes/shoes-veteran.png';
import shoesVeteran2 from '../../assets/images/things/shoes/shoes-veteran2.png';
import shoesGladiator from '../../assets/images/things/shoes/shoes-gladiator.png';
import shoesGladiator2 from '../../assets/images/things/shoes/shoes-gladiator2.png';


const shoesVeteranInit = {
    level: 25,
    sorcerer: [`health`, `shield`,],
    params: [
        { param: `strength`, value: 24, },
        { param: `health`, value: 24, },
        { param: `energy`, value: 48, },
        { param: `regeneration`, value: 0, },
        { param: `shield`, value: 24, },
    ],
};

const shoesOne = {
    title: `Обувь`,
    thing: `shoes`,
    magicianParams: [`energy`, `strength`],
    runes: [`health`, `shield`, `regeneration`],
};

const shoes = [
    {
        id: 0,
        name: `Сапоги Берсерка`,
        level: 25,
        icon: shoesBerserk,
        iconSorcerer: shoesBerserk2,
        sorcerer: [`health`, `shield`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 54, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 18, },
        ],
    },
    {
        id: 1,
        name: `Сапоги Голиафа`,
        level: 25,
        icon: shoesGoliath,
        iconSorcerer: shoesGoliath2,
        sorcerer: [`strength`, `energy`,],
        params: [
            { param: `strength`, value: 24, },
            { param: `health`, value: 30, },
            { param: `energy`, value: 17, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 48, },
        ],
    },
    {
        id: 2,
        name: `Сапоги Атланта`,
        level: 25,
        icon: shoesAtlant,
        iconSorcerer: shoesAtlant2,
        sorcerer: [`health`, `shield`,],
        params: [
            { param: `strength`, value: 18, },
            { param: `health`, value: 24, },
            { param: `energy`, value: 54, },
            { param: `regeneration`, value: 0, },
            { param: `shield`, value: 24, },
        ],
    },
    {
        ...shoesVeteranInit,
        id: 3,
        name: `Сапоги Ветерана`,
        icon: shoesVeteran,
        iconSorcerer: shoesVeteran2,
    },
    {
        ...shoesVeteranInit,
        id: 4,
        name: `Сапоги Гладиатора`,
        icon: shoesGladiator,
        iconSorcerer: shoesGladiator2,
    },
];

export {
    shoesOne,
    shoes,
};
