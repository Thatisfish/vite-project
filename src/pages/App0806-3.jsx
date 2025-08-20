import Employee from "../Components/Employee"
// const employees = {
//     emp1: {
//         name: "員工1",
//         age: "21"
//     },
//     emp2: {
//         name: "員工1",
//         age: "21"
//     },
//     emp3: {
//         name: "員工1",
//         age: "21"
//     }
// }

const arrEmployees = [
    {
        id: 1,
        name: "員工1",
        age: "21",
        h:"170",
        w:"50"
    },
    {
        id: 2,
        name: "員工2",
        age: "23",
        h:"180",
        w:"90"
    },
    {
        id: 3,
        name: "員工3",
        age: "25",
        h:"175",
        w:"65"
    }
]

const App = () => {
    return (
        <div>
            <h1>員工資料</h1>
            {
                arrEmployees.map((emp) => {
                    return (
                        <Employee name={emp.name} age={emp.age} h={emp.h} w={emp.w}/>
                    )
                })
            }
            {/* <Employee name={employees.emp1.name} age={employees.emp1.age} />
            <Employee name={employees.emp2.name} age={employees.emp2.age} />
            <Employee name={employees.emp3.name} age={employees.emp3.age} /> */}
        </div>
    )
}
export default App