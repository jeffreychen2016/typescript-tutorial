"use strict";
class Department7 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // use `protected` access modifier in `members` prop, so the child class can access it
        this.members = [];
    }
    addMember(member) {
        this.members.push(member);
    }
    printMembers() {
        console.log(this.members);
    }
}
class ITDepartment2 extends Department7 {
    constructor(id, manager) {
        super(id, 'IT');
        this.manager = manager;
    }
    // overriding the `addMember` method specified in base class
    addMember(member) {
        const memberUpper = member.toUpperCase();
        // to access the `members` prop created in base class
        // have to use `protected` access modifier in the base class
        this.members.push(memberUpper);
    }
}
const it2 = new ITDepartment2(1, 'IT');
// calling the overriden method
it2.addMember('kevin'); // KEVIN
it2.printMembers();
