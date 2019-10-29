
require('extends_roompositions');
require('extends_rooms');
require('extends_structure');
require('extends_construction-site');

const roleMiner = require('role.miner');
const roleHarvester = require('role.harvester');
const roleMHarvester = require('role.Mharvester');
const roleHarvester2 = require('role.harvester2');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleRemoteBuilder1 = require('role.remote-builder1');
const roleRemoteHarvester = require('role.remote-harvester');
const roleRemoteHarvester2 = require('role.remote-harvester2');
const roleRemoteHarvester3 = require('role.remote-harvester3');
const roleRemoteUpgrader = require('role.remote-upgrader');


const roleSettler = require('role.settler');
const Spawner = require('struct-spawner');
const Phases = require('phases');
const Roads = require('roads');
const Towers = require('struct-towers');
const StructExtensions = require('struct-extensions');
const StructTowers = require('struct-towers');
const StructContainers = require('struct-containers');
const StructStorage = require('struct-storage');
const Extensions = require('struct-extensions');
const RoomUtils = require('rooms');
const BuildOrders = require('build-orders');
const RoomDefense = require('room-defense');
const utils = require('utils');
const initGame = require('game-init');
const Cache = require('cache');
const roleAttacker = require('role.attacker');
const roleDefender = require('role.defender');
const roleClaimer = require('role.claimer');


Cache.addEnergyProperties(Resource.prototype);
Cache.addEnergyProperties(Source.prototype);

module.exports.loop = function () {
    
  ///////////////////////////////////////////////////
  ////////////////////////ROOM ONE///////////////////
  ///////////////////////////////////////////////////
    
    
    var attacker = _.filter(Game.creeps, (creep) => creep.memory.role == 'attacker');
   // console.log('attackers: ' + attacker.length);
   
   var defender = _.filter(Game.creeps, (creep) => creep.memory.role == 'defender');
   
   var claimer = _.filter(Game.creeps, (creep) => creep.memory.role == 'claimer');
   // console.log('attackers: ' + attacker.length);
   
   if(attacker.length <0) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName, 
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,RANGED_ATTACK,RANGED_ATTACK,TOUGH,TOUGH,TOUGH,TOUGH], 'attacker' + Game.time, {memory:{role:'attacker'}});
            
    }
    
    if(claimer.length <0) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName, 
        Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,MOVE,MOVE,CLAIM], 'claimer' + Game.time, {memory:{role:'claimer'}});
            
    }
    
     var remoteHarvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'remote-harvester');
   // console.log('attackers: ' + attacker.length);
   
   if(remoteHarvester.length <0) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName,
        //LEVEL 1-4
        //Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK], 'remote-harvester' + Game.time, {memory:{role:'remote-harvester'}});
          
        //LEVEL 5  
        Game.spawns['Spawn1'].spawnCreep(  [WORK,CARRY,MOVE,MOVE,MOVE,CARRY,MOVE,CARRY,CARRY,WORK,CARRY,CARRY], 'remote-harvester' + Game.time, {memory:{role:'remote-harvester'}});
    }
    
     var remoteHarvester2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remote-harvester2');
   // console.log('attackers: ' + attacker.length);
   
   if(remoteHarvester2.length <3) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName, 
       // Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK], 'remote-harvester2-' + Game.time, {memory:{role:'remote-harvester2'}});
        
        
                Game.spawns['Spawn1'].spawnCreep(  [WORK,CARRY,MOVE,MOVE,MOVE,CARRY,MOVE,CARRY,CARRY,WORK,CARRY,CARRY], 'remote-harvester2' + Game.time, {memory:{role:'remote-harvester2'}});

    }
    
    var remoteHarvester3 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remote-harvester3');
   // console.log('attackers: ' + attacker.length);
   
   if(remoteHarvester3.length <0) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName, 
       // Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK], 'remote-harvester3-' + Game.time, {memory:{role:'remote-harvester3'}});
     
             Game.spawns['Spawn1'].spawnCreep(  [WORK,CARRY,MOVE,MOVE,MOVE,CARRY,MOVE,CARRY,CARRY,WORK,CARRY,CARRY], 'remote-harvester3' + Game.time, {memory:{role:'remote-harvester3'}});
       
    }
    
    var Harvester2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2');
   // console.log('attackers: ' + attacker.length);
   
   if(Harvester2.length <3) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName, 
        Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY], 'harvester2-' + Game.time, {memory:{role:'harvester2'}});
            
    }
    
    var remoteBuilder1 = _.filter(Game.creeps, (creep) => creep.memory.role == 'remote-builder1');
   // console.log('attackers: ' + attacker.length);
   
   if(remoteBuilder1.length <0) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName, 
        Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY], 'remote-builder1' + Game.time, {memory:{role:'remote-builder1'}});
            
    }
    
    var remoteUpgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'remote-upgrader');
   // console.log('attackers: ' + attacker.length);
   
   if(remoteUpgrader.length <0) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName, 
        Game.spawns['Spawn1'].spawnCreep([MOVE,WORK,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY], 'remote-upgrader' + Game.time, {memory:{role:'remote-upgrader'}});
            
    }
    
     var MHarvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'Mharvester');
   // console.log('attackers: ' + attacker.length);
   
   if(MHarvester.length <1) {
        //var newName = 'attacker' + Game.time;
        //nsffffe.log('Spawning new attacker: ' + newName);
        //Game.spawns['Spawn1'].spawnCreep([ATTACK,MOVE,MOVE,MOVE,TOUGH], newName,
        //LEVEL 1-4
        //Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,WORK], 'remote-harvester' + Game.time, {memory:{role:'remote-harvester'}});
          
        //LEVEL 5  
        Game.spawns['Spawn1'].spawnCreep(  [WORK,CARRY,MOVE,MOVE,MOVE,MOVE,WORK], 'Mharvester' + Game.time, {memory:{role:'Mharvester'}});
    }
    
  ///////////////////////////////////////////////////
  ////////////////////////ROOM TWO///////////////////
  ///////////////////////////////////////////////////
    
     
   
   
   
   ///////////////////////////////////////////////////
  ////////////////////////LOG STUFF///////////////////
  ///////////////////////////////////////////////////
  
