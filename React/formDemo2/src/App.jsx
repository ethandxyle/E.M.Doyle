import {useState} from "react";

const App = () => {
    const initialState = {
        fname: "",
        age: 0
    }

    // const [firstName, setFirstName] = useState("")
    // const [myAge, setMyAge] = useState(0)
    const [formData, setFormData] = useState(initialState)
    const {fname, age} = formData

    function handleSubmit(evt) {
        evt.preventDefault()
        console.log(formData)
    }

    function handleChange(event) {
        setFormData({...formData, [event.target.name]: event.target.value}
        )
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name:
                <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={handleChange}/>

            </label>
            <br/>
            <label>Age:
                <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={handleChange}/>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default App;


// // import {useState} from "react";
// import {useForm} from "react-hook-form";
// import {object, string, number} from "yup"
// import {yupResolver} from "@hookform/resolvers/yup";
//
// const App = () => {
//     const initialState = {
//         fname: "",
//         age: 0
//     }
//     const userSchema = object({
//         fname:
//             string()
//                 .required("This field is required")
//                 .max(3, "Must be less than 3 characters")
//     })
//     const {
//         register,
//         setValue,
//         handleSubmit,
//         reset,
//     } = useForm({
//         resolver: yupResolver(userSchema)
//     })
//     // const [formData, setFormData] = useState(initialState)
//     // const {fname, age} = formData
//     const onSubmit = (data) => {
//         console.log(data)
//         reset()
//     }
//     // function handleSubmit(evt) {
//     //     evt.preventDefault()
//     //     console.log(formData)
//     // }
//
//     function handleChange(event) {
//         // setFormData({...formData, [event.target.name]: event.target.value}
//         // )
//         // console.log(formData)
//         setValue(event.target.name, event.target.value)
//     }
//
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <label>First Name:
//                 <input
//                     type="text"
//                     {...register("fname")}
//                     required
//                     maxLength={3}
//                     onChange={handleChange}/>
//
//             </label>
//             <br/>
//             <label>Age:
//                 <input
//                     type="number"
//                     {...register("age")}
//                     min={21}
//                     max={99}
//                     // value={age}
//                     onChange={handleChange}/>
//             </label>
//             <br/>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };
//
// export default App;
// // const [firstName, setFirstName] = useState("")
// // const [myAge, setMyAge] = useState(0)
