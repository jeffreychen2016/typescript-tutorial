// when we do not know the property name nor the property count
// we can use the index properties
// interface ErrorContainer {
//     [prop: string]: string
// }

// this also works
type ErrorContainer2 = {
    [prop: string]: string
}

const errorBag: ErrorContainer2 = {
    email: 'this is not an email',
    header: 'header is not valid'
}