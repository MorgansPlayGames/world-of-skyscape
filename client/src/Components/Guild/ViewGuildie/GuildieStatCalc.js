import React from "react";

function GuildieStatCalc(props) {
  let selectedGuildie = props.selectedGuildie;
  let level = expTable(selectedGuildie.experience);
  let race = selectedGuildie.race;
  let str = strCalc(race, level);
  let agi = agiCalc(race, level);
  let stam = stamCalc(race, level);
  let int = intCalc(race, level);
  let spi = spiCalc(race, level);
  let maxHp = maxHpCalc(level, stam);
  let armor = armorCalc(agi);
  let meleeAp = calcMeleeAp(str, agi);
  let meleeCrit = calcMeleeCrit(agi);
  let meleeSpeed = calcMeleeSpeed();
  let meleeMinDamage = calcMeleeMinDamage(meleeAp, meleeSpeed);
  let meleeMaxDamage = calcMeleeMaxDamage(meleeAp, meleeSpeed);
  let meleeDps = calcMeleeDps(meleeMinDamage, meleeMaxDamage, meleeSpeed);
  let dodgeChance = calcDodge(agi);
  let midigation = calcMidigation(level, armor)

  return (
    <div>
      <h3>Basic Info</h3>
      <p>Level: {level}</p>
      <p>Race: {race}</p>
      <p>Max HP: {maxHp}</p>
      
      <h3>Stats</h3>
      <p>Strength: {str}</p>
      <p>Agility: {agi}</p>
      <p>Stamina: {stam}</p>
      <p>Intellect: {int}</p>
      <p>Spirit: {spi}</p>
      <h3>Melee Stats</h3>
      <p>Melee Attack Power: {meleeAp}</p>
      <p>Melee Crit: {meleeCrit}</p>
      <p>Melee DPS: {meleeDps}</p>
      <p>Min damage: {meleeMinDamage}</p>
      <p>Max damage: {meleeMaxDamage}</p>
      <p>Hit rating: </p>
      <p>expertise: </p>
      <h3>Defenses</h3>
      <p>Armor: {armor}</p>
      <p>Midigation: {midigation}</p>
      <p>Midigation60: armor/(armor+ (467.5 * monsterLevel-22167))</p>
      <p>Defense: Increase chance to Dodge block and parry, Decrease chance to be hit and crit</p>
      <p>Dodge: {dodgeChance}</p>
      <p>Parry: 5% base + 1% / 13.8 parry rating@60 + talents+ ((defense skill-attacker skill)*0.04</p>
      <p>Block Chance: (5%base + block rating + talents + (defense skill - attacker's weapon skill) * 0.04</p>
      <p>Block Rating: 1% = 5 rating@60 8@70 16@80</p>
      <p>BlockAmt: (Shield block value + str/2)*bonus percentages</p>
      <p>Resilience:? </p>
      <p>Resist?
          fire
          nature
          arcane
          frost
          Shadow
      </p>
      <h3>Ranged</h3>
      <p>
          Damage:
          Speed:
          Power:
          Hit:
          Crit:
      </p>
      <h3>Spells</h3>
      <p>
          Bonus Damage: 
          Bonus Healing: 
          Hit Rating: 
          Crit Chance: 
          Haste Rating: 
          Mana Regen: 
      </p>
    </div>
  );
}
export default GuildieStatCalc;

function expTable(exp) {
  let level;
  const expTable = [
    0,
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    1000,
    1100,
    1200,
    1300,
    1400,
    1500,
    1600,
    1700,
    1800,
    1900,
    2000,
    2100,
    2200,
    2300,
    2400,
    2500,
    2600,
    2700,
    2800,
    2900,
    3000,
    3100,
    3200,
    3300,
    3400,
    3500,
    3600,
    3700,
    3800,
    3900,
    4000,
    4100,
    4200,
    4300,
    4400,
    4500,
    4600,
    4700,
    4800,
    4900,
    5000,
    5100,
    5200,
    5300,
    5400,
    5500,
    5600,
    5700,
    5800,
    5900,
  ];
  for (level = 1; exp < expTable[level]; level++) return level;
}
function strCalc(r, l) {
  let base;
  let calc;
  r === "Human" ? (base = 31) : (base = 30);
  calc = Math.floor(l / 3) + base;
  return calc;
}
function agiCalc(r, l) {
  let base;
  let calc;
  r === "Human" ? (base = 15) : (base = 14);
  calc = Math.floor(l / 6) + base;
  return calc;
}
function stamCalc(r, l) {
  let base;
  let calc;
  r === "Human" ? (base = 25) : (base = 24);
  calc = Math.floor(l / 4) + base;
  return calc;
}
function intCalc(r, l) {
  let base;
  let calc;
  r === "Human" ? (base = 21) : (base = 20);
  calc = Math.floor((l * 5) / 6) + base;
  return calc;
}
function spiCalc(r, l) {
  let base;
  let calc;
  r === "Human" ? (base = 24) : (base = 23);
  calc = Math.floor(l / 20) + base;
  return calc;
}
function maxHpCalc(l, s) {
  let MaxHP = s * 10 + l * 25;
  return MaxHP;
}
function armorCalc(a) {
  let armor = a * 2;
  return armor;
}
function calcMeleeAp(s, a) {
  let ap = s * 2 + a;
  return ap;
}
function calcMeleeCrit(a) {
  let crit = a / 20;
  crit = 1 + crit.toFixed(2);
  return crit;
}
function calcMeleeSpeed() {
  let speed = 2;
  return speed;
}
function calcMeleeMinDamage(ap, spd) {
  let base = 1;
  let min = base + Math.floor((ap / 14) * spd);
  return min;
}
function calcMeleeMaxDamage(ap, spd) {
  let base = 2;
  let max = base + Math.floor((ap / 14) * spd);
  return max;
}
function calcMeleeDps(min, max, spd) {
  let dps = (min + max) / (2 * spd);
  return dps;
}
function calcDodge(agi) {
    let dodge = (agi/20);
    dodge = 1 + dodge.toFixed(2);
    return dodge;
}
function calcMidigation(l, armor) {
    let midigation = armor/(armor+400+(85*l));
    return midigation;
}