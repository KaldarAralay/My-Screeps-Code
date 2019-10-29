const roleHarvester = require('role.harvester');
const CreepsBase = require('creeps');
const RoomsUtils = require('rooms');


class roleRemoteBuilder1 extends CreepsBase {
    constructor(role = 'Remote-Builder1') {
        super(role);
    }
    
    

    
    run (creep) {
        
        
        
        
        
       let prospect = new RoomPosition(45,45, 'E8N5');
let home = new RoomPosition(29,38, 'E8N5');
    if(creep.memory.prospecting && (!creep.pos.isNearTo(prospect) || creep.carry.energy === creep.carryCapacity)) {
        creep.memory.prospecting = true;
        creep.say('⛏ seeking');
    }
    if(!creep.memory.prospecting && (creep.carry.energy < creep.carryCapacity && creep.pos.isNearTo(prospect))) {
        creep.memory.prospecting = true;
        creep.say('Building');
    }
        if(creep.memory.prospecting) {
   var sources = creep.room.find(FIND_SOURCES_ACTIVE);
        if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
        }
    }
     if(!creep.memory.prospecting && creep.carry.energy < creep.carryCapacity) {
        creep.moveTo(prospect)
    }
        else if (!creep.memory.prospecting && creep.carry.energy === creep.carryCapacity) {
            
            
                
             // creep.moveTo(home);
       var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
		if(targets.length) {
			if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(targets[0]);
			}
		}

                
            
            
        }
        
    }
}

module.exports = new roleRemoteBuilder1();