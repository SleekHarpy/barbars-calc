import capeBerserk from '../../assets/images/things/capes/cape-berserk.png';
import capeBerserk2 from '../../assets/images/things/capes/cape-berserk2.png';
import capeGoliath from '../../assets/images/things/capes/cape-goliath.png';
import capeGoliath2 from '../../assets/images/things/capes/cape-goliath2.png';


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
        level: 25,
        icon: capeBerserk,
        iconSorcerer: capeBerserk2,
        sorcerer: [`health`, `regeneration`,],
        params: [
            { param: `strength`, value: 30, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 24, },
            { param: `shield`, value: 18, },
        ],
    },
    {
        id: 1,
        name: `Накидка Голиафа`,
        level: 25,
        icon: capeGoliath,
        iconSorcerer: capeGoliath2,
        sorcerer: [`strength`, `regeneration`,],
        params: [
            { param: `strength`, value: 24, },
            { param: `health`, value: 30, },
            { param: `energy`, value: 18, },
            { param: `regeneration`, value: 18, },
            { param: `shield`, value: 30, },
        ],
    },
];

export {
    cape,
    capes,
};
