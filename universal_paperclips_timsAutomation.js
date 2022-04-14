var timsAutomation = {
	reset: null,
	btnFunc: null,
	dom: null,
	utils: {
		helperKeys: ['reset', 'btnFunc', 'dom', 'utils'],
		utilKeys: ['endPhase1', 'endPhase2', 'loan'],
		cancel: function(util) {
			if (!timsAutomation.utils.contains(timsAutomation.utils.utilKeys, util))
				return false;
			let obj = timsAutomation.utils[util];
			if (obj.interval != null) {
				clearInterval(obj.interval);
				obj.interval = null;
			}
			return true;
		},
		contains: function(arr, el) {
			for (var i = 0; i < arr.length; i++) {
				if (arr[i] == el) {
					return true;
				}
			}
			return false;
		},
		endPhase2: {
			farmBtnx1: document.getElementById('btnMakeFarm'),
			farmBtnx10: document.getElementById('btnFarmx10'),
			farmBtn: document.getElementById('btnFarmx100'),
			wireBtnx1: document.getElementById('btnMakeWireDrone'),
			wireBtnx10: document.getElementById('btnWireDronex10'),
			wireBtnx100: document.getElementById('btnWireDronex100'),
			wireBtn: document.getElementById('btnWireDronex1000'),
			harvBtnx1: document.getElementById('btnMakeHarvester'),
			harvBtnx10: document.getElementById('btnHarvesterx10'),
			harvBtnx100: document.getElementById('btnHarvesterx100'),
			harvBtn: document.getElementById('btnHarvesterx1000'),
			facBtn: document.getElementById('btnMakeFactory'),
			//necessary stuff
			runBtn: null,
			cancelBtn: null,
			time: 10,
			interval: null,
			farmTarget: 12000,
			harvTarget: 250000,
			wireTarget: 250000,
			factTarget: 200,
			roundFarm: function() {
				x1 = timsAutomation.utils.endPhase2.farmBtnx1;
				x10 = timsAutomation.utils.endPhase2.farmBtnx10;
				if (farmLevel % 10 != 0) {
					if (x1.disabled == false) {
						x1.onclick();
						return false;
					}
				}
				else if (farmLevel % 100 != 0) {
					if (x10.disabled == false) {
						x10.onclick();
						return false;
					}
				}
				return true;
			},
			roundWire: function() {
				x1 = timsAutomation.utils.endPhase2.wireBtnx1;
				x10 = timsAutomation.utils.endPhase2.wireBtnx10;
				x100 = timsAutomation.utils.endPhase2.wireBtnx100;
				if (wireDroneLevel % 10 != 0) {
					if (x1.disabled == false) {
						x1.onclick();
						return false;
					}
				}
				else if (wireDroneLevel % 100 != 0) {
					if (x10.disabled == false) {
						x10.onclick();
						return false;
					}
				}
				else if (wireDroneLevel % 1000 != 0) {
					if (x100.disabled == false) {
						x100.onclick();
						return false;
					}
				}
				return true;
			},
			roundHarv: function() {
				x1 = timsAutomation.utils.endPhase2.harvBtnx1;
				x10 = timsAutomation.utils.endPhase2.harvBtnx10;
				x100 = timsAutomation.utils.endPhase2.harvBtnx100;
				if (harvesterLevel % 10 != 0) {
					if (x1.disabled == false) {
						x1.onclick();
						return false;
					}
				}
				else if (harvesterLevel % 100 != 0) {
					if (x10.disabled == false) {
						x10.onclick();
						return false;
					}
				}
				else if (harvesterLevel % 1000 != 0) {
					if (x100.disabled == false) {
						x100.onclick();
						return false;
					}
				}
				return true;
			},
			intervalFunc: function() {
				farmBtn = timsAutomation.utils.endPhase2.farmBtn;
				wireBtn = timsAutomation.utils.endPhase2.wireBtn;
				harvBtn = timsAutomation.utils.endPhase2.harvBtn;
				facBtn = timsAutomation.utils.endPhase2.facBtn;
				let obj = timsAutomation.utils.endPhase2;
				if (farmLevel < obj.farmTarget) {
					if (farmBtn.disabled == false && obj.roundFarm() == true) {
						farmBtn.onclick();
					}
				}
				else if (wireDroneLevel < obj.wireTarget) {
					if (wireBtn.disabled == false && obj.roundWire() == true) {
						wireBtn.onclick();
					}
				}
				else if (harvesterLevel < obj.harvTarge) {
					if (harvBtn.disabled == falset && obj.roundHarv() == true) {
						harvBtn.onclick();
					}
				}
				else if (factoryLevel < obj.factTarget) {
					if (facBtn.disabled == false) {
						facBtn.onclick();
					}
				}
				else {
					timsAutomation.utils.endPhase2.cancel();
					timsAutomation.utils.endPhase2.runBtn.disabled = true;
				}
			},
			run: function() {
				if (humanFlag || spaceFlag) return;
				let obj = timsAutomation.utils.endPhase2;
				if (obj.interval == null) {
					obj.interval = setInterval(obj.intervalFunc, obj.time);
					obj.runBtn.disabled = true;
					obj.cancelBtn.disabled = false;
				}
			},
			cancel: function() {
				let obj = timsAutomation.utils.endPhase2;
				if (timsAutomation.utils.cancel('endPhase2')) {
					obj.cancelBtn.disabled = true;
					obj.runBtn.disabled = false;
				}
			}
		},
		endPhase1: {
			runBtn: null,
			cancelBtn: null,
			time: 50,
			interval: null,
			intervalFunc: function() {
				clipperBtn = btnMakeClipperElement;
				megaClipperBtn = btnMakeMegaClipperElement;
				if (clipmakerLevel < 100) { if (clipperBtn.disabled == false) clipperBtn.onclick(); }
				else if (megaClipperLevel < 100) { if (megaClipperBtn.disabled == false) megaClipperBtn.onclick(); }
				//else if (clipmakerLevel < 120) { if (clipperBtn.disabled == false) clipperBtn.onclick(); }
				else {
					timsAutomation.utils.endPhase1.cancel();
					timsAutomation.utils.endPhase1.runBtn.disabled = true;
				}
			},
			run: function() {
				let obj = timsAutomation.utils.endPhase1;
				if (!humanFlag) {
					obj.runBtn.disabled = true;
					return;
				}
				if (obj.interval == null) {
					obj.interval = setInterval(obj.intervalFunc, obj.time);
					obj.runBtn.disabled = true;
					obj.cancelBtn.disabled = false;
				}
			},
			cancel: function() {
				let obj = timsAutomation.utils.endPhase1;
				if (timsAutomation.utils.cancel('endPhase1')) {
					obj.cancelBtn.disabled = true;
					obj.runBtn.disabled = false;
				}
			}
		},
		loan: {
			time: 1000,
			interval: null,
			intervalFunc: function() {
				setTimeout( function() { timsAutomation.utils.cancel('loan'); }, 100);
			},
			run: function() {
				if (timsAutomation.utils.loan.interval == null) {
					timsAutomation.utils.loan.interval = setInterval(timsAutomation.utils.loan.intervalFunc, timsAutomation.utils.loan.time);
				}
			},
			button: null
		},
		stats: {
			//will eventually move the stuff at the bottom for statistics up here
		}
	},
	tourney: {
		on: true,
		interval: null,
		intervalFunc: null,
		time: 1000,
		reset: null,
		button: null,
		statusLabel: null,
		buttonFunc: null,
		relatedDiv: document.getElementById('strategyEngine'),
		//helper stuff
		runTest: null,
		timeout: 10,
		lastTest: [],
		printScoresOn: false,
		printScores: null,
		lastTourneyLvl: 0,
		testLoopLimit: 200,
		stratPickerElements: document.getElementById('stratPicker').getElementsByTagName('option'),
		calcOverlap: null,
		useScore: false
	},
	swarmGifts: {
		on: true,
		interval: null,
		intervalFunc: null,
		time: 100,
		reset: null,
		button: null,
		statusLabel: null,
		buttonFunc: null,
		relatedDiv: null,
		//helper stuff
		cleanAddProc: null,
		cleanAddMom: null,
		curAddProc: null, //will be unused for now
		curAddMem: null
	},
	quantum: {
		on: true,
		interval: null,
		intervalFunc: null,
		time: 25,
		reset: null,
		button: null,
		statusLabel: null,
		buttonFunc: null,
		relatedDiv: null,
		//helper stuff
		computeButton: document.getElementById('btnQcompute'),
		clickTime: 100,
		waitCounter: 0
	},
	phase1proc: {
		on: true,
		interval: null,
		intervalFunc: null,
		time: 500,
		reset: null,
		button: null,
		statusLabel: null,
		buttonFunc: null,
		relatedDiv: null,
		//helper stuff
		procButton: document.getElementById('btnAddProc'),
		memLimit: 70
	},
	powerMonitor: {
		on: true,
		interval: null,
		intervalFunc: null,
		time: 250,
		reset: null,
		button: null,
		statusLabel: null,
		buttonFunc: null,
		relatedDiv: document.getElementById('probeDesignDiv'), //for checking when to disaable the button
		//helper stuff
		label: null,
		br1: null,
		br2: null,
		formatTime: null,
		makeElementsFunc: null
	},
	targetDemand: {
		on: true,
		interval: null,
		intervalFunc: null,
		time: 250,
		reset: null,
		button: null,
		statusLabel: null,
		buttonFunc: null,
		relatedDiv: document.getElementById('revPerSecDiv'),
		//helper stuff
		label: null,
		br1: null,
		formatTime: null,
		calcTargetDemand: null,
		makeElementsFunc: null,
		forceDisplay: false
	},
	betterWireBuyer: {
		on: true,
		interval: null,
		intervalFunc: null,
		time: 250,
		reset: null,
		button: null,
		statusLabel: null,
		buttonFunc: null,
		relatedDiv: null
	},
	probeSpec: {
		on: true,
		interval: null,
		intervalFunc: null,
		time: 500,
		reset: null,
		button: null,
		statusLabel: null,
		buttonFunc: null,
		relatedDiv: document.getElementById('probeDesignDiv'),
		//helper stuff
		increaseProbeTrustBtn: document.getElementById('btnIncreaseProbeTrust'),
		increaseMaxTrustBtn: document.getElementById('btnIncreaseMaxTrust'),
		combatDiv: document.getElementById('combatButtonDiv'),
		combat: false,
		btns: {
			raise: [
				document.getElementById('btnRaiseProbeSpeed'),
				document.getElementById('btnRaiseProbeNav'),
				document.getElementById('btnRaiseProbeRep'),
				document.getElementById('btnRaiseProbeHaz'),
				document.getElementById('btnRaiseProbeFac'),
				document.getElementById('btnRaiseProbeHarv'),
				document.getElementById('btnRaiseProbeWire'),
				document.getElementById('btnRaiseProbeCombat')
			],
			lower: [
				document.getElementById('btnLowerProbeSpeed'),
				document.getElementById('btnLowerProbeNav'),
				document.getElementById('btnLowerProbeRep'),
				document.getElementById('btnLowerProbeHaz'),
				document.getElementById('btnLowerProbeFac'),
				document.getElementById('btnLowerProbeHarv'),
				document.getElementById('btnLowerProbeWire'),
				document.getElementById('btnLowerProbeCombat')
			]
		}
	}
};

