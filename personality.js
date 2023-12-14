const mbtiContent = {
    'ISFP': {
        environmentImage: './environment/ISFP.svg',
        functionImage: './function pic/ISFP.png',
        description: `
            Dominant Function: Introverted Feeling (Fi)
            Auxiliary Function: Extraverted Sensing (Se)
            Tertiary Function: Introverted Intuition (Ni)
            Inferior Function: Extraverted Thinking (Te)
        `,
        mbtiTitle: 'ISFP',
        characterTitle: 'Adventurer',
        introduction: `
            An Adventurer (ISFP) is a person with the Introverted, Observant, Feeling, and Prospecting personality traits. 
            They tend to have open minds, approaching life, new experiences, and people with grounded warmth. 
            Their ability to stay in the moment helps them uncover exciting potentials.
        `
    },
    'ISTP': {
        environmentImage: './environment/ISTP.svg',
        functionImage: './function pic/ISTP.png',
        description: `
            Dominant Function: Introverted Thinking (Ti)
            Auxiliary Function: Extraverted Sensing (Se)
            Tertiary Function: Introverted Intuition (Ni)
            Inferior Function: Extraverted Feeling (Fe)
        `,
        mbtiTitle: 'ISTP',
        characterTitle: 'Virtuoso',
        introduction: `
        A Virtuoso (ISTP) is someone with the Introverted, Observant, Thinking, and Prospecting personality traits. 
        They tend to have an individualistic mindset, pursuing goals without needing much external connection. 
        They engage in life with inquisitiveness and personal skill, varying their approach as needed.
        `
    },
    'ESFP': {
        environmentImage: './environment/ESFP.svg',
        functionImage: './function pic/ESFP.png',
        description: `
            Dominant Function: Extraverted Sensing (Se)
            Auxiliary Function: Introverted Feeling (Fi)
            Tertiary Function: Extraverted Thinking (Te)
            Inferior Function: Introverted Intuition (Ni)
        `,
        mbtiTitle: 'ESFP',
        characterTitle: 'Entertainer',
        introduction: `
        An Entertainer (ESFP) is a person with the Extraverted, Observant, Feeling, and Prospecting personality traits. 
        These people love vibrant experiences, engaging in life eagerly and taking pleasure in discovering the unknown. 
        They can be very social, often encouraging others into shared activities.
        `
    },
    'ESTP': {
        environmentImage: './environment/ESTP.svg',
        functionImage: './function pic/ESTP.png',
        description: `
            Dominant Function: Extraverted Sensing (Se)
            Auxiliary Function: Introverted Thinking (Ti)
            Tertiary Function: Extraverted Feeling (Fe)
            Inferior Function: Introverted Intuition (Ni)
        `,
        mbtiTitle: 'ESTP',
        characterTitle: 'Entrepreneur',
        introduction: `
        An Entrepreneur (ESTP) is someone with the Extraverted, Observant, Thinking, and Prospecting personality traits. 
        They tend to be energetic and action-oriented, deftly navigating whatever is in front of them. 
        They love uncovering life's opportunities, whether socializing with others or in more personal pursuits.
        `
    },
    'INFP': {
        environmentImage: './environment/INFP.svg',
        functionImage: './function pic/INFP.png',
        description: `
            Dominant Function: Introverted Feeling (Fi)
            Auxiliary Function: Extraverted Intuition (Ne)
            Tertiary Function: Introverted Sensing (Si)
            Inferior Function: Extraverted Thinking (Te)
        `,
        mbtiTitle: 'INFP',
        characterTitle: 'Mediator',
        introduction: `
        A Mediator (INFP) is someone who possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits. 
        These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do.
        `
    },
    'INFJ': {
        environmentImage: './environment/INFJ.svg',
        functionImage: './function pic/INFJ.png',
        description: `
            Dominant Function: Introverted Intuition (Ni)
            Auxiliary Function: Extraverted Feeling (Fe)
            Tertiary Function: Introverted Thinking (Ti)
            Inferior Function: Extraverted Sensing (Se)
        `,
        mbtiTitle: 'INFJ',
        characterTitle: 'Advocate',
        introduction: `
        An Advocate (INFJ) is someone with the Introverted, Intuitive, Feeling, and Judging personality traits. 
        They tend to approach life with deep thoughtfulness and imagination. 
        Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things.
        `
    },
    'ENFP': {
        environmentImage: './environment/ENFP.svg',
        functionImage: './function pic/ENFP.png',
        description: `
            Dominant Function: Extraverted Intuition (Ne)
            Auxiliary Function: Introverted Feeling (Fi)
            Tertiary Function: Extraverted Thinking (Te)
            Inferior Function: Introverted Sensing (Si)
        `,
        mbtiTitle: 'ENFP',
        characterTitle: 'Campaigner',
        introduction: `
            A Campaigner (ENFP) is someone with the Extraverted, Intuitive, Feeling, and Prospecting personality traits. 
            These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. 
            Their vibrant energy can flow in many directions.
        `
    },'ENFJ': {
        environmentImage: './environment/ENFJ.svg',
        functionImage: './function pic/ENFJ.png',
        description: `
            Dominant Function: Extraverted Feeling (Fe)
            Auxiliary Function: Introverted Intuition (Ni)
            Tertiary Function: Extraverted Sensing (Se)
            Inferior Function: Introverted Thinking (Ti)
        `,
        mbtiTitle: 'ENFJ',
        characterTitle: 'Protagonist',
        introduction: `
            A Protagonist (ENFJ) is a person with the Extraverted, Intuitive, Feeling, and Judging personality traits. 
            These warm, forthright types love helping others, and they tend to have strong ideas and values. 
            They back their perspective with the creative energy to achieve their goals.
        `
    },'ISFJ': {
        environmentImage: './environment/ISFJ.svg',
        functionImage: './function pic/ISFJ.png',
        description: `
            Dominant Function: Introverted Sensing (Si)
            Auxiliary Function: Extraverted Feeling (Fe)
            Tertiary Function: Introverted Thinking (Ti)
            Inferior Function: Extraverted Intuition (Ne)
        `,
        mbtiTitle: 'ISFJ',
        characterTitle: 'Defender',
        introduction: `
        A Defender (ISFJ) is someone with the Introverted, Observant, Feeling, and Judging personality traits. 
        These people tend to be warm and unassuming in their own steady way. 
        They're efficient and responsible, giving careful attention to practical details in their daily lives.
        `
    },'ISTJ': {
        environmentImage: './environment/ISTJ.svg',
        functionImage: './function pic/ISTJ.png',
        description: `
            Dominant Function: Introverted Sensing (Si)
            Auxiliary Function: Extraverted Thinking (Te)
            Tertiary Function: Introverted Feeling (Fi)
            Inferior Function: Extraverted Intuition (Ne)
        `,
        mbtiTitle: 'ISTJ',
        characterTitle: 'Logistician',
        introduction: `
        A Logistician (ISTJ) is someone with the Introverted, Observant, Thinking, and Judging personality traits. 
        These people tend to be reserved yet willful, with a rational outlook on life. 
        They compose their actions carefully and carry them out with methodical purpose.
        `
    },'ESFJ': {
        environmentImage: './environment/ESFJ.svg',
        functionImage: './function pic/ESFJ.png',
        description: `
            Dominant Function: Introverted Feeling (Fi)
            Auxiliary Function: Extraverted Sensing (Se)
            Tertiary Function: Introverted Intuition (Ni)
            Inferior Function: Extraverted Thinking (Te)
        `,
        mbtiTitle: 'ESFJ',
        characterTitle: 'Consul',
        introduction: `
        A Consul (ESFJ) is a person with the Extraverted, Observant, Feeling, and Judging personality traits. 
        They are attentive and people-focused, and they enjoy taking part in their social community. 
        Their achievements are guided by decisive values, and they willingly offer guidance to others.
        `
    },'ESTJ': {
        environmentImage: './environment/ESTJ.svg',
        functionImage: './function pic/ESTJ.png',
        description: `
            Dominant Function: Extraverted Feeling (Fe)
            Auxiliary Function: Introverted Sensing (Si)
            Tertiary Function: Extraverted Intuition (Ne)
            Inferior Function: Introverted Thinking (Ti)
        `,
        mbtiTitle: 'ESTJ',
        characterTitle: 'Executive',
        introduction: `
        An Executive (ESTJ) is someone with the Extraverted, Observant, Thinking, and Judging personality traits. 
        They possess great fortitude, emphatically following their own sensible judgment. 
        They often serve as a stabilizing force among others, able to offer solid direction amid adversity.
        `
    },'INTP': {
        environmentImage: './environment/INTP.svg',
        functionImage: './function pic/INTP.png',
        description: `
            Dominant Function: Introverted Thinking (Ti)
            Auxiliary Function: Extraverted Intuition (Ne)
            Tertiary Function: Introverted Sensing (Si)
            Inferior Function: Extraverted Feeling (Fe)
        `,
        mbtiTitle: 'INTP',
        characterTitle: 'Logician',
        introduction: `
        A Logician (INTP) is someone with the Introverted, Intuitive, Thinking, and Prospecting personality traits. 
        These flexible thinkers enjoy taking an unconventional approach to many aspects of life. 
        They often seek out unlikely paths, mixing willingness to experiment with personal creativity.
        `
    },'INTJ': {
        environmentImage: './environment/INTJ.svg',
        functionImage: './function pic/INTJ.png',
        description: `
            Dominant Function: Introverted Intuition (Ni)
            Auxiliary Function: Extraverted Thinking (Te)
            Tertiary Function: Introverted Feeling (Fi)
            Inferior Function: Extraverted Sensing (Se)
        `,
        mbtiTitle: 'INTJ',
        characterTitle: 'Architect',
        introduction: `
        An Architect (INTJ) is a person with the Introverted, Intuitive, Thinking, and Judging personality traits. 
        These thoughtful tacticians love perfecting the details of life, applying creativity and rationality to everything they do. 
        Their inner world is often a private, complex one.
        `
    },'ENTP': {
        environmentImage: './environment/ENTP.svg',
        functionImage: './function pic/ENTP.png',
        description: `
            Dominant Function: Extraverted Intuition (Ne)
            Auxiliary Function: Introverted Thinking (Ti)
            Tertiary Function: Extraverted Feeling (Fe)
            Inferior Function: Introverted Sensing (Si)
        `,
        mbtiTitle: 'ENTP',
        characterTitle: 'Debater',
        introduction: `
        A Debater (ENTP) is a person with the Extraverted, Intuitive, Thinking, and Prospecting personality traits. 
        They tend to be bold and creative, deconstructing and rebuilding ideas with great mental agility. 
        They pursue their goals vigorously despite any resistance they might encounter.
        `
    },'ENTJ': {
        environmentImage: './environment/ENTJ.svg',
        functionImage: './function pic/ENTJ.png',
        description: `
            Dominant Function: Extraverted Thinking (Te)
            Auxiliary Function: Introverted Intuition (Ni)
            Tertiary Function: Extraverted Sensing (Se)
            Inferior Function: Introverted Feeling (Fi)
        `,
        mbtiTitle: 'ENTJ',
        characterTitle: 'Commander',
        introduction: `
        A Commander (ENTJ) is someone with the Extraverted, Intuitive, Thinking, and Judging personality traits. 
        They are decisive people who love momentum and accomplishment. 
        They gather information to construct their creative visions but rarely hesitate for long before acting on them.
        `
    },
};

/*
The content in this JavaScript file is from the personality types from 16 Personalities.
Reference: 16 Personalities. (n.d.). Personality Types. 16 Personalities.
URL: https://www.16personalities.com/personality-types
*/



// Export the mbtiContent object
export default mbtiContent;
