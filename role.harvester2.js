const CreepsBase = require('creeps');

class RoleHarvester2 extends CreepsBase {
    constructor(role = 'Harvester2') {
        super(role);
    }

    run (creep) {
       if(creep.carry.energy < creep.carryCapacity) {
        //var prospect = creep.moveTo(new RoomPosition(20,1, 'W57S45'))};
        
        
       // if((creep.pos.isEqualTo(20,1, 'W57S45') || creep.pos.isNearTo(20,1, 'W57S45')) && creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
        
    }}

    else {
        if(creep.carry.energy = creep.carryCapacity) {
        const stores = creep.pos.findClosestByPath(FIND_STRUCTURES, {
                filter: (s) => (s.structureType == STRUCTURE_EXTENSION || s.structureType == STRUCTURE_SPAWN || s.structureType == STRUCTURE_CONTAINER || s.structureType == STRUCTURE_STORAGE) &&
                        s.energy < s.energyCapacity});
                        
       // var targets = creep.moveTo(new RoomPosition(12,16, 'W57S44'));
        if(stores) {
            if(creep.transfer(stores, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(stores, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }}}
}

module.exports = new RoleHarvester2();