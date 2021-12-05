import capeBerserk from "../../assets/images/things/berserk/cape-berserk.png";
import capeBerserk2 from "../../assets/images/things/berserk/cape-berserk2.png";


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
];

export {
    cape,
    capes,
};