timsAutomation.reset = function(category) {
	if (timsAutomation.utils.contains(timsAutomation.utils.helperKeys, category))
		return null;
	let obj = timsAutomation[category];
	return function() {
		if (obj.interval != null)
			clearInterval(obj.interval);
		if (obj.intervalFunc != null)
			obj.interval = setInterval(obj.intervalFunc, obj.time);
	};
}
timsAutomation.btnFunc = function(category) {
	if (timsAutomation.utils.contains(timsAutomation.utils.helperKeys, category))
		return null;
	let obj = timsAutomation[category];
	return function() {
		if (obj.button.disabled) 
			return;
		obj.on = !obj.on;
		if (obj.on) {
			obj.statusLabel.innerHTML = " ON";
		} else {
			obj.statusLabel.innerHTML = " OFF";
		}
	};
}

//resets
timsAutomation.tourney.reset = timsAutomation.reset('tourney');
timsAutomation.swarmGifts.reset = timsAutomation.reset('swarmGifts');
timsAutomation.quantum.reset = timsAutomation.reset('quantum');
timsAutomation.phase1proc.reset = timsAutomation.reset('phase1proc');
timsAutomation.powerMonitor.reset = timsAutomation.reset('powerMonitor');
timsAutomation.targetDemand.reset = timsAutomation.reset('targetDemand');
timsAutomation.betterWireBuyer.reset = timsAutomation.reset('betterWireBuyer');
timsAutomation.probeSpec.reset = timsAutomation.reset('probeSpec');


