// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// pokemmo
	{
		section: "MMO Tiers",
	},
	{
		name: "[Gen 8] MMO Custom Game",
		desc: `Test`,
		mod: 'gen8',
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Adjust Level = 50','Evasion Moves Clause','Sleep Clause Mod','OHKO Clause'],
	},
	{
		name: "[Gen 8] MMO Doubles Custom Game",
		desc: `Test`,
		mod: 'gen8',
		gameType: 'doubles',
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod','Adjust Level = 50','Evasion Moves Clause','Sleep Clause Mod','OHKO Clause'],
	},
	{
		name: "[Gen 8] MMO OU",
		desc: `MMO OU. I don't know what kind of fancy description you were expecting here`,
		threads: [
			`don't expect anything here`,
		],
		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause', 'Adjust Level = 50'],
		banlist: [
			'Uber', 'AG', 'Moody', 'Power Construct', 'Shadow Tag',
		],
	},
	{
		name: "[Gen 8] MMO UU",
		desc: `MMO UU. For real though why are you reading this?`,
		threads: [
			`don't expect anything here`,
		],
		mod: 'gen8',
		ruleset: ['[Gen 8] MMO OU'],
		banlist: ['OU', 'UUBL'],
	},
	{
		name: "[Gen 8] MMO NU",
		desc: `MMO NU. Nope, still nothing useful here.`,
		threads: [
			`don't expect anything here`,
		],
		mod: 'gen8',
		ruleset: ['[Gen 8] MMO UU'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 8] MMO UT",
		desc: `MMO UT. I'm starting to run out of things to put here`,
		threads: [
			`don't expect anything here`,
		],
		mod: 'gen8',
		ruleset: ['[Gen 8] MMO UU'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 8] MMO LC",
		desc: `MMO LC. Same lame jokes here, nothing helpful.`,
		threads: [
			`don't expect anything here`,
		],
		mod: 'gen8',
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 8] MMO Doubles OU",
		desc: `MMO DOU. It might be doubles, but I'm not doubling the lame jokes.`,
		threads: [
			`For real though`,
		],
		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause', 'Adjust Level = 50'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	// {
	// 	name: "[Gen 8] MMO VGC",
	// 	desc: `This is indeed VGC`,
	// 	threads: [
	// 		`For real though`,
	// 	],
	// 	mod: 'mmo',
	// 	gameType: 'doubles',
	// 	teamLength: {
	// 		validate: [4, 6],
	// 		battle: 4,
	// 	},
	// 	ruleset: ['Standard GBU', 'Dynamax Clause', 'Adjust Level = 50'],
	// },
	{
		name: "[Gen 8] MMO Monotype",
		desc: `Guess what tier this is`,
		threads: [
			`For real though`,
		],
		mod: 'gen8',
		ruleset: ['Same Type Clause', 'Standard', 'Dynamax Clause', 'Adjust Level = 50'],
		banlist: [
			'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base',
			'Moody', 'Power Construct', 'Damp Rock', 'Terrain Extender'
		],
	},
	{
		name: "[Gen 8] MMO 1v1",
		desc: `Guess what tier this is`,
		threads: [
			`For real though`,
		],
		mod: 'gen8',
		ruleset: ['Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause', 'Adjust Level = 50', 'Min Team Size = 1', 'Max Team Size = 1', 'Picked Team Size = 1'],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Eternatus', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Rayquaza', 'Reshiram', 'Solgaleo', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom',
			'Moody', 'Focus Sash', 'Perish Song'
		],
	},
	{
		name: "[Gen 8] MMO The Loser's Game",
		desc: `The first player to lose all of their Pok&eacute;mon wins.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657270/">The Loser's Game</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Standard', '!OHKO Clause', 'Adjust Level = 50', 'Min Team Size = 6', 'Max Team Size = 6', 'Picked Team Size = 6'],
		banlist: [
			'Sandshrew-Alola', 'Shedinja', 'Infiltrator', 'Magic Guard', 'Choice Scarf',
			'Explosion', 'Final Gambit', 'Healing Wish', 'Lunar Dance', 'Magic Room', 'Memento', 'Misty Explosion', 'Self-Destruct',
		],
		onValidateTeam(team) {
			const familyTable = new Set<ID>();
			for (const set of team) {
				let species = this.dex.species.get(set.species);
				while (species.prevo) {
					species = this.dex.species.get(species.prevo);
				}
				if (familyTable.has(species.id)) {
					return [
						`You are limited to one Pok&eacute;mon from each family by the Family Clause.`,
						`(You have more than one evolution of ${species.name}.)`,
					];
				}
				familyTable.add(species.id);
			}
		},
		battle: {
			tiebreak() {
				if (this.ended) return false;

				this.inputLog.push(`>tiebreak`);
				this.add('message', "Time's up! Going to tiebreaker...");
				const notFainted = this.sides.map(side => (
					side.pokemon.filter(pokemon => !pokemon.fainted).length
				));
				this.add('-message', this.sides.map((side, i) => (
					`${side.name}: ${notFainted[i]} Pokemon left`
				)).join('; '));
				const maxNotFainted = Math.max(...notFainted);
				let tiedSides = this.sides.filter((side, i) => notFainted[i] === maxNotFainted);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpPercentage = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp / pokemon.maxhp).reduce((a, b) => a + b) * 100 / 6
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpPercentage[i])}% total HP left`
				)).join('; '));
				const maxPercentage = Math.max(...hpPercentage);
				tiedSides = tiedSides.filter((side, i) => hpPercentage[i] === maxPercentage);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}

				const hpTotal = tiedSides.map(side => (
					side.pokemon.map(pokemon => pokemon.hp).reduce((a, b) => a + b)
				));
				this.add('-message', tiedSides.map((side, i) => (
					`${side.name}: ${Math.round(hpTotal[i])} total HP left`
				)).join('; '));
				const maxTotal = Math.max(...hpTotal);
				tiedSides = tiedSides.filter((side, i) => hpTotal[i] === maxTotal);
				if (tiedSides.length <= 1) {
					return this.win(tiedSides[1]);
				}
				return this.tie();
			},
			faintMessages(lastFirst) {
				if (this.ended) return;
				const length = this.faintQueue.length;
				if (!length) return false;
				if (lastFirst) {
					this.faintQueue.unshift(this.faintQueue[this.faintQueue.length - 1]);
					this.faintQueue.pop();
				}
				let faintData;
				while (this.faintQueue.length) {
					faintData = this.faintQueue.shift()!;
					const pokemon: Pokemon = faintData.target;
					if (!pokemon.fainted &&
						this.runEvent('BeforeFaint', pokemon, faintData.source, faintData.effect)) {
						this.add('faint', pokemon);
						pokemon.side.pokemonLeft--;
						this.runEvent('Faint', pokemon, faintData.source, faintData.effect);
						this.singleEvent('End', pokemon.getAbility(), pokemon.abilityState, pokemon);
						pokemon.clearVolatile(false);
						pokemon.fainted = true;
						pokemon.isActive = false;
						pokemon.isStarted = false;
						pokemon.side.faintedThisTurn = pokemon;
					}
				}

				if (this.gen <= 1) {
					// in gen 1, fainting skips the rest of the turn
					// residuals don't exist in gen 1
					this.queue.clear();
				} else if (this.gen <= 3 && this.gameType === 'singles') {
					// in gen 3 or earlier, fainting in singles skips to residuals
					for (const pokemon of this.getAllActive()) {
						if (this.gen <= 2) {
							// in gen 2, fainting skips moves only
							this.queue.cancelMove(pokemon);
						} else {
							// in gen 3, fainting skips all moves and switches
							this.queue.cancelAction(pokemon);
						}
					}
				}

				if (!this.p1.pokemonLeft && !this.p2.pokemonLeft) {
					this.win(faintData ? faintData.target.side.foe : null);
					return true;
				}
				if (!this.p1.pokemonLeft) {
					this.win(this.p1);
					return true;
				}
				if (!this.p2.pokemonLeft) {
					this.win(this.p2);
					return true;
				}
				if (faintData) {
					this.runEvent('AfterFaint', faintData.target, faintData.source, faintData.effect, length);
				}
				return false;
			},
		},
	},
];
