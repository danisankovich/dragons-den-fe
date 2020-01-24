import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {
  title;
  classDescription;
  creatingHeader;
  creatingDescription;
  classFeaturesHeading;
  quickBuildDescription;
  hitDice;
  avg;
  armor;
  weapons;
  tools;
  savingThrows;
  skills;
  equipment = [];
  headers = [];
  tableRows = [];
  spellCastingHeader;
  spellCastingDescription;
  constructor() { }

  ngOnInit() {
    this.title = 'Necromancer'
    this.classDescription = 'While some schools of magic teach their practitioners to weave magics with the essence of life, a Necromancer has learned to navigate the realm of death to acheive their goals. Often shunned or looked upon wearily by society, those who manipulate the threads of fate to acheive their goals are a valuable asset to those whose lives are drawn to the battlefield where fallen comrades and enemies alike rise once more to aid in battle.'
    this.creatingHeader = 'Creating a Necromancer';
    this.creatingDescription = 'A Necromancer is a caster who has devoted their lives to manipulating the twisting paths of death. A highly specialized class, what a Necromancer lacks in versatility they make up for in sheer potency. Their attacks wither the very flesh they strike, poison and decay become like water and air, and of course the corpses of even their enemies can be brought back to a stage of pseudo-life under the caster\'s thrall. But contrary to popular belief, not all Necromancers deal solely in death and the undead. Some have learned to twist the fabrics of life and death to heal and bolster their allies in battle. For what is a master of death if they cannot stop those they care about from dying?';
    this.classFeaturesHeading = 'Class Features';

    this.quickBuildDescription = 'You can make a necromancer quickly by following these suggestions. First, Charisma should be your highest ability score, followed by Constitution and Dexterity. Second, choose the charlatan background.';

    this.hitDice = 6;
    this.avg = Math.ceil((1 + this.hitDice) / 2);
    this.armor = 'Light Armor';
    this.weapons = 'Simple Weapons';

    this.tools = 'None';
    this.savingThrows = 'Charmisma, Constitution';
    this.skills = 'Choose two from Arcana, Deception, Intimidation, Medicine, Survival, and Religion';
    this.equipment = [
      '(a) A Staff or (b) Two Daggers',
      '(a) Leather Armor or (b) Padded Armor',
      '(a) A Dungeoneer\'s Pack or (b) an Explorer\'s Pack',
      'A Spellcasting Focus',
    ]

    this.headers = [
      'Level',
      'Proficiency Bonus',
      'Features',
      'Cantrips Known',
      'Spells Known',
      '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'
    ];

    this.tableRows = [
      { level: 1, proficiency: 2, features: 'Spellcasting, Life Drain', cantrips: 2, spells: 2, slots: [2] },
      { level: 2, proficiency: 2, features: 'Necromancer Cult', cantrips: 2, spells: 3, slots: [3] },
      { level: 3, proficiency: 2, features: 'Soul Harvest', cantrips: 2, spells: 4, slots: [4, 2] },
      { level: 4, proficiency: 2, features: 'Ability Score Improvement', cantrips: 3, spells: 5, slots: [4, 3] },
      { level: 5, proficiency: 3, features: 'Spontaneous Unburial', cantrips: 3, spells: 6, slots: [4, 3, 2] },
      { level: 6, proficiency: 3, features: 'Cult Feature', cantrips: 3, spells: 7, slots: [4, 3, 3] },
      { level: 7, proficiency: 3, features: 'Siphon Soul', cantrips: 3, spells: 8, slots: [4, 3, 3, 1] },
      { level: 8, proficiency: 3, features: 'Ability Score Improvement', cantrips: 3, spells: 9, slots: [4, 3, 3, 2] },
      { level: 9, proficiency: 4, features: '--', cantrips: 3, spells: 10, slots: [4, 3, 3, 3, 1] },
      { level: 10, proficiency: 4, features: 'Cult Feature', cantrips: 3, spells: 11, slots: [4, 3, 3, 3, 2] },
      { level: 11, proficiency: 4, features: '--', cantrips: 4, spells: 12, slots: [4, 3, 3, 3, 2, 1] },
      { level: 12, proficiency: 4, features: 'Ability Score Improvement', cantrips: 4, spells: 12, slots: [4, 3, 3, 3, 2, 1] },
      { level: 13, proficiency: 5, features: '--', cantrips: 4, spells: 13, slots: [4, 3, 3, 3, 2, 1, 1] },
      { level: 14, proficiency: 5, features: 'Cult feature, Swift Undead', cantrips: 4, spells: 13, slots: [4, 3, 3, 3, 2, 1, 1] },
      { level: 15, proficiency: 5, features: '--', cantrips: 4, spells: 14, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
      { level: 16, proficiency: 5, features: 'Ability Score Improvement', cantrips: 4, spells: 14, slots: [4, 3, 3, 3, 2, 1, 1, 1] },
      { level: 17, proficiency: 6, features: '--', cantrips: 4, spells: 15, slots: [4, 3, 3, 3, 2, 1, 1, 1, 1] },
      { level: 18, proficiency: 6, features: 'Plague Doctor', cantrips: 4, spells: 15, slots: [4, 3, 3, 3, 2, 1, 1, 1, 1] },
      { level: 19, proficiency: 6, features: 'Ability Score Improvement', cantrips: 4, spells: 15, slots: [4, 3, 3, 3, 2, 2, 1, 1, 1] },
      { level: 20, proficiency: 6, features: 'Stitcher of Flesh', cantrips: 4, spells: 15, slots: [4, 3, 3, 3, 2, 2, 2, 1, 1] },
    ]

    this.spellCastingDescription = 'You draw on the essence of life and death itself to fuel your spells.';
    this.cantripsDescription = 'At 1st level, you know 2 cantrips of your choice from the wizard spell list. You learn additional cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Necromancer table.';

    this.spellSlotDescription = 'The Necromancer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell’s level or higher. You regain all expended spell slots when you finish a long rest. For example, if you know the 1st-level spell false life and have a 1st-level and a 2nd-level spell slot available, you can cast false life using either slot.'

    this.spellsKnownDescription = 'You know two 1st-level spells of your choice from the wizard spell list. The Spells Known column of the Necromancer table shows when you learn more necromancer spells of your choice. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level. Additionally, when you gain a level in this class, you can choose one of the necromancer spells you know and replace it with another spell from the wizard spell list, which also must be of a level for which you have spell slots.'

    this.spellCastingAbility = 'Charisma is your spellcasting ability for your necromancer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a necromancer spell you cast and when making an attack roll with one.';
    this.spellSaveDC = '= 8 + your proficiency bonus + your Charisma modifier';
    this.spellAttackModifier = '= your proficiency bonus + your Charisma modifier';

    this.classLevelFeatures = [
      {
        name: 'Life Drain', description: 'Starting at 1st level, your touch can siphon the life force of others to bolster your own. As an action, you can touch a living creature to make a melee spell attack against them, dealing necrotic damage equal to 1d4 + your Charisma modifier on a hit. You gain temporary hit points equal to the amount of necrotic damage dealt. If this feature kills the creature, you gain twice as many temporary hit points from using this feature. The damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4). You may use this feature a number of times equal to your Charisma modifier(minimum one) and you regain all uses of this feature at the end of a long rest.'
      },
      {
        name: 'Necromancer Cult',
        description: 'At 2nd level, you choose a Cult which specializes you in your dealings with death: Keeper, Reaper, Undertaker, and Witch Doctor each of which is detailed at the end of the class description. Your Cult grants you features when you choose it at 2nd level and additional features at 6th, 10th, and 14th level.'
      },
      {
        name: 'Soul Harvest',
        description: 'Starting at 3rd level, by reaping life you are able to claim a fraction of those unfortunate creatures souls to regenerate your wounds and fortify your body. When you or an undead under your control reduce a Hostile creature to 0 Hit Points, you gain Temporary Hit Points equal to your Charisma modifier + your Necromancer level (minimum of 1).'
      },
      {
        name: 'Ability Score Increase',
        description: 'When you reach 4th level, and again at 8th, 12th, 16th, and 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can\'t increase an ability score above 20 using this feature.'
      },
      {
        name: 'Spontaneous Unburial',
        description: 'Starting at 5th level, your understanding of necrotic and negative energies allows you to raise the dead with ease. You learn the spell Animate Dead (it does not count against your spells known) and may cast it as a ritual once per long rest. Subsequent uses require a spell slot as usual.'
      },
      {
        name: 'Siphon Soul',
        description: 'Starting at the 7th level, Your connection to your undead minions allows you to transfer health to your risen allies. As a bonus action, you can fully deplete your temporary hitpoints to heal an undead ally that you brought to life with Animate Undead for that amount. Once per long rest as an action you can destroy your Animate Undead ally to give yourself temporary hitpoints equal to your Necromancer Level + your Charisma Modifier.'
      },
      {
        name: 'Swift Undead',
        description: 'Starting at the 14th level, as a reaction, you can command one undead under your control within 5 ft of you to intercept a melee or melee spell attack made against you. The attack now targets the undead minion and the attack role is now compared to the undead’s AC.'
      },
      {
        name: 'Plague Doctor',
        description: 'At the 18th level, you are no longer bound by your mortal flesh. You now age at a tenth of your normal rate, you cannot be magically aged or put to sleep, and you are immune to necrotic damage.'
      },
      {
        name: 'Stitcher of Flesh',
        description: 'At the 20th level you learn to put a stop to the very process of death. You learn the spell True Resurrection. It does not count against your spells known, and if you already know it you may select a new spell from the wizard spell list. Once every 10 days you may cast True Resurrection with a Casting Time of 1 action.'
      }
    ];

    this.subClassName = 'Necromancer Cults';
    this.subClasses = [
      {
        name: 'The Stitchers', progressions: [
          {
            name: 'Expanded Knowledge',
            description: 'Beginning at the 2nd level, when you choose this cult, you learn two twist your knowledge of death into knowledge of healing. You learn the Cure Wounds spell (without it counting against your spells known) and add the following spells to the list of spells you can learn whenever you take a Necromancer spell: Healing Word, Cure Wounds, Lesser Restoration, Mass Healing Word, Revivify, Greater Restoration, Mass Cure Wounds, Raise Dead, Heal, Regenerate, Resurrection, Mass Heal, Power Word Heal, True Resurrection'
          },
          {
            name: 'Stitch Flesh',
            description: 'Beginning at the 6th level, so long as your target has at least 1 hp, your healing spells can target undead, even if the spell says you can\'t'
          },
          {
            name: 'Transfer Life',
            description: 'Beginning at the 10th level, your Life Drain now has a range of 30 feet. When you use Life Drain you can now choose an ally you can see within range to receive the temporary hitpoints in your place.'
          },
          {
            name: 'Draw Upon Death',
            description: 'Beginning at the 14th level, by twisting the fabric of life and death, you have learned to benefit from the healing you give unto others. Whenever you heal someone with a spell you heal an amount equal to the spell slot used + your charisma modifier.'
          }
        ]
      },
      {
        name: 'Cult of Flesh', progressions: [
          {
            name: 'Life Unto Flesh',
            description: 'Beginning at the 2nd level, your devotion to the Cult of Flesh has taught you to stitch the very flesh of other beings into your own for your own benefit. So long as you are not wearing armor, your base AC becomes 13 and you are resistant to Poison damage.'
          },
          {
            name: 'Deathly Constitution',
            description: 'Beginning at the 6th level, you have advantage on Constitution Saving throws and your hit dice becomes 1d8 instead of 1d6. This does not retroactively change your Maximum Hit Points.'
          },
          {
            name: 'Improved Life Drain',
            description: 'Beginning at the 10th level, your Life Drain can now be used with your weapon. The damage dice for this ability now become the damage dice of the weapon you use for the attack. You become proficient in two one-handed martial weapons that do not have the versatile property.'
          },
          {
            name: 'Natural Armor',
            description: 'Beginning at the 14th level, if you are not wearing armor you may add your constitution modifier to your total AC.'
          }
        ]
      },
      {
        name: 'Cult of Decay', progressions: [
          {
            name: 'Rotting Touch',
            description: 'Beginning at the 2nd level, your understanding to rot and decay allows you to shrug off damage that threatens to rot your body. You are resistant to poison and necrotic damage and have advantage on saving throws involving poison.'
          },
          {
            name: 'Sloughing Flesh',
            description: 'Beginning at the 6th level, whenever you hit a creature with your Life Drain ability, they take 1d4 + your charisma modifier necrotic damage at the end of their next turn.'
          },
          {
            name: 'Desecrate Ground',
            description: 'Beginning at the 10th level, you cause rot and decay to spread in a 30 foot radius sphere from a point centered on you. All creatures in the area who enter the area start their turn in the area must make a constitution saving throw against your Spell Save DC. They take 4d8 necrotic damage, half damage on a save. On a failed save, their next attack is made at disadvantage. Once a creature successfully saves against this ability, they are immune from its effects for 8 hours. The area remains desecrated for 1 minute. Once used, you cannot use this ability again until you take a long rest.'
          },
          {
            name: 'Drain Life and Death',
            description: 'Beginning at the 14th level, you regain all uses of Life Drain after a short rest and Drain Life now has a range of 30 feet.'
          }
        ]
      }
    ]
  }

  cantripsDescription;
  spellSlotDescription;
  spellsKnownDescription;
  spellCastingAbility;
  spellSaveDC;
  spellAttackModifier;
  classLevelFeatures = []
  subClassName;
  subClasses = [];

  // your healing spells can affect undead, even if the spell says they cannot.

  spellLevelSuffix(level) {
    if (level >= 4) {
      return `${level}th`;
    } if (level === 3) {
      return `${level}rd`;
    } if (level === 2) {
      return `${level}nd`;
    } if (level === 1) {
      return `${level}st`;
    }
  }
}
