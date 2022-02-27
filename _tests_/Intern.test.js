const Intern = require('../lib/Intern')

// (name, id, email)

test('checking get role returns role', () => {
    let e = new Intern('Alice', 45, 'email@email.com') 
    expect(e.getRole()).toBe('Intern')
})