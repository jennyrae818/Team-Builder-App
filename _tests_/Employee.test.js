const Employee = require('../lib/Employee')

// (name, id, email)

test('checking get role returns role', () => {
    let e = new Employee('Alice', 45, 'email@email.com') 
    expect(e.getRole()).toBe('Employee')
})