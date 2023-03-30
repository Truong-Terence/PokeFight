export default class Pokemon {
    
    constructor(name, poke_id, height, weight, type, pv, pv_max, atq1, atq2) {
        this.name = name;
        this.poke_id = poke_id;
        this.height = height; // cm
        this.weight = weight; // kg
        this.type = type;
        this.pv = pv;
        this.pv_max = pv_max;
        this.atq1 = atq1;
        this.atq2 = atq2;
    }  
    
    attack(opponent) {
        let attackOut = ""
        let crit = criticalHit()
        if (this.pv < 0.2 * this.pv_max) {
            // Uses atq2
            let atq = this.atq2.label
            let dmg_dealt = this.atq2.dmg
            if (crit) {
                dmg_dealt += dmg_dealt
                opponent.pv -= dmg_dealt
                attackOut += (`<p>CRIT</p>`)
            } else {
                opponent.pv -= dmg_dealt
            }
            attackOut += (`<p>${this.name} attack ${opponent.name} with ${atq}. ${opponent.name} took ${dmg_dealt}</p>`)
        } else {
            // Uses atq1
            let atq = this.atq1.label
            let dmg_dealt = this.atq1.dmg
            if (crit) {
                dmg_dealt += dmg_dealt
                opponent.pv -= dmg_dealt
                attackOut += (`<p>CRIT</p>`)
            } else {
                opponent.pv -= dmg_dealt
            }
            attackOut += (`<p>${this.name} attack ${opponent.name} with ${atq}. ${opponent.name} took ${dmg_dealt}</p>`)
        }
        attackOut += (`<p>${opponent.name} is now at ${opponent.pv}</p>`)
        return attackOut
    }
}

function getRandomCrit() {
    return Math.floor(Math.random() * 10);
}

function criticalHit() {
    let criticalChance = getRandomCrit()
    let doCrit = false
    if (criticalChance == 7) {
        doCrit = true
    }
    return doCrit
} 