//this needs to be done before the button stuff
timsAutomation.powerMonitor.makeElementsFunc = function () {
	let obj = timsAutomation.powerMonitor;
	if (obj.label == null) {
		obj.label = document.createElement("span");
		obj.br1 = document.createElement("br");
		obj.br2 = document.createElement("br");
		let div = document.getElementById("powerDiv");
		let el = div.childNodes[18];
		div.insertBefore(obj.label, el);
		div.insertBefore(obj.br1, el);
		div.insertBefore(obj.br2, el);
	}
};
timsAutomation.powerMonitor.makeElementsFunc();

timsAutomation.targetDemand.makeElementsFunc = function () {
	let obj = timsAutomation.targetDemand;
	if (obj.label == null) {
		obj.label = document.createElement("span");
		obj.br1 = document.createElement("br");
		let div = document.getElementById("businessDiv");
		let el = div.children[14];
		div.insertBefore(obj.label, el);
		div.insertBefore(obj.br1, el);
	}
};
timsAutomation.targetDemand.makeElementsFunc();


//labels
timsAutomation.tourney.statusLabel = document.createElement('span');
timsAutomation.tourney.statusLabel.innerHTML = timsAutomation.tourney.on ? " ON" : " OFF";

timsAutomation.swarmGifts.statusLabel = document.createElement('span');
timsAutomation.swarmGifts.statusLabel.innerHTML = timsAutomation.swarmGifts.on ? " ON" : " OFF";

timsAutomation.quantum.statusLabel = document.createElement('span');
timsAutomation.quantum.statusLabel.innerHTML = timsAutomation.quantum.on ? " ON" : " OFF";

timsAutomation.probeSpec.statusLabel = document.createElement('span');
timsAutomation.probeSpec.statusLabel.innerHTML = timsAutomation.probeSpec.on ? " ON" : " OFF";

timsAutomation.phase1proc.statusLabel = document.createElement('span');
timsAutomation.phase1proc.statusLabel.innerHTML = timsAutomation.phase1proc.on ? " ON" : " OFF";

timsAutomation.powerMonitor.statusLabel = document.createElement('span');
timsAutomation.powerMonitor.statusLabel.innerHTML = timsAutomation.powerMonitor.on ? " ON" : " OFF";

timsAutomation.targetDemand.statusLabel = document.createElement('span');
timsAutomation.targetDemand.statusLabel.innerHTML = timsAutomation.powerMonitor.on ? " ON" : " OFF";

timsAutomation.betterWireBuyer.statusLabel = document.createElement('span');
timsAutomation.betterWireBuyer.statusLabel.innerHTML = timsAutomation.powerMonitor.on ? " ON" : " OFF";

//buttons
timsAutomation.tourney.button = document.createElement('button');
timsAutomation.tourney.button.innerHTML = "Auto-choose model";
timsAutomation.tourney.button.style = "margin-bottom: 5px;";
timsAutomation.tourney.buttonFunc = timsAutomation.btnFunc('tourney');
timsAutomation.tourney.button.onclick = function() {
	let obj = timsAutomation.tourney;
	obj.buttonFunc();
	if (obj.on) {
		//obj.runTest();
	}
};

timsAutomation.swarmGifts.button = document.createElement('button');
timsAutomation.swarmGifts.button.innerHTML = "Auto-use swarm gifts";
timsAutomation.swarmGifts.button.style = "margin-bottom: 5px;";
timsAutomation.swarmGifts.button.onclick = timsAutomation.swarmGifts.buttonFunc = timsAutomation.btnFunc('swarmGifts');

timsAutomation.quantum.button = document.createElement('button');
timsAutomation.quantum.button.innerHTML = "Auto-click quantum comp.";
timsAutomation.quantum.button.style = "margin-bottom: 5px;";
timsAutomation.quantum.button.onclick = timsAutomation.quantum.buttonFunc = timsAutomation.btnFunc('quantum');

timsAutomation.probeSpec.button = document.createElement('button');
timsAutomation.probeSpec.button.innerHTML = "Auto spec probe";
timsAutomation.probeSpec.button.style = "margin-bottom: 5px;";
timsAutomation.probeSpec.button.onclick = timsAutomation.probeSpec.buttonFunc = timsAutomation.btnFunc('probeSpec');

timsAutomation.phase1proc.button = document.createElement('button');
timsAutomation.phase1proc.button.innerHTML = "Auto-use trust";
timsAutomation.phase1proc.button.style = "margin-bottom: 5px;";
timsAutomation.phase1proc.button.onclick = timsAutomation.phase1proc.buttonFunc = timsAutomation.btnFunc('phase1proc');

timsAutomation.powerMonitor.button = document.createElement('button');
timsAutomation.powerMonitor.button.innerHTML = "Power monitor";
timsAutomation.powerMonitor.button.style = "margin-bottom: 5px;";
timsAutomation.powerMonitor.buttonFunc = timsAutomation.btnFunc('powerMonitor');
timsAutomation.powerMonitor.button.onclick = function () {
	let obj = timsAutomation.powerMonitor;
	obj.buttonFunc();
	if (obj.on) {
		obj.label.style.display = obj.br1.style.display = obj.br2.style.display = "";
	} else {
		obj.label.style.display = obj.br1.style.display = obj.br2.style.display = "none";
	}
};

timsAutomation.targetDemand.button = document.createElement('button');
timsAutomation.targetDemand.button.innerHTML = "Target demand";
timsAutomation.targetDemand.button.style = "margin-bottom: 5px;";
timsAutomation.targetDemand.buttonFunc = timsAutomation.btnFunc('targetDemand');
timsAutomation.targetDemand.button.onclick =  function () {
	let obj = timsAutomation.targetDemand;
	obj.buttonFunc();
	if (obj.on && (obj.relatedDiv.style.display == '' || obj.forceDisplay)) {
		obj.label.style.cssText = obj.br1.style.cssText = "";
	} else {
		obj.label.style.cssText = obj.br1.style.cssText = "display: none;";
	}
};


timsAutomation.betterWireBuyer.button = document.createElement('button');
timsAutomation.betterWireBuyer.button.innerHTML = "Better Wire Buyer";
timsAutomation.betterWireBuyer.button.style = "margin-bottom: 5px;";
timsAutomation.betterWireBuyer.button.onclick = timsAutomation.betterWireBuyer.buttonFunc = timsAutomation.btnFunc('betterWireBuyer');



