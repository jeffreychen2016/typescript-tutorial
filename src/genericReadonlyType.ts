// use `Readonly` to lock the array so it can not be modified
const namelist: Readonly<string[]> = ['jeffrey', 'kevin']

// namelist.push('test') // this throws because because Readonly can not be modified