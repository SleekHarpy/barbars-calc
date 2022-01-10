import braceletBerserk from '../../assets/images/things/bracelets/bracelet-berserk.png';
import braceletBerserk2 from '../../assets/images/things/bracelets/bracelet-berserk2.png';
import braceletGoliath from '../../assets/images/things/bracelets/bracelet-goliath.png';
import braceletGoliath2 from '../../assets/images/things/bracelets/bracelet-goliath2.png';
import braceletAtlant from '../../assets/images/things/bracelets/bracelet-atlant.png';
import braceletAtlant2 from '../../assets/images/things/bracelets/bracelet-atlant2.png';
import braceletVeteran from '../../assets/images/things/bracelets/bracelet-veteran.png';
import braceletVeteran2 from '../../assets/images/things/bracelets/bracelet-veteran2.png';


const braceletVeteranInit = {
    level: 23,
    sorcerer: [`health`, `energy`,],
    params: [
        { param: `strength`, value: 0, },
        { param: `health`, value: 24, },
        { param: `energy`, value: 24, },
        { param: `regeneration`, value: 48, },
        { param: `shield`, value: 24, },
    ],
};

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
        icon: braceletBerserk,
        iconSorcerer: braceletBerserk2,
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
        icon: braceletGoliath,
        iconSorcerer: braceletGoliath2,
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
        icon: braceletAtlant,
        iconSorcerer: braceletAtlant2,
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
        ...braceletVeteranInit,
        id: 3,
        name: `Браслет Ветерана`,
        icon: braceletVeteran,
        iconSorcerer: braceletVeteran2,
    },
];

export {
    braceletsOne,
    bracelets,
};