//tourney functions
timsAutomation.tourney.runTest = function() {
	var lastMoveSide = 0;
	var lastMoveTop = 0;
	
	var simFindBiggestPayoff = function() {
		if (aa >= ab && aa >= ba && aa >= bb)
			return 1;
		else if (ab >= aa && ab >= ba && ab >= bb)
			return 2;
		else if (ba >= aa && ba >= ab && ba >= bb)
			return 3;
		else
			return 4;
	};
	
	//strats
	var random = function(pos) {
		if (Math.random() < .5)
			return 1;
		else
			return 2;
	};
	var A100 = function(pos) {
		return 1;
	};
	var B100 = function(pos) {
		return 2;
	};
	var greedy = function(pos) {
		var x = simFindBiggestPayoff();
		if (x < 3)
			return 1;
		else
			return 2;
	};
	var generous = function(pos) {
		var x = simFindBiggestPayoff();
		if (x == 1 || x == 3)
			return 1;
		else
			return 2;
	};
	var minimax = function(pos) {
		if (generous() == 1)
			return 2;
		else
			return 1;
	};
	var titForTat = function(pos) {
		if (pos == 1)
			return lastMoveTop;
		else
			return lastMoveSide;
	};
	var beatLast = function(pos) {
		if (pos == 2 && lastMoveSide == 1) {
			if (aa > ba)
				return 1;
			else
				return 2;
		} else if (pos == 2 && lastMoveSide == 2) {
			if (ab > bb)
				return 1;
			else
				return 2;
		} else if (pos == 1 && lastMoveTop == 1) {
			if (aa > ba)
				return 1;
			else
				return 2;
		} else {
			if (ab > bb)
				return 1;
			else
				return 2;
		}
	};
	
	
	//make sure to only use current strats
	var getNumberOfStrats = function() {
		if (stratBeatlast.active)
			return 8;
		if (stratTitfortat.active)
			return 7;
		if (stratMinimax.active)
			return 6;
		if (stratGenerous.active)
			return 5;
		if (stratGreedy.active)
			return 4;
		if (stratB100.active)
			return 3;
		if (stratA100.active)
			return 2;
		if (stratRandom.active)
			return 1;
		return 0;
	};
	
	var sRandom = {
		name: 'RANDOM',
		score: 0,
		cumScore: 0,
		scoreList: [],
		stdDev: 0,
		ave: 0,
		prob: 0,
		id: 1,
		pick: random
	};
	var sA100 = {
		name: 'A100',
		score: 0,
		cumScore: 0,
		scoreList: [],
		stdDev: 0,
		ave: 0,
		prob: 0,
		id: 2,
		pick: A100
	};
	var sB100 = {
		name: 'B100',
		score: 0,
		cumScore: 0,
		scoreList: [],
		stdDev: 0,
		ave: 0,
		prob: 0,
		id: 3,
		pick: B100
	};
	var sGreedy = {
		name: 'GREEDY',
		score: 0,
		cumScore: 0,
		scoreList: [],
		stdDev: 0,
		ave: 0,
		prob: 0,
		id: 4,
		pick: greedy
	};
	var sGenerous = {
		name: 'GENEROUS',
		score: 0,
		cumScore: 0,
		scoreList: [],
		stdDev: 0,
		ave: 0,
		prob: 0,
		id: 5,
		pick: generous
	};
	var sMinimax = {
		name: 'MINIMAX',
		score: 0,
		cumScore: 0,
		scoreList: [],
		stdDev: 0,
		ave: 0,
		prob: 0,
		id: 6,
		pick: minimax
	};
	var sTitForTat = {
		name: 'TIT FOR TAT',
		score: 0,
		cumScore: 0,
		scoreList: [],
		stdDev: 0,
		ave: 0,
		prob: 0,
		id: 7,
		pick: titForTat
	};
	var sBeatLast = {
		name: 'BEAT LAST',
		score: 0,
		cumScore: 0,
		scoreList: [],
		stdDev: 0,
		ave: 0,
		prob: 0,
		id: 8,
		pick: beatLast
	};
	
	var numOfStrats = getNumberOfStrats();
	
	var stratArrSide = [sRandom, sA100, sB100, sGreedy, sGenerous, sMinimax, sTitForTat, sBeatLast];
	var stratArrTop = [sA100, sB100, sGreedy, sGenerous, sMinimax, sTitForTat, sBeatLast];
	
	//correct for number of strats
	stratArrSide = stratArrSide.slice(0, numOfStrats);
	stratArrTop = stratArrTop.slice(0, numOfStrats - 1);
	stratArrTop.push(sRandom);
	
	for (var l = 0; l < timsAutomation.tourney.testLoopLimit; l++) {
		//first loop with random
		for (var v = 0; v < stratArrSide.length; v++) {
			for (var i = 0; i < 10; i++) {
				var hm = sRandom.pick(1);
				var vm = stratArrSide[v].pick(2);
				lastMoveSide = hm;
				lastMoveTop = vm;
				if (hm == 1 && vm == 1) {
					sRandom.score += aa;
					stratArrSide[v].score += aa;
				} else if (hm == 1 && vm == 2) {
					sRandom.score += ab;
					stratArrSide[v].score += ba;
				} else if (hm == 2 && vm == 1) {
					sRandom.score += ba;
					stratArrSide[v].score += ab;
				} else {
					sRandom.score += bb;
					stratArrSide[v].score += bb;
				}
			}
		}
		//loop with everything else
		for (var h = 1; h < stratArrSide.length; h++) {
			for (var v = 0; v < stratArrTop.length; v++) {
				for (var i = 0; i < 10; i++) {
					var hm = stratArrSide[h].pick(1);
					var vm = stratArrTop[v].pick(2);
					lastMoveSide = hm;
					lastMoveTop = vm;
					if (hm == 1 && vm == 1) {
						stratArrSide[h].score += aa;
						stratArrTop[v].score += aa;
					} else if (hm == 1 && vm == 2) {
						stratArrSide[h].score += ab;
						stratArrTop[v].score += ba;
					} else if (hm == 2 && vm == 1) {
						stratArrSide[h].score += ba;
						stratArrTop[v].score += ab;
					} else {
						stratArrSide[h].score += bb;
						stratArrTop[v].score += bb;
					}
				}
			}
		}
		for (var i = 0; i < stratArrSide.length; i++) {
			stratArrSide[i].scoreList.push(stratArrSide[i].score);
			stratArrSide[i].cumScore += stratArrSide[i].score;
			stratArrSide[i].score = 0;
		}
	}
	
	var stddev = function (list) {
		var popMean = list.reduce(function(total, next) { return total + next; }) / list.length;
		let sqrs = [];
		for (let i = 0; i < list.length; i++)
			sqrs.push(Math.pow(list[i] - popMean, 2));
		var top = sqrs.reduce(function (total,  num) { return total + num; });
		return Math.sqrt(top / list.length);
	};
	//average it out
	for (var i = 0; i < stratArrSide.length; i++) {
		stratArrSide[i].ave = stratArrSide[i].scoreList.reduce(function (total, num) { return total + num; }) / timsAutomation.tourney.testLoopLimit;
		stratArrSide[i].stdDev = stddev(stratArrSide[i].scoreList);
	}
	
	//calculate overlapping distrobution probabilities
	for (let i = 0; i < stratArrSide.length; i++) {
		let gtArr = [];
		let lowHalf = stratArrSide.slice(0, i);
		for (let j = 0; j < lowHalf.length; j++) {
			gtArr.push(lowHalf[j].scoreList);
		}
		let geArr = [];
		let highHalf = stratArrSide.slice(i+1, stratArrSide.length);
		for (let j = 0; j < highHalf.length; j++) {
			geArr.push(highHalf[j].scoreList);
		}
		stratArrSide[i].prob = timsAutomation.tourney.calcOverlap(stratArrSide[i].scoreList, {gt: gtArr, ge: geArr});
	}
	
	//set the score variable
	for (let i = 0; i < stratArrSide.length; i++) {
		if (timsAutomation.tourney.useScore) {
			stratArrSide[i].score = stratArrSide[i].cumScore;
		} else {
			stratArrSide[i].score = stratArrSide[i].prob * 100;
		}
	}
	
	//automatically choose correct strat
	var sortByScore = function(objs) {
		for (var i = 1; i < objs.length; i++) {
			let key = objs[i];
			let j = i - 1;
			while (j >= 0 && objs[j].score < key.score) {
				objs[j + 1] = objs[j];
				j--;
			}
			objs[j + 1] = key;
		}
	};
	sortByScore(stratArrSide);
	timsAutomation.tourney.stratPickerElements[stratArrSide[0].id].selected = 'selected';
	
	//set the score to ave if cumScore is used to sort
	if (timsAutomation.tourney.useScore) {
		for (let i = 0; i < stratArrSide.length; i++) {
			stratArrSide[i].score = stratArrSide[i].ave;
		}
	}
	
	timsAutomation.tourney.lastTest = stratArrSide;
	if (timsAutomation.tourney.printScoresOn == true)
		timsAutomation.tourney.printScores();
};
timsAutomation.tourney.intervalFunc = function() {
	let obj = timsAutomation.tourney;
	/*
	if (obj.relatedDiv.style.cssText == "display: none;") {
		if (obj.on)
			obj.buttonFunc();
		obj.button.disabled = true;
	} else
		obj.button.disabled = false;
	// */
	if (tourneyLvl != timsAutomation.tourney.lastTourneyLvl && stratRandom.active && obj.on) {
		timsAutomation.tourney.lastTourneyLvl = tourneyLvl;
		setTimeout(timsAutomation.tourney.runTest, timsAutomation.tourney.timeout);
	}
};