var R1energyCapacity=Game.rooms.E9N6.energyCapacityAvailable;
var R1energyAvailable =Game.rooms.E9N6.energyAvailable;

var R2energyCapacity=Game.rooms.E8N5.energyCapacityAvailable;
var R2energyAvailable =Game.rooms.E8N5.energyAvailable;

console.log("Room 1 energy: "+R1energyAvailable+" out of "+R1energyCapacity+" Max");
console.log("Room 2 energy: "+R2energyAvailable+" out of "+R2energyCapacity+" Max");
    
    ///////////////////////////////////////////////////
  ////////////////////////ROOM DEFENSE///////////////////
  ///////////////////////////////////////////////////
    
   for(let roomName in Game.rooms) {
    

    var hostiles = Game.rooms[roomName].find(FIND_HOSTILE_CREEPS);
    if(hostiles.length > 0) {
        if(defender.length <5){
       // Game.spawns['Spawn1'].spawnCreep([MOVE,MOVE,ATTACK], 'defender' + Game.time, {memory:{role:'defender'}});
        }
    }

   } 
    
    


    
    
    

    let phaseNumber = Phases.getCurrentPhaseNumber(Game.spawns['Spawn1'].room);
    
    console.log('Phase: ' + phaseNumber)

    initGame(phaseNumber);
    Cache.calculateProjectedEnergy(); // recalculate projected energy at the beginning of each tick.
    // TODO: What about Creeps/Towers that have finished charging last tick, and will clear this tick?

    if(Game.cpu.tickLimit < 50) {
        console.log('Game cpu dangerously low ' + JSON.stringify(Game.cpu));
        return;
    }

    let hasTowers = {};
    for(let roomName in Game.rooms) {

        let room = Game.rooms[roomName],
            hasSpawner = false,
            structures = room.find(FIND_MY_STRUCTURES, {filter: (s) => {
                return s.structureType === STRUCTURE_SPAWN || s.structureType === STRUCTURE_TOWER;
            } });

        hasTowers[roomName] = false;
        
        for(let name in structures) {
            let s = structures[name];
            if(s.structureType === STRUCTURE_SPAWN) {
                hasSpawner = true;
                Spawner.run(s);
            } else if (s.structureType === STRUCTURE_TOWER) {
                Towers.run(s);
                hasTowers[roomName] = true;
            }
        }
        
        if (hasSpawner && Game.time % 100 === 3) {
            console.log('Attempting to build');
            console.log('build orders: ' + Memory.con[room.name].length + ' ' + JSON.stringify(Memory.con[room.name].map(x => x.type)));

            RoomDefense.buildInRoom(room);
            StructExtensions.buildInRoom(room);
            StructTowers.buildInRoom(room);
            StructStorage.buildInRoom(room);
            StructContainers.buildInRoom(room);
            Spawner.buildInRoom(room);

            // release new work for the builders if possible
            BuildOrders.execute(room);
        }
/*
        // Claimed a new room, build a spawner
        if (!hasSpawner && room.controller.my) {
            let sites = Spawner.getMySites(room);
            if(sites.length === 0) {
                console.log(room + ' building first spawner');
                Spawner.buildInRoom(room);
            }
            
        }*/
    }
    
    ///////////////////////////////////////////////////
  ////////////////////////CREEP ROLE ASSIGNMENT///////////////////
  ///////////////////////////////////////////////////

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];

        if( creep.spawning) continue;
        
        // all preruns are the same.
        roleHarvester.preRun(creep);
        roleMiner.preRun(creep);
        roleAttacker.preRun(creep);

       if (roleMiner.is(creep)) {
            roleMiner.run(creep);
            continue;
       }
       
       //if (roleAttacker.is(creep)) {
        //    roleAttacker.run(creep);
       //     continue;
      // }
       
       
        if(roleSettler.is(creep)) {
            roleSettler.run(creep);
            continue;
        }
        if(roleRemoteBuilder1.is(creep)) {
            roleRemoteBuilder1.run(creep);
            continue;
        }
        
        if (creep.memory.role == "attacker") {
            roleAttacker.run(creep);
        }
        if (creep.memory.role == "Mharvester") {
            roleMHarvester.run(creep);
        }
        
        if (creep.memory.role == "defender") {
            roleDefender.run(creep);
        }
        
        if (creep.memory.role == "claimer") {
            roleClaimer.run(creep);
        }
        
        if (creep.memory.role == "harvester2") {
            roleHarvester2.run(creep);
        }
        
        if (creep.memory.role == "remote-harvester") {
           roleRemoteHarvester.run(creep);
        }
        
        if (creep.memory.role == "remote-harvester2") {
            roleRemoteHarvester2.run(creep);
        }
        
        if (creep.memory.role == "remote-harvester3") {
            roleRemoteHarvester3.run(creep);
        }
        
        if (creep.memory.role == "remote-upgrader") {
           roleRemoteUpgrader.run(creep);
        }
        
        if (creep.memory.role == "remote-builder1") {
            roleRemoteBuilder1.run(creep);
        }

        if (!creep.busy && roleBuilder.is(creep)) {
            roleBuilder.run(creep, hasTowers[creep.room.name]);
            if (!creep.busy) roleHarvester.run(creep);
        }

        if (!creep.busy && roleHarvester.is(creep)) {
            roleHarvester.run(creep);
        }
        
        

        if (!creep.busy && creep.memory.role != "attacker" && !creep.busy && creep.memory.role != "Mharvester" && !creep.busy && creep.memory.role != "claimer"  && !creep.busy && creep.memory.role != "remote-builder1" && !creep.busy && creep.memory.role != "remote-upgrader" && !creep.busy && creep.memory.role != "remote-harvester" && !creep.busy && creep.memory.role != "remote-harvester2" && !creep.busy && creep.memory.role != "remote-harvester3"  && !creep.busy && creep.memory.role != "defender") { // Upgrader, also the catch-all
            roleUpgrader.run(creep);
        }

        if (creep.ticksToLive === 1) {
            creep.say('☠️ dying');
            console.log(`${creep} ${creep.pos} died naturally.`);
            for(const resourceType in creep.carry) {
                creep.drop(resourceType);
            }
            // TODO Inform a Spawner to replace the creep.
            delete Memory.creeps[creep.name];
        }
        
        
    }
    
    //console.log('attackers: ' + attacker.length);
   // console.log('Harvesters: ' + memory.length);
    
    
    utils.gc(); // garbage collect the recently deseased creep
    Roads.gc();
    Towers.gc();
    Extensions.gc();
    RoomUtils.gc();
    BuildOrders.gc();
};
