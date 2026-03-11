class AscensionSystem {
    constructor() {
        this.prestigePoints = 0;
        this.ascensionLevel = 0;
        this.upgrades = [];
        this.multiplier = 1;
    }

    reset() {
        this.prestigePoints += this.calculatePrestigePoints();
        this.ascensionLevel++;
        this.upgrades = [];
    }

    calculatePrestigePoints() {
        return Math.floor(Math.pow(2, this.ascensionLevel)); // Example calculation
    }

    addUpgrade(upgrade) {
        this.upgrades.push(upgrade);
    }

    getMultipliers() {
        let baseMultiplier = 1.5;
        this.upgrades.forEach(upgrade => {
            baseMultiplier *= upgrade.effect;
        });
        return baseMultiplier;
    }

    applyAscension() {
        this.multiplier = this.getMultipliers();
        this.reset();
    }
}