timsAutomation.tourney.printScores = function() {
	var obj = timsAutomation.tourney;
	var objs = obj.lastTest;
	for (var i = 0; i < objs.length; i++) {
		//console.log((i + 1) + ': ' + objs[i].name.padEnd(12) + '(' + (Math.round(objs[i].score)).toString().padStart(4) + ')');
		console.log('%d: %s(%s)', i + 1, objs[i].name.padEnd(12), (objs[i].score.toFixed(2) + (obj.useScore ? '' : '%')).padStart(7));
	}
};

timsAutomation.tourney.calcOverlap = function(primary, others) {
	function getElEq(x, b) {
		let count = 0;
		for (let i = 0; i < b.length; i++) {
			if (x == b[i]) {
				count++;
			}
		}
		return count;
	}
	function getElNe(x, b) {
		return b.length - getElEq(x, b);
	}
	function getElGt(x, b) {
		let count = 0;
		for (let i = 0; i < b.length; i++) {
			if (x > b[i]) {
				count++;
			}
		}
		return count;
	}
	function getElGe(x, b) {
		let count = 0;
		for (let i = 0; i < b.length; i++) {
			if (x >= b[i]) {
				count++;
			}
		}
		return count;
	}
	function getElLt(x, b) {
		return b.length - getElGe(x, b);
	}
	function getElLe(x, b) {
		return b.length - getElGt(x, b);
	}
	
	eq = [];
	ne = [];
	gt = [];
	ge = [];
	lt = [];
	le = [];
	
	if (others['eq'] != undefined)
		eq = others.eq;
	if (others['ne'] != undefined)
		ne = others.ne;
	if (others['gt'] != undefined)
		gt = others.gt;
	if (others['ge'] != undefined)
		ge = others.ge;
	if (others['lt'] != undefined)
		lt = others.lt;
	if (others['le'] != undefined)
		le = others.le;
	
	let top = 0;
	let bot = primary.length;
	for (let i = 0; i < eq.length; i++)
		bot *= eq[i].length;
	for (let i = 0; i < ne.length; i++)
		bot *= ne[i].length;
	for (let i = 0; i < gt.length; i++)
		bot *= gt[i].length;
	for (let i = 0; i < ge.length; i++)
		bot *= ge[i].length;
	for (let i = 0; i < lt.length; i++)
		bot *= lt[i].length;
	for (let i = 0; i < le.length; i++)
		bot *= le[i].length;
	
	for (let j = 0; j < primary.length; j++) {
		let x = primary[j];
		let tmp = 1;
		for (let i = 0; i < eq.length; i++)
			tmp *= getElEq(x, eq[i]);
		for (let i = 0; i < ne.length; i++)
			tmp *= getElNe(x, ne[i]);
		for (let i = 0; i < gt.length; i++)
			tmp *= getElGt(x, gt[i]);
		for (let i = 0; i < ge.length; i++)
			tmp *= getElGe(x, ge[i]);
		for (let i = 0; i < lt.length; i++)
			tmp *= getElLt(x, lt[i]);
		for (let i = 0; i < le.length; i++)
			tmp *= getElLe(x, le[i]);
		top += tmp
	}
	
	return top / bot;
};

