const Engineer = require('../lib/Engineer')

// (name, id, email)

test('checking get role returns role', () => {
    let e = new Engineer('Alice', 45, 'email@email.com') 
    expect(e.getRole()).toBe('Engineer')
})