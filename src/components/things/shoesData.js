import shoesBerserk from '../../assets/images/things/shoes/shoes-berserk.png';
import shoesBerserk2 from '../../assets/images/things/shoes/shoes-berserk2.png';
import shoesGoliath from '../../assets/images/things/shoes/shoes-goliath.png';
import shoesGoliath2 from '../../assets/images/things/shoes/shoes-goliath2.png';


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
];

export {
    shoesOne,
    shoes,
};
