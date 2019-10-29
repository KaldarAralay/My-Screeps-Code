const CreepsBase = require('creeps');

class roleMHarvester extends CreepsBase {
    constructor(role = 'MHarvester') {
        super(role);
    }

    run (creep) {
        
        
        
       let prospect = new RoomPosition(3,9, 'E9N6');
let home = new RoomPosition(6,11, 'E9N6');
    if(creep.memory.prospecting && (!creep.pos.isNearTo(prospect) || creep.carry[RESOURCE_CATALYST] === creep.carryCapacity)) {
        creep.memory.prospecting = false;
        creep.say('⛏ seeking');
    }
    if(!creep.memory.prospecting && (creep.carry[RESOURCE_CATALYST] < creep.carryCapacity && creep.pos.isNearTo(prospect))) {
        creep.memory.prospecting = true;
        creep.say('Container');
    }
        if(creep.memory.prospecting) {
   var sources = creep.room.find(FIND_MINERALS);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    }
     if(!creep.memory.prospecting && creep.carry[RESOURCE_CATALYST] < creep.carryCapacity) {
        creep.moveTo(prospect)
    }
        else if (!creep.memory.prospecting && creep.carry[RESOURCE_CATALYST] === creep.carryCapacity) {
            creep.moveTo(home);
        var targets = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_LAB)&&
                        s.mineralAmount < s.mineralCapacity
        });
        if(targets) {
            if(creep.transfer(targets, RESOURCE_CATALYST) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
        }
    }}}
}

module.exports = new roleMHarvester();