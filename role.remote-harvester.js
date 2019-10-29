const CreepsBase = require('creeps');

class roleRemoteHarvester extends CreepsBase {
    constructor(role = 'Remote-Harvester') {
        super(role);
    }

    run (creep) {
        
        
        
       let prospect = new RoomPosition(41,15, 'E8N6');
let home = new RoomPosition(18,19, 'E9N6');
    if(creep.memory.prospecting && (!creep.pos.isNearTo(prospect) || creep.carry.energy === creep.carryCapacity)) {
        creep.memory.prospecting = false;
        creep.say('⛏ seeking');
    }
    if(!creep.memory.prospecting && (creep.carry.energy < creep.carryCapacity && creep.pos.isNearTo(prospect))) {
        creep.memory.prospecting = true;
        creep.say('Container');
    }
        if(creep.memory.prospecting) {
   var sources = creep.room.find(FIND_SOURCES_ACTIVE);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    }
     if(!creep.memory.prospecting && creep.carry.energy < creep.carryCapacity) {
        creep.moveTo(prospect)
    }
        else if (!creep.memory.prospecting && creep.carry.energy === creep.carryCapacity) {
            creep.moveTo(home);
        var targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                        s.store.energy < s.storeCapacity
        });
        if(targets) {
            if(creep.transfer(targets, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets, {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }}}
}

module.exports = new roleRemoteHarvester();