//swarm gift functions
timsAutomation.swarmGifts.intervalFunc = function() {
	/*
	if (memory < 120) {
		if (timsAutomation.swarmGifts.on)
			timsAutomation.swarmGifts.buttonFunc();
		timsAutomation.swarmGifts.button.disabled = true;
	} else
		timsAutomation.swarmGifts.button.disabled = false;
	// */
	let obj = timsAutomation.swarmGifts;
	if (memory >= 70 && timsAutomation.swarmGifts.on && humanFlag == false) {
		if (memory < 125) {
			obj.curAddMem();
		} else if (memory >= 125 && processors < 75) {
			obj.curAddProc();
		} else if (memory < 150 && processors >= 75) {
			obj.curAddMem();
		} else if (memory >= 150 && processors < 100) {
			obj.curAddProc();
		} else if (memory < 175 && processors >= 100) {
			obj.curAddMem();
		} else if (memory >= 175 && processors < 175) {
			obj.curAddProc();
		} else if (memory < 200 && processors >= 175) {
			obj.curAddMem();
		} else if (memory >= 200 && processors < 200) {
			obj.curAddProc();
		} else if (memory < 250 && processors >= 200) {
			obj.curAddMem();
		} else if (memory >= 250 && processors < 250) {
			obj.curAddProc();
		} else if (memory < 266 && processors >= 250) {
			obj.curAddMem();
		} else if (memory >= 266 && processors < 500) {
			obj.curAddProc();
		} else if (memory < 300 && processors >= 500) {
			obj.curAddMem();
		} else if (memory >= 300 && processors < 1000){
			obj.curAddProc();
		} else if (memory < 500 && processors >= 1000) {
			obj.curAddMem();
		} else if (memory >= 500 && processors < 5000){
			obj.curAddProc();
		} else if (memory < 1000 && processors >= 5000) {
			obj.curAddMem();
		} else {
			obj.curAddProc();
		}
	}
};

timsAutomation.swarmGifts.cleanAddProc = function() {
	if (trust>0 || swarmGifts>0){
		processors=processors+1;
		creativitySpeed = Math.log10(processors) * Math.pow(processors,1.1) + processors-1;    
		processorsElement.innerHTML = processors;
		if (humanFlag == 0){
			swarmGifts = swarmGifts - 1;
		}
	}
};
timsAutomation.swarmGifts.curAddProc = timsAutomation.swarmGifts.cleanAddProc;
timsAutomation.swarmGifts.cleanAddMem = function() {
	if (trust>0 || swarmGifts>0){
		memory=memory+1;
		memoryElement.innerHTML = memory;
		if (humanFlag == 0){
			swarmGifts = swarmGifts - 1;
		}
	}
};
timsAutomation.swarmGifts.curAddMem = timsAutomation.swarmGifts.cleanAddMem;

//quantum functions
timsAutomation.quantum.intervalFunc = function() {
	let computeButton = timsAutomation.quantum.computeButton;
	let obj = timsAutomation.quantum;
	if (qChips[0].active != 0) {
		obj.button.disabled = false;
		var q = 0;
		for (var i = 0; i < qChips.length; i++) {
			q += qChips[i].value;
		}
		var qq = Math.ceil(q * 360);
		if (qq > 0 && standardOps + tempOps < memory * 1000 && timsAutomation.quantum.on == true) {
			if (obj.waitCounter == 0)
				qComp();
			obj.waitCounter += obj.time;
			if (obj.waitCounter >= obj.clickTime) {
				obj.waitCounter = 0;
			}
			computeButton.disabled = true;
		} else if (qq <= 0) {
			computeButton.disabled = true;
			if (obj.waitCounter > 0) {
				obj.waitCounter += obj.time;
				if (obj.waitCounter >= obj.clickTime) {
					obj.waitCounter = 0;
				}
			}
		} else {
			computeButton.disabled = false;
			if (obj.waitCounter > 0) {
				obj.waitCounter += obj.time;
				if (obj.waitCounter >= obj.clickTime) {
					obj.waitCounter = 0;
				}
			}
		}
	} else {
		computeButton.disabled = true;
		/*
		if (obj.on)
			obj.buttonFunc();
		obj.button.disabled = true;
		// */
	}
};


//phase1proc functions
timsAutomation.phase1proc.intervalFunc = function() {
	let button = timsAutomation.phase1proc.procButton;
	let obj = timsAutomation.phase1proc;
	/*
	if (memory < 68) {
		if (timsAutomation.phase1proc.on)
			timsAutomation.phase1proc.buttonFunc();
		timsAutomation.phase1proc.button.disabled = true;
	}
	// */
	/*
	if (memory >= obj.memLimit && !humanFlag) {
		timsAutomation.phase1proc.button.disabled = false;
	}
	// */
	let on = obj.on;
	if (processors < 5 && button.disabled == false && on) {
		addProc();
	} else if (memory < 35 && button.disabled == false && on) {
		addMem();
	} else if (memory < 45 && button.disabled == false && on) {
		if (trust - memory - processors >= 45 - memory) {
			addMem();
		} else {
			addProc();
		}
	} else if (memory < 55 && button.disabled == false && on) {
		if (trust - memory - processors >= 55 - memory) {
			addMem();
		} else {
			addProc();
		}
	} else if (memory < 70 && button.disabled == false && on) {
		if (trust - memory - processors >= 70 - memory || processors >= 15) {
			addMem();
		} else {
			addProc();
		}
	} else if (memory >= 70 && memory + processors < 100 && button.disabled == false && on) {
		addProc();
	} else if (memory + processors >= 100 && button.disabled == false && on) {
		addMem();
	} else if (!humanFlag) {
		clearInterval(timsAutomation.phase1proc.interval);
		timsAutomation.phase1proc.interval = null;
		if (timsAutomation.phase1proc.on)
			timsAutomation.phase1proc.buttonFunc();
		timsAutomation.phase1proc.button.disabled = true;
	}
};


