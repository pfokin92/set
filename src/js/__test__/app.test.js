
import Team from "../app";

const team = new Team();


test('Add char first time', ()=>{
    const team = new Team();
    team.add('swordsman')
    expect(team.toArray()).toEqual(['swordsman'])
});

test('Add char second time', ()=>{
    const team = new Team();
    team.add('swordsman');
    expect(team.add('swordsman')).toThrowError(new Error('Объект уже существует в команде'))
});

test('Add all chars', ()=>{
    const team = new Team();
    team.addAll('swordsman','deamon','bowman')
    expect(team.toArray()).toEqual(['swordsman','deamon','bowman'])
});

test('Add all chars double', ()=>{
    const team = new Team();
    expect(team.addAll('swordsman','deamon','bowman','swordsman')).toThrowError(new Error('Объект уже существует в команде'))
});
