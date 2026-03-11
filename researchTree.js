const researchTree = {
    tiers: [
        {
            level: 1,
            technologies: [
                { id: 'basic-resources', name: 'Basic Resources', unlocked: true },
                { id: 'improved-tools', name: 'Improved Tools', unlocked: false }
            ],
            unlockChain: ['basic-resources'],
        },
        {
            level: 2,
            technologies: [
                { id: 'advanced-tools', name: 'Advanced Tools', unlocked: false },
                { id: 'electricity', name: 'Electricity', unlocked: false }
            ],
            unlockChain: ['improved-tools'],
        },
        {
            level: 3,
            technologies: [
                { id: 'robotics', name: 'Robotics', unlocked: false },
                { id: 'nano-tech', name: 'Nanotechnology', unlocked: false }
            ],
            unlockChain: ['advanced-tools', 'electricity'],
        },
        {
            level: 4,
            technologies: [
                { id: 'artificial-intelligence', name: 'Artificial Intelligence', unlocked: false },
                { id: 'space-exploration', name: 'Space Exploration', unlocked: false }
            ],
            unlockChain: ['robotics', 'nano-tech'],
        }
    ],
    unlock: function(teckID) {
        for (const tier of this.tiers) {
            for (const tech of tier.technologies) {
                if (tech.id === teckID) {
                    tech.unlocked = true;
                    break;
                }
            }
        }
    }
};

export default researchTree;