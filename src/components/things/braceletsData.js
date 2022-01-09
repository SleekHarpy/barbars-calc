import braceletsBerserk from '../../assets/images/things/bracelets/bracelets-berserk.png';
import braceletsBerserk2 from '../../assets/images/things/bracelets/bracelets-berserk2.png';
import braceletsGoliath from '../../assets/images/things/bracelets/bracelets-goliath.png';
import braceletsGoliath2 from '../../assets/images/things/bracelets/bracelets-goliath2.png';
import braceletsAtlant from '../../assets/images/things/bracelets/bracelets-atlant.png';
import braceletsAtlant2 from '../../assets/images/things/bracelets/bracelets-atlant2.png';


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
    {
        id: 1,
        name: `Браслет Голиафа`,
        level: 25,
        icon: braceletsGoliath,
        iconSorcerer: braceletsGoliath2,
        sorcerer: [`energy`, `regeneration`,],
        params: [
            { param: `strength`, value: 0, },
            { param: `health`, value: 30, },
            { param: `energy`, value: 24, },
            { param: `regeneration`, value: 36, },
            { param: `shield`, value: 30, },
        ],
    },
    {
        id: 2,
        name: `Браслет Атланта`,
        level: 25,
        icon: braceletsAtlant,
        iconSorcerer: braceletsAtlant2,
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