//powerMoniter functions
timsAutomation.powerMonitor.intervalFunc = function() {
	let obj = timsAutomation.powerMonitor;
	if (obj.relatedDiv.style.display == '') {
		clearInterval(obj.interval);
		obj.interval = null;
		//*
		if (obj.on)
			obj.buttonFunc();
		obj.button.disabled = true;
		// */
		return;
	}
	if (humanFlag != 0 || spaceFlag != 0) {
		//clearInterval(obj.interval);
		//obj.interval = null;
		/*
		if (obj.on)
			obj.buttonFunc();
		obj.button.disabled = true;
		// */
		return;
	} else {
		obj.button.disabled = false;
	}
	/*
	if (obj.label == null) {
		obj.label = document.createElement("span");
		obj.br1 = document.createElement("br");
		obj.br2 = document.createElement("br");
		let div = document.getElementById("powerDiv");
		let el = div.childNodes[18];
		div.insertBefore(obj.label, el);
		div.insertBefore(obj.br1, el);
		div.insertBefore(obj.br2, el);
	}
	*/
	if (obj.on) {
		obj.label.style.display = obj.br1.style.display = obj.br2.style.display = "";
	} else {
		obj.label.style.display = obj.br1.style.display = obj.br2.style.display = "none";
		return;
	}
	let supply = farmLevel * farmRate;
	let demand = (harvesterLevel + wireDroneLevel) * dronePowerRate + factoryLevel * factoryPowerRate;
	let cap = batteryLevel * batterySize;
	let currentPower = storedPower;
	let diffPower = cap - currentPower;
	let net = supply - demand;
	let t = 0;
	if (net > 0) {
		t = diffPower / net;
		obj.label.innerHTML = obj.formatTime(t) + " until full";
		obj.label.style.color = "";
	} else if (net < 0) {
		t = currentPower / -net;
		obj.label.innerHTML = obj.formatTime(t) + " until empty";
		obj.label.style.color = "#DD0000";
	} else {
		obj.label.innerHTML = "--:-- until full";
		obj.label.style.color = "";
	}
};

timsAutomation.powerMonitor.formatTime = function(t) {
	t = Math.round(t);
	if (t < 60) {
		if (t < 10)
			return "00:0" + t;
		else
			return "00:" + t;
	} else if (t < 3600) {
		let m = Math.floor(t / 60);
		let s = t % 60;
		if (m < 10)
			m = "0" + m;
		else
			m = "" + m;
		if (s < 10)
			s = ":0" + s;
		else
			s = ":" + s;
		return m + s;
	} else {
		let h = Math.floor(t / 3600)
		let m = Math.floor((t % 3600) / 60);
		let s = t % 60;
		if (m < 10)
			m = ":0" + m;
		else
			m = ":" + m;
		if (s < 10)
			s = ":0" + s;
		else
			s = ":" + s;
		return h + m + s;
	}
};


//targetDemand functions
timsAutomation.targetDemand.intervalFunc = function() {
	let obj = timsAutomation.targetDemand;
	if (!humanFlag) {
		clearInterval(obj.interval);
		obj.interval = null;
		//*
		if (obj.on)
			obj.buttonFunc();
		obj.button.disabled = true;
		// */
		return;
	}
	if (obj.on && (obj.relatedDiv.style.display == '' || obj.forceDisplay)) {
		obj.label.style = obj.br1.style = "";
	} else {
		obj.label.style = obj.br1.style = "display: none;";
		return;
	}
	obj.label.innerHTML = 'Target Demand: ' + formatWithCommas(obj.calcTargetDemand()) + '%';
};

timsAutomation.targetDemand.formatTime = timsAutomation.powerMonitor.formatTime;

timsAutomation.targetDemand.calcTargetDemand = function() {
	let x = demand / 100;
	if (x > 1)
		x = 1;
	return Math.floor(10 * Math.pow(clipRate / (7 * x), 20 / 23));
};


//betterWireBuyer functions
timsAutomation.betterWireBuyer.intervalFunc = function() {
	let obj = timsAutomation.betterWireBuyer;
	if (!humanFlag) {
		clearInterval(obj.interval);
		obj.interval = null;
		//*
		if (obj.on)
			obj.buttonFunc();
		obj.button.disabled = true;
		// */
		return;
	}
	if (obj.on && humanFlag && wireBuyerFlag && wireBuyerStatus) {
		if (wire <= (clipRate / 2)) {
			buyWire();
		}
	}
}

//probeSpec functions
timsAutomation.probeSpec.intervalFunc = function() {
	let obj = timsAutomation.probeSpec;
	if (spaceFlag == 0 || !obj.on) {
		return;
	}
	if (obj.increaseMaxTrustBtn.disabled == false) {
		obj.increaseMaxTrustBtn.onclick();
	}
	if (obj.increaseProbeTrustBtn.disabled == false) {
		obj.increaseProbeTrustBtn.onclick();
	}
	if (obj.combatDiv.style.display == 'none') {
		if (probeSpeed < 3) { if (obj.btns.raise[0].disabled == false) obj.btns.raise[0].onclick(); }
		else if (probeNav < 2) { if (obj.btns.raise[1].disabled == false) obj.btns.raise[1].onclick(); }
		else if (probeRep < 5) { if (obj.btns.raise[2].disabled == false) obj.btns.raise[2].onclick(); }
		else if (probeHaz < 5) { if (obj.btns.raise[3].disabled == false) obj.btns.raise[3].onclick(); }
		else if (probeFac < 1) { if (obj.btns.raise[4].disabled == false) obj.btns.raise[4].onclick(); }
		else if (probeHarv < 2) { if (obj.btns.raise[5].disabled == false) obj.btns.raise[5].onclick(); }
		else if (probeWire < 2) { if (obj.btns.raise[6].disabled == false) obj.btns.raise[6].onclick(); }
		else if (probeUsedTrust == 20) {
			if (probeLaunchLevel < 10) {
				makeProbe();
			}
		}
	} else if (probeCombat == 0) {
		if (probeSpeed > 1) { obj.btns.lower[0].onclick(); }
		else if (probeNav > 1) { obj.btns.lower[1].onclick(); }
		else if (probeHarv > 1) { obj.btns.lower[5].onclick(); }
		else if (probeWire > 1) { obj.btns.lower[6].onclick(); }
		else if (obj.btns.raise[7].disabled == false) { obj.btns.raise[7].onclick(); }
	} else {
		//this is because Harvester Drone Production level always goes to zero when loading
		if (probeHarv == 0) { if (obj.btns.raise[5].disabled == false) obj.btns.raise[5].onclick(); }
		
		else if (probeCombat < 7) { if (obj.btns.raise[7].disabled == false) obj.btns.raise[7].onclick(); }
		
		//else if (probeSpeed >= 10 && probeNav >= 10 && probeRep >= 10 && probeCombat < 10) { if (obj.btns.raise[7].disabled == false) obj.btns.raise[7].onclick(); }
		
		else if (probeSpeed <= probeNav && probeSpeed <= probeRep) { if (obj.btns.raise[0].disabled == false) obj.btns.raise[0].onclick(); }
		else if (probeNav < probeSpeed && probeNav <= probeRep) { if (obj.btns.raise[1].disabled == false) obj.btns.raise[1].onclick(); }
		else if (probeRep < probeSpeed && probeRep < probeNav) { if (obj.btns.raise[2].disabled == false) obj.btns.raise[2].onclick(); }
	}
}

