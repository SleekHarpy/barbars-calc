import braceletsBerserk from "../../assets/images/things/berserk/bracelets-berserk.png";
import braceletsBerserk2 from "../../assets/images/things/berserk/bracelets-berserk2.png";


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
        level: 25,
        icon: braceletsBerserk,
        iconSorcerer: braceletsBerserk2,
        sorcerer: [`health`, `shield`,],
        params: [
            { param: `strength`, value: 0, },
            { param: `health`, value: 18, },
            { param: `energy`, value: 30, },
            { param: `regeneration`, value: 54, },
            { param: `shield`, value: 18, },
        ],
    },
];

export {
    braceletsOne,
    bracelets,
};
