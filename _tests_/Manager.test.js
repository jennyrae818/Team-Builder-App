const Manager = require('../lib/Manager')

// (name, id, email)

test('checking get role returns role', () => {
    let e = new Manager('Alice', 45, 'email@email.com') 
    expect(e.getRole()).toBe('Manager')
})