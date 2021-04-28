// type alias for union type
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

// type alias for object type
type User = { name: string; age: number }
const user1: User = { name: 'Jeffrey', age: 29 }