//setting up the intervals
timsAutomation.tourney.reset();
timsAutomation.swarmGifts.reset();
timsAutomation.quantum.reset();
timsAutomation.phase1proc.reset();
timsAutomation.powerMonitor.reset();
timsAutomation.targetDemand.reset();
timsAutomation.betterWireBuyer.reset();
timsAutomation.probeSpec.reset();



timsAutomation.dom = document.createElement('div');
timsAutomation.dom.style = 'float: left; width: 210px; margin-left: 10px;';
document.getElementById('page').appendChild(timsAutomation.dom);

//*
timsAutomation.dom.appendChild(timsAutomation.tourney.button);
timsAutomation.dom.appendChild(timsAutomation.tourney.statusLabel);
timsAutomation.dom.appendChild(document.createElement('br'));
// */

//*
timsAutomation.dom.appendChild(timsAutomation.swarmGifts.button);
timsAutomation.dom.appendChild(timsAutomation.swarmGifts.statusLabel);
timsAutomation.dom.appendChild(document.createElement('br'));
// */

//*
timsAutomation.dom.appendChild(timsAutomation.quantum.button);
timsAutomation.dom.appendChild(timsAutomation.quantum.statusLabel);
timsAutomation.dom.appendChild(document.createElement('br'));
// */

//*
timsAutomation.dom.appendChild(timsAutomation.probeSpec.button);
timsAutomation.dom.appendChild(timsAutomation.probeSpec.statusLabel);
timsAutomation.dom.appendChild(document.createElement('br'));
// */

//*
timsAutomation.dom.appendChild(timsAutomation.powerMonitor.button);
timsAutomation.dom.appendChild(timsAutomation.powerMonitor.statusLabel);
timsAutomation.dom.appendChild(document.createElement('br'));
// */

//*
timsAutomation.dom.appendChild(timsAutomation.phase1proc.button);
timsAutomation.dom.appendChild(timsAutomation.phase1proc.statusLabel);
timsAutomation.dom.appendChild(document.createElement('br'));
// */

//*
timsAutomation.dom.appendChild(timsAutomation.targetDemand.button);
timsAutomation.dom.appendChild(timsAutomation.targetDemand.statusLabel);
timsAutomation.dom.appendChild(document.createElement('br'));
// */

//*
timsAutomation.dom.appendChild(timsAutomation.betterWireBuyer.button);
timsAutomation.dom.appendChild(timsAutomation.betterWireBuyer.statusLabel);
timsAutomation.dom.appendChild(document.createElement('br'));
// */

let temp = null;
timsAutomation.dom.appendChild(document.createElement('hr'));

temp = document.createElement('button');
temp.innerHTML = 'Buy All Clippers';
temp.onclick = timsAutomation.utils.endPhase1.run;
temp.style = "margin-bottom: 5px; margin-right: 5px;";
if (!humanFlag) {
	temp.disabled = true;
}
timsAutomation.utils.endPhase1.runBtn = temp;
timsAutomation.dom.appendChild(temp);
temp = document.createElement('button');
temp.innerHTML = 'X';
temp.onclick = timsAutomation.utils.endPhase1.cancel;
temp.style = "margin-bottom: 5px;";
temp.disabled = true;
timsAutomation.utils.endPhase1.cancelBtn = temp;
timsAutomation.dom.appendChild(temp);
timsAutomation.dom.appendChild(document.createElement('br'));

temp = document.createElement('button');
temp.innerHTML = 'Buy All Factories';
temp.onclick = timsAutomation.utils.endPhase2.run;
temp.style = "margin-bottom: 5px; margin-right: 5px;";
if (spaceFlag) {
	temp.disabled = true;
}
timsAutomation.utils.endPhase2.runBtn = temp;
timsAutomation.dom.appendChild(temp);
temp = document.createElement('button');
temp.innerHTML = 'X';
temp.onclick = timsAutomation.utils.endPhase2.cancel;
temp.style = "margin-bottom: 5px;";
temp.disabled = true;
timsAutomation.utils.endPhase2.cancelBtn = temp;
timsAutomation.dom.appendChild(temp);
timsAutomation.dom.appendChild(document.createElement('br'));


temp = document.createElement('span');
temp.innerHTML = 'Slider Value';
timsAutomation.dom.appendChild(temp);
timsAutomation.dom.appendChild(document.createElement('br'));
temp = document.createElement('button');
temp.innerHTML = '100';
temp.onclick = function() { sliderElement.valueAsNumber = 100; }
timsAutomation.dom.appendChild(temp);
temp = document.createElement('button');
temp.innerHTML = '198';
temp.onclick = function() { sliderElement.valueAsNumber = 198; }
timsAutomation.dom.appendChild(temp);
temp = document.createElement('button');
temp.innerHTML = '199';
temp.onclick = function() { sliderElement.valueAsNumber = 199; }
timsAutomation.dom.appendChild(temp);
temp = document.createElement('button');
temp.innerHTML = '200';
temp.onclick = function() { sliderElement.valueAsNumber = 200; }
timsAutomation.dom.appendChild(temp);
timsAutomation.dom.appendChild(document.createElement('br'));
//timsAutomation.dom.appendChild(document.createElement('br'));

if (spaceFlag) setTimeout(function() { harvesterLevel = wireDroneLevel; }, 1000);

if (humanFlag) { investStratElement.value = 'med'; }
if (!spaceFlag) { sliderElement.valueAsNumber = 100; }
if (spaceFlag) { sliderElement.valueAsNumber = 199; }

/*
stats = []
statsInterval = setInterval(function() {
	if (!spaceFlag) return;
	let obj = {
		'tick': ticks, 
		'drifters': drifterCount,
		'probes': probeCount,
		'factories': factoryLevel,
		'drones': harvesterLevel + wireDroneLevel,
		'paperclips': clips,
		'matter': foundMatter,
	};
	if (obj.factories == 0) return; //waiting for stuff to launch and start producing stuff
	if (milestoneFlag == 15) { //milestone 15 is the end of the game
		clearInterval(statsInterval);
		statsInterval = null;
		console.log('done collecting');
		return;
	}
	if (stats.length == 0) {
		console.log('starting collection');
	}
	stats.push(obj);
}, 2500);
// */
