class Department8 {
    private firstReport: string;

    // by default, the private member can not be accessed
    // so, use getter to get the value of private prop
    get oldestReport() {
        return this.firstReport
    }

    // by default, the private member can not be accessed
    // so, use setter to change the value of private prop
    set oldestReport(value: string) {
        this.firstReport = value
    }

    constructor(private reports: string[]) {
        this.firstReport = reports[0]
    }
}

const department8 = new Department8(['cost report'])

// getter
console.log(department8.oldestReport) //  cost report

// setter
department8.oldestReport = 'some other report'
console.log(department8.oldestReport) // 'some other report'

